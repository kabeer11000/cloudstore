# CloudStore Setup and Testing Guide

This guide will help you set up and test the CloudStore system after all the bug fixes and improvements.

## Prerequisites

- **Node.js 18+** or **Bun** runtime
- **MongoDB** instance (local or cloud)
- **Redis** instance (local or cloud)

## Initial Setup

### 1. Install Dependencies

```bash
# Install all workspace dependencies
bun install

# Or if using npm
npm install
```

### 2. Environment Configuration

Create a `.env` file in `source/backends/default/`:

```bash
# Database Configuration
MONGODB_URI=mongodb://localhost:27017/cloudstore-demo
# Or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/cloudstore-demo?retryWrites=true&w=majority

REDIS_URI=redis://localhost:6379

# Server Configuration
PORT=8080
NODE_ENV=development
ENV=development

# CORS Configuration
CORS_ALLOWED_ORIGINS=http://localhost:4321,http://localhost:5173

# JWT Configuration (optional, for advanced auth)
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=7d
```

### 3. Setup Test Tenant in Redis

Before running the backend, you need to add a test tenant to Redis:

```bash
# Connect to Redis CLI
redis-cli

# Add a test tenant with public key
SET "test-tenant-123" "-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE7S9jNNFeKXJaYcUh8FW6/FtOPsGqZNKaP8QANhOZwJYOGYEByAfGKzKhUAGVATVB/rE1bYXEQMD/DGOfPRdcMQ==\n-----END PUBLIC KEY-----"

# Or add the simplified key for testing
SET "12" "-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE7S9jNNFeKXJaYcUh8FW6/FtOPsGqZNKaP8QANhOZwJYOGYEByAfGKzKhUAGVATVB/rE1bYXEQMD/DGOfPRdcMQ==\n-----END PUBLIC KEY-----"

# Exit Redis CLI
EXIT
```

## Running the System

### 1. Start the Backend Server

```bash
# From project root
bun run dev

# Or specifically for backend
bun --cwd source/backends/default dev
```

The server will start on `http://localhost:8080` with:
- ✅ MongoDB connection
- ✅ Redis connection
- ✅ Socket.io server
- ✅ CORS enabled for frontend

### 2. Start the Example App

```bash
# From project root
cd example
bun dev

# Or using npm
npm run dev
```

The frontend will start on `http://localhost:5173`

## Testing the CRUD+Watch System

### 1. Basic Connection Test

1. Open the example app in your browser
2. Check the connection status indicator:
   - ✅ Green: "Connected to CloudStore"
   - ❌ Red: "Disconnected" with error details

### 2. CRUD Operations Testing

#### Create (Insert)
1. Type a todo item in the input field
2. Click "Add" or press Enter
3. ✅ Item should appear in the list immediately

#### Read (Get)
1. The todo list automatically displays all items
2. ✅ Items load when the app starts
3. ✅ Filter buttons work (All/Active/Completed)

#### Update
1. Click "Edit" on any todo item
2. Modify the text and click "Save"
3. ✅ Changes appear immediately
4. Click the checkbox to toggle completion
5. ✅ Status updates in real-time

#### Delete
1. Click "Delete" on any todo item
2. ✅ Item disappears immediately
3. Use "Clear Completed" to bulk delete
4. ✅ All completed items removed

### 3. Real-time Watch Testing

#### Single Browser Test
1. Add a new todo item
2. ✅ It appears immediately in the list
3. Update an existing item
4. ✅ Changes reflect instantly

#### Multi-Browser Test
1. Open the app in two browser windows/tabs
2. Add a todo in window 1
3. ✅ It appears in window 2 automatically
4. Update a todo in window 2
5. ✅ Changes appear in window 1 instantly

### 4. Error Handling Testing

#### Network Errors
1. Stop the backend server
2. ✅ Connection status shows "Disconnected"
3. Try adding a todo
4. ✅ Error message displays
5. Restart the server
6. ✅ Connection automatically restores

