# CloudStore Architecture Analysis

*Complete architectural documentation and codebase analysis*

## Table of Contents
- [Overview](#overview)
- [Project Structure](#project-structure)
- [Client SDK Architecture](#client-sdk-architecture)
- [Backend Server Architecture](#backend-server-architecture)
- [Database Layer](#database-layer)
- [Authentication & Security](#authentication--security)
- [Real-time Communication](#real-time-communication)
- [Rules Engine (CSEL)](#rules-engine-csel)
- [API Interfaces](#api-interfaces)
- [Data Flow](#data-flow)
- [Development Environment](#development-environment)
- [Configuration](#configuration)
- [Key Files Reference](#key-files-reference)

## Overview

**CloudStore** is a real-time database engine that provides Firebase Firestore-like functionality with self-hosting capabilities. It's built as a monorepo using Bun workspaces and features:

- **Real-time communication** via WebSockets (Socket.io)
- **MongoDB** for primary data storage
- **Redis** for tenant authentication and caching
- **Multi-tenant architecture** with JWT authentication
- **CSEL (Cloud Store Expression Language)** rules engine
- **Client SDK** for TypeScript/JavaScript applications

### Core Philosophy
- Self-hosted alternative to Firebase Firestore
- Real-time data synchronization without polling
- Fine-grained access control through rules engine
- Scalable multi-tenant architecture

## Project Structure

```
cloudstore/
├── source/
│   ├── client/                    # Client SDK (@kabeersnetwork/cloudstore)
│   ├── backends/default/          # Backend Server (@kabeersnetwork/cloudstore-backend)
│   ├── packages/csel/             # Expression Language (@kabeersnetwork/csel)
│   └── types/                     # Shared TypeScript definitions
├── example/                       # Example applications
├── tests/                         # Test suites
├── documentation/                 # Additional docs
└── package.json                   # Workspace configuration
```

### Workspaces
1. **`@kabeersnetwork/cloudstore`** - Client SDK and libraries
2. **`@kabeersnetwork/cloudstore-backend`** - Server backend
3. **`@kabeersnetwork/csel`** - Cloud Store Expression Language parser

## Client SDK Architecture

### Core Classes

#### CloudStore (`source/client/src/index.ts`)
Main client class responsible for:
- Socket.io connection management
- Authentication with JWT bearer tokens
- Configuration and connection state
- Cache management with IndexedDB
- Query context management

```typescript
interface ICloudStoreConstructor {
    server: {
        uri: string,
        access: { key: string },
        config: { upgradeToBackgroundSync: boolean }
    },
    authentication: {
        custom_token: { jwt: string }
    },
    cache: {
        active: "IF_NO_NETWORK",
        storage: { adapter: ImplementableStorageAdapter }
    },
    database: { name: string }
}
```

#### Collection (`source/client/src/classes/Collection.ts`)
Handles CRUD operations:
- **Watch**: Real-time subscriptions with query filters
- **Remove**: Document/collection deletion with query builders
- **Insert**: Document insertion (protected method)
- **Update**: Document updates (protected method)

#### QueryBuilder (`source/client/src/classes/QueryBuilder.ts`)
Fluent API for building queries:
- **Filters**: `where(field, operation, value)`
- **Ordering**: `orderBy(field, direction)`
- **Limiting**: `limit(count)`
- **Operations**: `EQUAL`, `GREATER`, `LESSER`, `GREATER_EQUAL`, `LESSER_EQUAL`, `ARRAY.IN`, `ARRAY.NOT_IN`

#### WatchableCollection (`source/client/src/classes/WatchableCollection.ts`)
Manages real-time subscriptions:
- Subscription lifecycle management
- Event handling for data changes
- Stream ID tracking
- Socket event listeners

### Storage Adapters

#### IndexedDB Adapter (`source/client/src/adapters.ts`)
```typescript
class IndexedDB implements ImplementableStorageAdapter {
    async get(key: string): Promise<void>
    async set(key: string, value: any): Promise<void>
    async remove(key: string): Promise<void>
}
```

#### Network Adapter
```typescript
class BrowserNetwork implements ImplementableNetworkAdapter {
    onNetworkUpdate(updateFn: (change: "CONNECTED" | "DISCONNECTED") => any)
}
```

## Backend Server Architecture

### Main Server (`source/backends/default/src/index.ts`)
- **Socket.io Server** on port 8080
- **CORS Configuration** for localhost:4321
- **Authorization Middleware** for JWT validation
- **Event Handlers** for config, collection, watch, CRUD operations

### Controllers

#### Authorization Controller (`source/backends/default/src/controllers/authorization.ts`)
Multi-tenant JWT authentication:
- Validates `authorization` header with Bearer token
- Requires `tenant_id` query parameter
- Retrieves tenant public key from Redis
- Verifies JWT using ES256 algorithm
- Attaches auth data to socket

```typescript
const Authorization = async (socket, next) => {
    // 1. Check authorization header
    // 2. Validate tenant_id
    // 3. Get tenant public key from Redis
    // 4. Verify JWT with ES256
    // 5. Attach auth data to socket
}
```

#### CRUD Controller (`source/backends/default/src/controllers/crud.ts`)
Handles database operations:

**Filter Mapping**:
```typescript
const FilterOperatorToMongoDBMap = {
    "EQUAL": "$eq",
    "GREATER": "$gt",
    "LESSER": "$lt",
    "GREATER_EQUAL": "$gte",
    "LESSER_EQUAL": "$lte"
}
```

**Operations**:
- `UpdateHandler`: updateOne/updateMany
- `DeleteHandler`: deleteOne/deleteMany with filters
- `InsertHandler`: insertMany for bulk operations
- `GetHandler`: find operations (planned)

#### Watch Controller (`source/backends/default/src/controllers/watch.ts`)
Real-time subscription management:
- MongoDB change streams for live updates
- Filter application to change events
- Resume token management for reliability
- Stream lifecycle (creation, pause, close)
- Active watchables tracking per socket

### Database Clients

#### MongoDB Client (`source/backends/default/src/db-internals/mongo-client.ts`)
```typescript
const MongoDatabasePromise = MongoClient.connect(process.env.MONGODB_URI);
```

#### Redis Client (`source/backends/default/src/db-internals/redis-client.ts`)
```typescript
const RedisClientPromise = createClient()
  .on("error", (err) => console.log("Redis Client Error", err))
  .connect();
```

## Database Layer

### MongoDB
- **Primary Storage**: Document storage and retrieval
- **Change Streams**: Real-time update notifications
- **Aggregation**: Complex query support
- **Collections**: Dynamic collection creation and management

### Redis
- **Tenant Keys**: Stores public keys for JWT verification
- **Session Data**: Caching layer for authentication
- **Key Format**: `tenant_id` → `public_key`

## Authentication & Security

### Multi-Tenant Architecture
1. **Tenant Registration**: Public/private key pairs stored in Redis
2. **Client Authentication**: JWT signed with tenant private key
3. **Server Validation**: JWT verified with tenant public key
4. **Request Authorization**: Tenant-scoped database access

### JWT Flow
```
Client → Server: Bearer JWT + tenant_id
Server → Redis: GET public_key by tenant_id
Server: Verify JWT with public_key (ES256)
Server: Attach auth data to socket
```

### Security Features
- ES256 asymmetric JWT verification
- Tenant isolation through database scoping
- Bearer token authentication
- Public key rotation support

## Real-time Communication

### Socket.io Events

#### Client → Server
- `config`: Database configuration
- `collection`: Collection existence check
- `watch`: Start real-time subscription
- `insert`: Document insertion
- `update`: Document updates
- `delete`: Document deletion

#### Server → Client
- `config-cb`: Configuration confirmation
- `collection-cb-{id}`: Collection existence response
- `watchable-change-{streamId}`: Real-time data updates
- `insert-cb-{refId}`: Insertion confirmation
- `update-cb-{refId}`: Update confirmation
- `delete-cb-{refId}`: Deletion confirmation

### Event System (`source/backends/default/src/events.ts`)
Centralized event naming:
```typescript
export default {
    client: {
        CONFIG: "config",
        INSERT_QUERY: "insert",
        WATCH: "watch"
    },
    server: {
        CONFIG_CALLBACK: "config-cb",
        INSERT_QUERY_CALLBACK: "insert-cb",
        WATCH_CALLBACK: (id: string) => "watchable-change-" + id
    }
}
```

## Rules Engine (CSEL)

### YAML Configuration (`source/backends/default/default-rules.yaml`)
```yaml
databases:
  - name: "cloudstore-demo"
    rules:
      collections:
        ".default":
          ".read": "$request.data.username === $operation.query.username"
          ".write": "$operation.config.upsert === TRUE"
        users:
          ".read": "$request.data.username === $operation.query.username"
          ".write": "$operation.config.upsert === TRUE"
```

### Variables Available
- `$request`: Client request data
- `$operation`: Database operation details
- `$database`: Database context

### Rules Parser (`source/backends/default/src/auth/rules.ts`)
```typescript
const ParseRules = async () => {
    return yaml.load(rulesFile) as {
        databases: Array<{
            name: string,
            rules: {
                collections: {
                    [collectionName: string]: {
                        '.write': string,
                        '.read': string
                    }
                }
            }
        }>
    }
}
```

## API Interfaces

### Type Definitions (`source/client/src/@server-types/index.ts`)

#### Watch Configuration
```typescript
interface IWatchConfig {
    stream: { id: string },
    watchable: {
        type: "kn.cloudstore.collection" | "kn.cloudstore.document",
        database: { name: string, version?: string },
        collection: { name: string },
        query: {
            structured: {
                from: { collection: string },
                where: Array<FieldFilter>,
                orderBy: { field: string, direction: IOrderByDirections },
                limit: number | null
            }
        }
    }
}
```

#### CRUD Operations
```typescript
interface IInsertConfig {
    type: "kn.cloudstore.document:array",
    ref: { id: string },
    database: { name: string, version?: string },
    collection: { name: string },
    options?: {},
    insertions: Array<{ data: object }>
}

interface IDeleteConfig {
    type: "kn.cloudstore.document:array" | "kn.cloudstore.document",
    database: { name: string, version?: string },
    ref: { id: string },
    collection: { name: string },
    document?: { id: string },
    query: { structured: { from: { collection: string }, where: Array<FieldFilter> }}
}
```

## Data Flow

### Connection Establishment
1. Client creates CloudStore instance with server URI and access key
2. Socket.io connection established with authorization header
3. Server validates JWT against tenant public key in Redis
4. Client sends config event with database name
5. Server confirms configuration

### Collection Operations
1. Client requests collection reference
2. Server checks collection existence in MongoDB
3. Client receives collection availability confirmation
4. Client can perform CRUD operations or start watching

### Real-time Subscriptions
1. Client calls `collection.watch(query, callback)`
2. Server creates MongoDB change stream with filters
3. Server sends initial data matching query
4. MongoDB emits change events to stream
5. Server forwards filtered changes to client
6. Client callback receives updated data

### CRUD Operations
1. Client builds query with QueryBuilder
2. Client emits operation (insert/update/delete) with query
3. Server applies filters and executes MongoDB operation
4. Server emits confirmation with operation result
5. Change streams notify all relevant subscribers

## Development Environment

### Setup Commands
```bash
# Install dependencies
bun install

# Start backend development server
bun run dev
# or
bun run backend:start

# Build client SDK
bun run client:build

# Build all workspaces
bun run build

# Run tests
bun run test

# Run linting
bun run lint
```

### Development Workflow
1. **Backend**: Hot reload with nodemon + TypeScript watch
2. **Client**: ESM/CJS builds with Bun bundler
3. **CSEL**: Expression language development
4. **Cross-package**: Workspace dependencies managed by Bun

### File Watching
- Backend: `tsc --watch` + `nodemon ./bundled/index.js`
- Client: `bun build --watch`
- Auto-restart on file changes

## Configuration

### Environment Variables (`source/backends/default/.env`)
```bash
# Database
MONGODB_URI=mongodb+srv://...
REDIS_URI=redis://localhost:6379

# Server
PORT=5000
NODE_ENV=development
ENV=DEVELOPMENT

# CORS
CORS_ALLOWED_ORIGINS=http://localhost:4321,http://localhost:5173

# JWT
JWT_SECRET=your-super-secret-jwt-key-for-lexa-backend
JWT_EXPIRES_IN=7d
```

### TypeScript Configuration
- **Base Config**: `tsconfig.base.json` with workspace paths
- **Client Config**: ESM/CJS dual build setup
- **Backend Config**: Node.js target with path mapping

### Package Dependencies

#### Client Dependencies
- `socket.io-client`: Real-time communication
- `idb-keyval`: IndexedDB storage adapter
- `jsonwebtoken`: JWT handling
- `uuid`: Unique ID generation
- `bson`: MongoDB object serialization

#### Backend Dependencies
- `socket.io`: WebSocket server
- `mongodb`: Database driver
- `redis`: Caching and auth storage
- `jsonwebtoken`: JWT verification
- `js-yaml`: Rules configuration parsing
- `dotenv`: Environment configuration

## Key Files Reference

### Client SDK
- `source/client/src/index.ts` - Main CloudStore class
- `source/client/src/classes/Collection.ts` - Collection operations
- `source/client/src/classes/QueryBuilder.ts` - Query construction
- `source/client/src/classes/WatchableCollection.ts` - Real-time subscriptions
- `source/client/src/adapters.ts` - Storage and network adapters
- `source/client/src/types.ts` - Type definitions

### Backend Server
- `source/backends/default/src/index.ts` - Main server entry
- `source/backends/default/src/controllers/authorization.ts` - Auth middleware
- `source/backends/default/src/controllers/crud.ts` - CRUD operations
- `source/backends/default/src/controllers/watch.ts` - Real-time subscriptions
- `source/backends/default/src/db-internals/mongo-client.ts` - MongoDB connection
- `source/backends/default/src/db-internals/redis-client.ts` - Redis connection
- `source/backends/default/src/events.ts` - Event naming system
- `source/backends/default/src/types.ts` - Backend type definitions

### Configuration & Rules
- `source/backends/default/.env` - Environment configuration
- `source/backends/default/default-rules.yaml` - Access control rules
- `source/backends/default/src/auth/rules.ts` - Rules parser

### Documentation
- `README.md` - Project overview and setup
- `WORKSPACE_GUIDE.md` - Bun workspace management
- `BUN_COMMANDS.md` - Command reference
- `source/client/DEVELOPMENT.md` - Client development guide
- `source/backends/default/DEVELOPMENT.md` - Backend development guide

---

*This documentation represents a complete analysis of the CloudStore codebase as of the current state. It serves as a comprehensive reference for understanding the architecture, implementation details, and development workflow.*