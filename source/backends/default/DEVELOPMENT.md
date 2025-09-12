# CloudStore Backend Development

This package contains the server-side implementation of CloudStore with MongoDB, Redis, and real-time WebSocket support.

## Overview

The CloudStore backend provides:
- RESTful API endpoints for data operations
- Real-time WebSocket connections via Socket.io
- MongoDB integration for data persistence
- Redis integration for caching and sessions
- JWT-based authentication system
- CSEL-based rules engine for data validation

## Architecture

```
src/
├── auth/           # Authentication and authorization
├── controllers/    # API endpoint controllers
├── db-internals/   # Database abstraction layer
├── rules/          # CSEL rules engine integration
├── config.ts       # Configuration management
├── events.ts       # WebSocket event handlers
├── index.ts        # Server entry point
└── types.ts        # TypeScript type definitions
```

## Development Setup

### Prerequisites

- MongoDB instance (local or remote)
- Redis instance (local or remote)
- Node.js 16+ (Bun handles this)

### Environment Setup

Create a `.env` file in the backend directory:

```bash
# Database
MONGODB_URI=mongodb://localhost:27017/cloudstore
REDIS_URL=redis://localhost:6379

# Server
PORT=3000
NODE_ENV=development

# Authentication  
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=24h

# CORS
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173
```

### Development Commands

```bash
# From project root
bun install

# Start development server with hot reload
bun run dev
# or
bun --cwd source/backends/default run dev

# Start server components separately
bun --cwd source/backends/default run run:node-start    # Nodemon
bun --cwd source/backends/default run run:ts-watch      # TypeScript watch
```

## Available Scripts

```bash
# Development with hot reload
bun run dev

# Production build and start
bun run build
bun run start

# TypeScript compilation
bun run run:ts-watch

# Node.js with nodemon
bun run run:node-start

# Documentation generation
bun run create:docs

# Clean build files
bun run remove:bundled
```

## Key Technologies

### Database Layer
- **MongoDB**: Primary data storage
- **MongoDB Language Model**: Schema validation
- **BSON**: Binary JSON serialization

### Caching & Sessions
- **Redis**: Session storage and caching
- **Memory**: In-memory fallback caching

### Real-time Communication  
- **Socket.io**: WebSocket server for real-time updates
- **WebSocket**: Native WebSocket support

### Authentication
- **JWT**: JSON Web Token authentication
- **bcrypt**: Password hashing (if implemented)

### Expression Language
- **@kabeersnetwork/csel**: Custom expression language for rules
- **CEL-JS**: Common Expression Language integration

## API Structure

### RESTful Endpoints

```typescript
// Collection operations
GET    /collections/:collection
POST   /collections/:collection
PUT    /collections/:collection/:id
DELETE /collections/:collection/:id

// Authentication
POST   /auth/login
POST   /auth/register
GET    /auth/me

// Real-time subscriptions via WebSocket
```

### WebSocket Events

```typescript
// Client -> Server
'subscribe'     # Subscribe to collection/document
'unsubscribe'   # Unsubscribe from updates
'create'        # Create document
'update'        # Update document  
'delete'        # Delete document

// Server -> Client
'document:created'  # Document created
'document:updated'  # Document updated
'document:deleted'  # Document deleted
'error'            # Operation error
```

## Database Rules Engine

The backend uses CSEL for server-side validation:

```javascript
// Example rule in CSEL
{
  "users": {
    "create": "auth.user != null && data.email != null",
    "read": "auth.user.id == resource.id || auth.user.role == 'admin'",
    "update": "auth.user.id == resource.id",
    "delete": "auth.user.role == 'admin'"
  }
}
```

## Development Workflow

### 1. Start Database Services

```bash
# MongoDB (if using Docker)
docker run -d -p 27017:27017 --name mongodb mongo:latest

# Redis (if using Docker)  
docker run -d -p 6379:6379 --name redis redis:latest
```

### 2. Configure Environment

```bash
# Copy example environment file
cp .env.example .env

# Edit .env with your database URLs
```

### 3. Start Development Server

```bash
# Start with hot reload
bun run dev

# Server will start on http://localhost:3000
# TypeScript files are watched and compiled automatically
# Node.js server restarts on file changes
```

### 4. Testing API Endpoints

```bash
# Test health endpoint
curl http://localhost:3000/health

# Test with authentication
curl -H "Authorization: Bearer <token>" http://localhost:3000/collections/users
```

## Debugging

### Enable Debug Logging

```bash
DEBUG=* bun run dev
DEBUG=cloudstore:* bun run dev
```

### Inspect Mode

```bash
# Start with Node.js inspector
bun --cwd source/backends/default run run:node-start

# Connect Chrome DevTools to localhost:9229
```

### Common Issues

1. **MongoDB Connection**: Check `MONGODB_URI` in .env
2. **Redis Connection**: Check `REDIS_URL` in .env  
3. **Port Conflicts**: Change `PORT` in .env
4. **TypeScript Errors**: Check `tsconfig.json` configuration

## Production Deployment

### Build for Production

```bash
# Compile TypeScript
bun run build

# Set production environment
NODE_ENV=production

# Start production server
node bundled/index.js
```

### Environment Variables

```bash
NODE_ENV=production
MONGODB_URI=mongodb://production-host:27017/cloudstore
REDIS_URL=redis://production-host:6379
JWT_SECRET=secure-production-secret
PORT=3000
```

### Docker Deployment

```dockerfile
FROM oven/bun:latest

WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

COPY src/ ./src/
COPY tsconfig.json ./
RUN bun run build

EXPOSE 3000
CMD ["node", "bundled/index.js"]
```

## Contributing

1. Follow TypeScript conventions
2. Add proper error handling
3. Include JSDoc comments for public APIs
4. Test WebSocket events thoroughly
5. Validate database rules with CSEL
6. Update API documentation for changes