#### Invalid Operations
1. Try operations with malformed data
2. ✅ Proper error messages display
3. ✅ App remains stable and functional

## API Testing with Postman/Curl

### Authentication Headers
All requests need these headers:
```
Authorization: Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.tyh-VfuzIxCyGYDlkBA7DfyjrqmSHu6pQ2hoZuFqUSLPNY2N0mpHb3nk5K17HWP_3cYHBw7AhHale5wky6-sVA
```

### Socket.io Events Testing

Connect to `ws://localhost:8080?tenant_id=12` and test:

#### 1. Config Event
```javascript
socket.emit('config', { database: 'cloudstore-demo' });
// Expect: config-cb event with server version
```

#### 2. Collection Check
```javascript
socket.emit('collection', {
  name: 'todos',
  ref: { id: 'test-ref-123' }
});
// Expect: collection-cb-test-ref-123 event
```

#### 3. Insert Document
```javascript
socket.emit('insert', {
  type: 'kn.cloudstore.document:array',
  ref: { id: 'insert-ref-123' },
  database: { name: 'cloudstore-demo' },
  collection: { name: 'todos' },
  insertions: [{
    data: {
      id: 'todo-1',
      text: 'Test todo',
      completed: false
    }
  }]
});
// Expect: insert-cb-insert-ref-123 event with success
```

#### 4. Watch Collection
```javascript
socket.emit('watch', {
  stream: { id: 'watch-123' },
  watchable: {
    type: 'kn.cloudstore.collection',
    database: { name: 'cloudstore-demo' },
    collection: { name: 'todos' },
    query: {
      structured: {
        from: { collection: 'todos' },
        where: [],
        orderBy: { field: '_id', direction: 'ASCENDING' },
        limit: null
      }
    }
  }
});
// Expect: watchable-change-watch-123 events on data changes
```

## Performance Testing

### Load Testing
1. Use multiple browser tabs (10+)
2. Perform concurrent CRUD operations
3. ✅ All operations should complete successfully
4. ✅ Real-time updates work across all tabs

### Memory Testing
1. Leave the app running for extended periods
2. Perform many CRUD operations
3. ✅ No memory leaks in browser dev tools
4. ✅ Backend memory usage remains stable

## Troubleshooting

### Common Issues

#### "Connection Failed"
- Check MongoDB is running and accessible
- Check Redis is running and accessible
- Verify `.env` configuration
- Check network connectivity

#### "Tenant Not Registered"
- Ensure tenant key is added to Redis
- Verify tenant_id matches in Redis and client
- Check Redis connection

#### "Database Errors"
- Verify MongoDB URI in `.env`
- Check database permissions
- Ensure database name matches

#### "@ts-ignore Errors"
- All TypeScript issues have been fixed
- Run `bun run build` to verify
- Check for any remaining type errors

### Debug Mode

Enable debug logging:
```bash
# Backend debug logs
NODE_ENV=development bun run dev

# Frontend debug logs
Open browser dev console for detailed logs
```

## Success Criteria Checklist

- ✅ Backend starts without errors
- ✅ Frontend connects successfully
- ✅ All CRUD operations work
- ✅ Real-time updates function properly
- ✅ Error handling works correctly
- ✅ Multi-browser sync works
- ✅ No TypeScript errors
- ✅ No console errors in production
- ✅ Performance is responsive
- ✅ Memory usage is stable

## Next Steps

Once basic testing is complete:

1. **Production Deployment**: Configure for production environment
2. **Security Hardening**: Implement proper JWT key management
3. **Monitoring**: Add logging and metrics
4. **Scale Testing**: Test with larger datasets and user loads
5. **Feature Enhancement**: Add advanced query features and rules

The CloudStore system is now fully functional with comprehensive CRUD+Watch capabilities, proper error handling, and modern development patterns!