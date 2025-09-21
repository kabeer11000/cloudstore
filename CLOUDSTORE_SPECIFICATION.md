# CloudStore API Specification v1.0

A real-time database system providing Firebase Firestore-like functionality with self-hosting capabilities.

## Table of Contents
- [Overview](#overview)
- [Architecture](#architecture)
- [Authentication](#authentication)
- [Client SDK API](#client-sdk-api)
- [Server API](#server-api)
- [Data Types](#data-types)
- [Query Language](#query-language)
- [Real-time Subscriptions](#real-time-subscriptions)
- [Error Handling](#error-handling)
- [Examples](#examples)

## Overview

CloudStore is a real-time document database that provides:
- **Real-time synchronization** across multiple clients
- **Multi-tenant architecture** with JWT-based authentication
- **MongoDB backend** with Redis for session management
- **Socket.io** for real-time communication
- **CRUD operations** with advanced querying
- **Collection-based** document storage

## Architecture

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

## Authentication

### Multi-Tenant JWT Authentication

CloudStore uses asymmetric JWT authentication with tenant-specific public keys.

#### Setup Process:
1. **Generate Key Pair** (ES256 algorithm)
2. **Store Public Key** in Redis: `SET tenant_id "PUBLIC_KEY_PEM"`
3. **Sign Tokens** with private key on client side
4. **Verify Tokens** with public key on server side

#### Required Headers:
```
Authorization: Bearer <JWT_TOKEN>
```

#### Required Query Parameters:
```
tenant_id=<TENANT_IDENTIFIER>
```

#### JWT Payload Example:
```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "tenant": "example-org",
  "iat": 1516239022,
  "exp": 1516325422
}
```

## Client SDK API

### Initialization

```javascript
import CloudStore, { Adapters } from '@kabeersnetwork/cloudstore';

const cloudStore = new CloudStore({
  server: {
    uri: 'http://localhost:8080',
    access: {
      key: 'JWT_TOKEN_HERE'
    },
    config: {
      upgradeToBackgroundSync: true
    }
  },
  authentication: {
    custom_token: {
      jwt: 'JWT_TOKEN_HERE'
    }
  },
  cache: {
    active: 'IF_NO_NETWORK',
    storage: {
      adapter: new Adapters.IndexedDB('cache-name')
    }
  },
  database: {
    name: 'my-database'
  }
});
```

### Connection Management

```javascript
// Connect to server
cloudStore.connect();

// Check connection status
const { isConnected, connectionError } = cloudStore.info;

// Get connection info
const info = cloudStore.info;
```

### Collection Operations

#### Get Collection Reference
```javascript
const collection = cloudStore.collection('users');
```

#### Query Builder
```javascript
const query = cloudStore.query
  .where('status', 'EQUAL', 'active')
  .where('age', 'GREATER', 18)
  .orderBy('createdAt', 'DESCENDING')
  .limit(10);
```

### CRUD Operations

#### Create (Insert)
```javascript
// Insert single document
const result = await collection.insert({
  id: 'user-123',
  name: 'John Doe',
  email: 'john@example.com',
  createdAt: new Date().toISOString()
});

// Insert multiple documents
const result = await collection.insert([
  { id: 'user-1', name: 'User 1' },
  { id: 'user-2', name: 'User 2' }
]);
```

#### Read (Get)
```javascript
// Get all documents
const allUsers = await collection.get(cloudStore.query);

// Get with filters
const activeUsers = await collection.get(
  cloudStore.query.where('status', 'EQUAL', 'active')
);

// Get with pagination
const paginatedUsers = await collection.get(
  cloudStore.query.limit(10).orderBy('createdAt', 'DESCENDING')
);
```

#### Update
```javascript
// Update documents matching query
const result = await collection.update(
  cloudStore.query.where('id', 'EQUAL', 'user-123'),
  { status: 'active', lastLogin: new Date().toISOString() }
);

// Update multiple documents
const result = await collection.update(
  cloudStore.query.where('status', 'EQUAL', 'pending'),
  { status: 'active' }
);
```

#### Delete
```javascript
// Delete documents matching query
const result = await collection.remove(
  cloudStore.query.where('id', 'EQUAL', 'user-123')
);

// Delete multiple documents
const result = await collection.remove(
  cloudStore.query.where('status', 'EQUAL', 'inactive')
);
```

### Real-time Subscriptions

```javascript
// Watch collection for changes
const subscription = collection.watch(
  cloudStore.query.where('status', 'EQUAL', 'active'),
  (data) => {
    console.log('Data updated:', data.collection);
    console.log('Change type:', data._update.operationType);
  }
);

// Stop watching
subscription.close(); // If supported by implementation
```

## Server API

### Socket.io Events

#### Client → Server Events

##### Configuration
```javascript
socket.emit('config', {
  database: 'database-name'
});
```

##### Collection Check
```javascript
socket.emit('collection', {
  name: 'collection-name',
  ref: { id: 'unique-ref-id' }
});
```

##### Insert Operation
```javascript
socket.emit('insert', {
  type: 'kn.cloudstore.document:array',
  ref: { id: 'operation-ref-id' },
  database: { name: 'database-name' },
  collection: { name: 'collection-name' },
  options: {},
  insertions: [
    { data: { field1: 'value1', field2: 'value2' } }
  ]
});
```

##### Update Operation
```javascript
socket.emit('update', {
  updatable: {
    type: 'kn.cloudstore.collection',
    ref: { id: 'operation-ref-id' },
    database: { name: 'database-name' },
    collection: { name: 'collection-name' },
    query: {
      structured: {
        from: { collection: 'collection-name' },
        where: [
          { field: 'id', op: 'EQUAL', value: 'user-123' }
        ],
        update: {
          data: { status: 'updated' }
        }
      }
    }
  }
});
```

##### Delete Operation
```javascript
socket.emit('delete', {
  type: 'kn.cloudstore.document:array',
  ref: { id: 'operation-ref-id' },
  database: { name: 'database-name' },
  collection: { name: 'collection-name' },
  query: {
    structured: {
      from: { collection: 'collection-name' },
      where: [
        { field: 'status', op: 'EQUAL', value: 'inactive' }
      ]
    }
  }
});
```

##### Get Operation
```javascript
socket.emit('get', {
  type: 'kn.cloudstore.document:array',
  ref: { id: 'operation-ref-id' },
  database: { name: 'database-name' },
  collection: { name: 'collection-name' },
  query: {
    structured: {
      from: { collection: 'collection-name' },
      where: [
        { field: 'status', op: 'EQUAL', value: 'active' }
      ]
    }
  }
});
```

##### Watch Operation
```javascript
socket.emit('watch', {
  stream: { id: 'unique-stream-id' },
  watchable: {
    type: 'kn.cloudstore.collection',
    database: { name: 'database-name' },
    collection: { name: 'collection-name' },
    query: {
      structured: {
        from: { collection: 'collection-name' },
        where: [
          { field: 'status', op: 'EQUAL', value: 'active' }
        ],
        orderBy: { field: 'createdAt', direction: 'DESCENDING' },
        limit: 100
      }
    }
  }
});
```

#### Server → Client Events

##### Configuration Response
```javascript
socket.on('config-cb', (response) => {
  // { _s: 'cloudstore@beta-0.1.1' }
});
```

##### Collection Response
```javascript
socket.on('collection-cb-{ref-id}', (response) => {
  // { exists: true, name: 'collection-name' }
});
```

##### Operation Responses
```javascript
socket.on('insert-cb-{ref-id}', (response) => {
  // { status: true, result: { insertedCount: 1, insertedIds: [...] } }
});

socket.on('update-cb-{ref-id}', (response) => {
  // { status: true, result: { modifiedCount: 1, matchedCount: 1 } }
});

socket.on('delete-cb-{ref-id}', (response) => {
  // { status: true, result: { deletedCount: 1 } }
});

socket.on('get-cb-{ref-id}', (response) => {
  // { status: true, data: [...] }
});
```

##### Watch Updates
```javascript
socket.on('watchable-change-{stream-id}', (data) => {
  // {
  //   collection: [...], // Current data
  //   _update: {        // Change information
  //     operationType: 'insert|update|delete|initial',
  //     fullDocument: {...}
  //   }
  // }
});
```

##### Error Events
```javascript
socket.on('watchable-error-{stream-id}', (error) => {
  // { error: 'Error message' }
});
```

## Data Types

### Filter Operations
```typescript
type IFilterOperations =
  | "EQUAL"
  | "GREATER"
  | "LESSER"
  | "GREATER_EQUAL"
  | "LESSER_EQUAL"
  | "ARRAY.IN"
  | "ARRAY.NOT_IN";
```

### Order Directions
```typescript
type IOrderByDirections = "ASCENDING" | "DESCENDING";
```

### Document Types
```typescript
type DocumentType =
  | "kn.cloudstore.document"      // Single document
  | "kn.cloudstore.document:array" // Multiple documents
  | "kn.cloudstore.collection";   // Collection operations
```

## Query Language

### Filter Syntax
```javascript
// Equality
query.where('field', 'EQUAL', 'value')

// Comparison
query.where('age', 'GREATER', 18)
query.where('score', 'LESSER_EQUAL', 100)

// Array operations
query.where('tags', 'ARRAY.IN', ['important', 'urgent'])
query.where('status', 'ARRAY.NOT_IN', ['deleted', 'archived'])

// Multiple conditions (AND logic)
query
  .where('status', 'EQUAL', 'active')
  .where('age', 'GREATER', 18)
  .where('role', 'ARRAY.IN', ['admin', 'user'])
```

### Sorting
```javascript
// Single field
query.orderBy('createdAt', 'DESCENDING')

// Multiple fields (call orderBy multiple times)
query
  .orderBy('priority', 'DESCENDING')
  .orderBy('createdAt', 'ASCENDING')
```

### Pagination
```javascript
// Limit results
query.limit(10)

// Combined with ordering for pagination
query
  .orderBy('createdAt', 'DESCENDING')
  .limit(20)
```

## Real-time Subscriptions

### Watch Lifecycle

1. **Subscribe**: Client calls `collection.watch(query, callback)`
2. **Initial Data**: Server sends current matching documents
3. **Change Detection**: MongoDB change streams detect modifications
4. **Filter Application**: Server applies query filters to changes
5. **Broadcast**: Filtered changes sent to subscribed clients
6. **Client Update**: Callback executed with new data

### Change Types
- `initial`: First data load
- `insert`: New documents added
- `update`: Existing documents modified
- `delete`: Documents removed
- `replace`: Document replaced entirely

### Subscription Management
```javascript
// Start watching
const subscription = collection.watch(query, (data) => {
  console.log('Collection updated:', data.collection);
});

// Stop watching (if stream ID available)
socket.emit('watch:stream-id:close', { stream: { id: 'stream-id' } });
```

## Error Handling

### Client Errors
```javascript
try {
  await collection.insert(data);
} catch (error) {
  console.error('Insert failed:', error.message);
  // Handle specific error types
  if (error.message.includes('validation')) {
    // Handle validation error
  }
}
```

### Server Error Responses
```javascript
{
  status: false,
  error: "Error message describing what went wrong"
}
```

### Common Error Types
- **Authentication Error**: Invalid JWT or missing tenant
- **Validation Error**: Invalid document structure
- **Network Error**: Connection lost
- **Database Error**: MongoDB operation failed
- **Permission Error**: Insufficient access rights

## Examples

### Complete Todo Application

```javascript
import CloudStore, { Adapters } from '@kabeersnetwork/cloudstore';

// Initialize CloudStore
const cloudStore = new CloudStore({
  server: {
    uri: 'http://localhost:8080',
    access: { key: 'JWT_TOKEN' }
  },
  database: { name: 'todo-app' },
  cache: {
    active: 'IF_NO_NETWORK',
    storage: {
      adapter: new Adapters.IndexedDB('todo-cache')
    }
  }
});

// Connect
cloudStore.connect();

// Get todos collection
const todos = cloudStore.collection('todos');

// Add new todo
async function addTodo(text) {
  try {
    await todos.insert({
      id: Date.now().toString(),
      text: text,
      completed: false,
      createdAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Failed to add todo:', error);
  }
}

// Update todo
async function toggleTodo(id) {
  try {
    const query = cloudStore.query.where('id', 'EQUAL', id);
    await todos.update(query, { completed: true });
  } catch (error) {
    console.error('Failed to update todo:', error);
  }
}

// Delete todo
async function deleteTodo(id) {
  try {
    const query = cloudStore.query.where('id', 'EQUAL', id);
    await todos.remove(query);
  } catch (error) {
    console.error('Failed to delete todo:', error);
  }
}

// Watch for changes
todos.watch(
  cloudStore.query.orderBy('createdAt', 'DESCENDING'),
  (data) => {
    console.log('Todos updated:', data.collection);
    updateUI(data.collection);
  }
);

function updateUI(todos) {
  // Update your UI with the new todo list
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = todos.map(todo => `
    <li>
      <input type="checkbox" ${todo.completed ? 'checked' : ''}
             onchange="toggleTodo('${todo.id}')">
      ${todo.text}
      <button onclick="deleteTodo('${todo.id}')">Delete</button>
    </li>
  `).join('');
}
```

### React Hook Integration

```javascript
import { useEffect, useState } from 'react';

function useCollection(collection, query) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!collection || !query) return;

    setLoading(true);
    const subscription = collection.watch(query, (updateData) => {
      setData(updateData.collection);
      setLoading(false);
      setError(null);
    });

    return () => {
      // Cleanup subscription if needed
    };
  }, [collection, query]);

  const insert = async (document) => {
    try {
      await collection.insert(document);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const update = async (query, data) => {
    try {
      await collection.update(query, data);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const remove = async (query) => {
    try {
      await collection.remove(query);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  return { data, loading, error, insert, update, remove };
}
```

## Best Practices

### Performance
1. **Use specific queries** - Filter data at the database level
2. **Limit results** - Use `.limit()` for large collections
3. **Index fields** - Index frequently queried fields in MongoDB
4. **Cache strategies** - Leverage IndexedDB for offline capabilities

### Security
1. **Validate JWT tokens** - Always verify token signatures
2. **Tenant isolation** - Ensure data separation between tenants
3. **Input validation** - Sanitize all user inputs
4. **Rate limiting** - Implement request rate limits

### Error Handling
1. **Graceful degradation** - Handle network failures gracefully
2. **User feedback** - Provide clear error messages to users
3. **Retry logic** - Implement exponential backoff for retries
4. **Logging** - Log errors for debugging and monitoring

### Development
1. **TypeScript** - Use TypeScript for better development experience
2. **Testing** - Write unit and integration tests
3. **Monitoring** - Monitor performance and errors in production
4. **Documentation** - Keep API documentation up to date

---

This specification covers the complete CloudStore API as implemented and tested. The system provides a robust, real-time database solution suitable for modern web applications requiring Firebase Firestore-like functionality with self-hosting capabilities.