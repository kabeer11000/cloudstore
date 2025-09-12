<b>Note:</b>
Parts of this documentation was generated using AI LLM, If there's an error feel free to open a pull request,

---

# Kabeer Cloudstore

Kabeer Cloudstore, also known as Cloudstore, is a powerful real-time database engine that can be used in web applications, mobile applications, and self-hosted environments. It provides similar functionality to Firebase Firestore, with real-time updates, scalability, and a flexible API for accessing data. However, Cloudstore includes additional features that make it stand out, such as a powerful database rules engine based on CSEL (Cloud Store Expression Language).

## Features

- **Real-time communication:** Cloudstore uses websockets to provide real-time updates to your application. This eliminates the need for additional API calls or page refreshes, making it ideal for building real-time applications such as chat applications and collaborative editing tools.
- **Database rules engine:** The CSEL-based database rules engine allows you to define custom validation and logic rules that are executed on the server-side. This ensures data consistency and business rule enforcement without relying on client-side application code. Compared to Firestore's security rules, Cloudstore's database rules engine provides more fine-grained control over data validation and business rules enforcement.
- **Scalability:** Cloudstore is highly scalable and can handle millions of concurrent connections. It supports automatic scaling, so you can easily scale your database as your application grows.
- **Flexibility:** Cloudstore can be self-hosted, providing flexibility in deployment options. It provides a RESTful API that can be accessed using standard HTTP methods and supports JSON data format.

## Development Setup

This project uses [Bun](https://bun.sh/) workspaces for managing multiple packages. Make sure you have Bun installed before proceeding.

### Installation

```bash
# Install all dependencies across workspaces
bun install
```

### Available Workspaces

- **`@kabeersnetwork/cloudstore`** (`source/client`) - Client SDK and libraries
- **`@kabeersnetwork/cloudstore-backend`** (`source/backends/default`) - Server backend with MongoDB, Redis, and Socket.io
- **`@kabeersnetwork/csel`** (`source/packages/csel`) - Cloud Store Expression Language parser

### Common Commands

```bash
# Start the backend server in development mode
bun run dev

# Build all workspaces
bun run build

# Build specific workspace
bun run --filter "@kabeersnetwork/cloudstore" build

# Run tests across all workspaces
bun run test

# Run linting across all workspaces
bun run lint
```

### Development Workflow

1. **Backend Development**: 
   ```bash
   bun run backend:start
   # or
   bun run dev
   ```
   This starts the server with hot-reload enabled via nodemon and TypeScript watch mode.

2. **Client Development**:
   ```bash
   bun --cwd source/client dev
   ```
   Builds the client library with watch mode enabled.

3. **Expression Language Development**:
   ```bash
   bun --cwd source/packages/csel build
   ```

### Getting Started with CloudStore

Once you have the development environment set up, you can start the backend server and begin storing and retrieving data in real-time. You can also define custom validation and logic rules using the CSEL-based database rules engine to ensure data consistency and enforce business rules.

## Documentation

### Development Guides
- **[Workspace Guide](./WORKSPACE_GUIDE.md)** - Comprehensive guide to working with Bun workspaces
- **[Bun Commands Reference](./BUN_COMMANDS.md)** - Quick reference for all Bun workspace commands
- **[Client SDK Development](./source/client/DEVELOPMENT.md)** - Client library development guide
- **[Backend Development](./source/backends/default/DEVELOPMENT.md)** - Server development and API guide
- **[CSEL Development](./source/packages/csel/DEVELOPMENT.md)** - Expression language development guide

### Architecture
- **Client SDK** (`@kabeersnetwork/cloudstore`) - TypeScript/JavaScript client library
- **Backend Server** (`@kabeersnetwork/cloudstore-backend`) - Node.js server with MongoDB/Redis
- **Expression Language** (`@kabeersnetwork/csel`) - Rules engine and expression evaluator

## Contributing

Please check out the <a href="./CONTRIBUTING.md">CONTRIBUTING.md</a> file, code architecture, and source is documented.

## Conclusion

Kabeer Cloudstore is a powerful and flexible real-time database engine that can be used as an alternative to Firebase Firestore. Its real-time communication capabilities and CSEL-based database rules engine make it an ideal choice for building real-time applications that require data consistency and business rule enforcement. Whether you choose the self-hosted version, Cloudstore provides an easy-to-use and scalable solution for your real-time database needs.
