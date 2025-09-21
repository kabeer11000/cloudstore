# CloudStore - Complete Real-time Database System 🚀

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Real-time](https://img.shields.io/badge/Real--time-✓-green.svg)](#)

A powerful real-time database engine that provides Firebase Firestore-like functionality with self-hosting capabilities. Built with Node.js, MongoDB, Redis, and Socket.io for maximum performance and scalability.

## ✨ Features

- **🔄 Real-time Synchronization** - Instant data updates across all connected clients
- **🏢 Multi-tenant Architecture** - Secure tenant isolation with JWT authentication
- **📦 Complete CRUD Operations** - Create, Read, Update, Delete with advanced querying
- **🔍 Advanced Query Engine** - MongoDB-style filtering, sorting, and pagination
- **⚡ High Performance** - Optimized for speed and scalability
- **🛡️ Security First** - ES256 JWT authentication with tenant-specific keys
- **📱 Modern Client SDK** - TypeScript-first with React hooks and patterns
- **🔧 Self-hosted** - Full control over your data and infrastructure

## 🚀 Quick Start

### 1. Automated Setup (Recommended)

```bash
# Clone the repository
git clone <repository-url>
cd cloudstore

# Run the automated setup script
bun run setup

# Start the system
bun run dev:all
```

### 2. Manual Setup

#### Prerequisites
- **Bun** or **Node.js 18+**
- **MongoDB** (local or cloud)
- **Redis** (local or cloud)

#### Installation
```bash
# Install dependencies
bun install

# Build the client SDK
bun run client:build:all

# Set up environment
cp source/backends/default/.env.example source/backends/default/.env
# Edit .env with your database URLs

# Add test tenant to Redis
redis-cli SET "12" "-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE7S9jNNFeKXJaYcUh8FW6/FtOPsGqZNKaP8QANhOZwJYOGYEByAfGKzKhUAGVATVB/rE1bYXEQMD/DGOfPRdcMQ==\n-----END PUBLIC KEY-----"
```

#### Start Services
```bash
# Terminal 1: Start backend server
bun run backend:start

# Terminal 2: Start example app
bun run example:dev
```

Open your browser to `http://localhost:5173` to see the live demo!

## 📖 Documentation

### 📚 Complete Guides
- **[API Specification](./CLOUDSTORE_SPECIFICATION.md)** - Complete API reference
- **[Setup & Testing Guide](./SETUP_AND_TESTING_GUIDE.md)** - Detailed setup instructions
- **[Testing Checklist](./FINAL_TESTING_CHECKLIST.md)** - Comprehensive testing procedures
- **[Architecture Analysis](./CLOUDSTORE_ARCHITECTURE_ANALYSIS.md)** - Deep technical documentation

### 🔧 Development Guides
- **[Workspace Guide](./WORKSPACE_GUIDE.md)** - Bun workspace management
- **[Client Development](./source/client/DEVELOPMENT.md)** - Client SDK development
- **[Backend Development](./source/backends/default/DEVELOPMENT.md)** - Server development

## 💻 Usage Examples

### Basic Client Setup

```javascript
import CloudStore, { Adapters } from '@kabeersnetwork/cloudstore';

// Initialize CloudStore
const cloudStore = new CloudStore({
  server: {
    uri: 'http://localhost:8080',
    access: { key: 'your-jwt-token' }
  },
  database: { name: 'my-app' },
  cache: {
    active: 'IF_NO_NETWORK',
    storage: {
      adapter: new Adapters.IndexedDB('my-cache')
    }
  }
});

// Connect to server
cloudStore.connect();
```

### CRUD Operations

```javascript
// Get collection reference
const users = cloudStore.collection('users');

// Create documents
await users.insert({
  id: '123',
  name: 'John Doe',
  email: 'john@example.com',
  status: 'active'
});

// Read with filtering
const activeUsers = await users.get(
  cloudStore.query
    .where('status', 'EQUAL', 'active')
    .orderBy('createdAt', 'DESCENDING')
    .limit(10)
);

// Update documents
await users.update(
  cloudStore.query.where('id', 'EQUAL', '123'),
  { lastLogin: new Date().toISOString() }
);

// Delete documents
await users.remove(
  cloudStore.query.where('status', 'EQUAL', 'inactive')
);
```

### Real-time Subscriptions

```javascript
// Watch for real-time updates
users.watch(
  cloudStore.query.where('status', 'EQUAL', 'active'),
  (data) => {
    console.log('Users updated:', data.collection);
    updateUI(data.collection);
  }
);
```

### React Integration

```javascript
import { useCollection, useCloudStore } from './hooks/useCloudStore';

function UserList() {
  const { cloudStore } = useCloudStore();
  const { data: users, loading, error, operations } = useCollection(
    'users',
    cloudStore?.query.where('status', 'EQUAL', 'active')
  );

  const addUser = async (userData) => {
    await operations.insert(userData);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Client SDK    │    │  CloudStore     │    │   Database      │
│                 │◄──►│   Server        │◄──►│                 │
│ - CRUD Ops      │    │ - Authentication│    │ - MongoDB       │
│ - Real-time     │    │ - Query Engine  │    │ - Redis         │
│ - Caching       │    │ - Watch System  │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
        │                        │                        │
        │                        │                        │
        ▼                        ▼                        ▼
WebSocket Connection      Socket.io Server        Change Streams
```

### Key Components

- **Client SDK**: TypeScript library with React hooks
- **Backend Server**: Node.js with Socket.io for real-time communication
- **MongoDB**: Primary database with change streams for real-time updates
- **Redis**: Authentication cache and session management
- **CSEL**: Custom rules engine for access control

## 🛠️ Development Commands

```bash
# Setup and Development
bun run setup              # Automated environment setup
bun run dev:all           # Start backend + example app
bun run backend:start     # Start backend only
bun run example:dev       # Start example app only

# Building
bun run build:all         # Build everything
bun run client:build:all  # Build client SDK
bun run backend:build     # Build backend
bun run example:build     # Build example app

# Testing and Validation
bun run typecheck         # Check TypeScript
bun run lint             # Run linting
bun run validate         # Full validation (types + lint + build)

# Utilities
bun run clean            # Clean build artifacts
```

## 🎯 Live Demo Features

The included example application showcases:

### Todo App Demo
- **Real-time todo management** with instant sync
- **CRUD operations** (Create, Read, Update, Delete)
- **Filtering and sorting** capabilities
- **Offline support** with IndexedDB caching
- **Error handling** with user-friendly messages

### Full CloudStore Demo
- **User management interface** with complete CRUD
- **Dynamic query builder** for complex filtering
- **Real-time statistics dashboard**
- **Bulk operations** for efficiency
- **Advanced filtering** by multiple criteria

## 🔒 Security

CloudStore implements enterprise-grade security:

- **Multi-tenant JWT Authentication** with ES256 algorithm
- **Tenant-specific Public Keys** stored in Redis
- **Request Validation** and input sanitization
- **CORS Configuration** for cross-origin requests
- **Data Isolation** between tenants
- **Secure WebSocket** connections

## 🚀 Performance

Optimized for high performance:

- **MongoDB Change Streams** for efficient real-time updates
- **Redis Caching** for authentication and sessions
- **IndexedDB** client-side caching
- **Efficient Query Engine** with proper indexing
- **Connection Pooling** and resource optimization
- **Minimal Data Transfer** with targeted updates

## 📊 Monitoring & Debugging

Built-in debugging capabilities:

- **Connection Status Monitoring** in client applications
- **Comprehensive Error Handling** with meaningful messages
- **Development Logging** for debugging
- **Performance Metrics** tracking
- **Health Check Endpoints** for monitoring

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes with proper tests
4. **Run** `bun run validate` to ensure quality
5. **Submit** a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🆘 Support

- **Documentation**: Complete API reference and guides included
- **Examples**: Full-featured demo applications
- **Issues**: Report bugs via GitHub issues
- **Discussions**: Technical discussions and questions

## 🎉 Success Stories

CloudStore is perfect for:

- **Real-time Applications**: Chat apps, collaborative tools, live dashboards
- **Multi-tenant SaaS**: Applications requiring tenant isolation
- **Firebase Migration**: Self-hosted alternative to Firebase Firestore
- **Enterprise Solutions**: Full control over data and infrastructure
- **Rapid Prototyping**: Quick setup for MVP development

---

**Ready to build amazing real-time applications?**

Start with `bun run setup` and have a full real-time database running in minutes!

**Questions?** Check our comprehensive documentation or open an issue.

**⭐ Star this repo** if CloudStore helps you build better applications!