# Bun Workspace Development Guide

This document provides detailed information about working with the CloudStore Bun workspace setup.

## Workspace Structure

```
cloudstore/
├── source/
│   ├── client/                    # @kabeersnetwork/cloudstore
│   ├── backends/default/          # @kabeersnetwork/cloudstore-backend
│   └── packages/csel/             # @kabeersnetwork/csel
├── package.json                   # Root workspace configuration
├── bun.lockb                      # Bun lock file
└── tsconfig.json                  # Root TypeScript config
```

## Package Details

### @kabeersnetwork/cloudstore (Client SDK)
**Location**: `source/client/`  
**Purpose**: Client-side JavaScript/TypeScript SDK for CloudStore

**Key Scripts**:
- `bun run build` - Builds CJS and MJS bundles
- `bun run build:esm` - Build ESM bundle only
- `bun run build:cjs` - Build CommonJS bundle only
- `bun run dev` - Development mode with watch

**Built Outputs**:
- `build/esm/` - ES Module format
- `build/cjs/` - CommonJS format
- `build/mjs/` - ES Module with .mjs extension

### @kabeersnetwork/cloudstore-backend (Server)
**Location**: `source/backends/default/`  
**Purpose**: Node.js server with MongoDB, Redis, WebSocket support

**Key Technologies**:
- MongoDB for data storage
- Redis for caching and sessions
- Socket.io for real-time communication
- JWT for authentication
- TypeScript for type safety

**Key Scripts**:
- `bun run dev` - Development mode with hot reload
- `bun run run:node-start` - Start with nodemon
- `bun run run:ts-watch` - TypeScript compilation in watch mode

**Key Features**:
- Authentication system (`src/auth/`)
- Database controllers (`src/controllers/`)
- Real-time events (`src/events.ts`)
- Rules engine integration (`src/rules/`)

### @kabeersnetwork/csel (Expression Language)
**Location**: `source/packages/csel/`  
**Purpose**: Cloud Store Expression Language parser and evaluator

**Key Scripts**:
- `bun run build` - Build using Webpack
- `bun run test` - Run Mocha tests
- `bun run lint` - ESLint code checking

## Development Commands

### Workspace Management

```bash
# Install dependencies for all workspaces
bun install

# Add dependency to specific workspace
bun add <package> --cwd source/client
bun add -D <package> --cwd source/backends/default

# Remove dependency from workspace
bun remove <package> --cwd source/packages/csel

# List all workspaces
bun pm ls

# Show workspace dependency tree
bun pm ls --all
```

### Building

```bash
# Build all workspaces
bun run build

# Build specific workspace by name
bun run --filter "@kabeersnetwork/cloudstore" build
bun run --filter "@kabeersnetwork/cloudstore-backend" build
bun run --filter "@kabeersnetwork/csel" build

# Build specific workspace by path
bun --cwd source/client build
bun --cwd source/backends/default build
```

### Development Servers

```bash
# Start backend server (main development command)
bun run dev

# Start backend server explicitly
bun run backend:start

# Start client in watch mode
bun --cwd source/client dev

# Start client build watch mode
bun --cwd source/client run build:esm:watch
```

### Testing and Linting

```bash
# Run tests across all workspaces
bun run test

# Run tests in specific workspace
bun --cwd source/packages/csel test

# Run linting across all workspaces
bun run lint

# Run lint in specific workspace
bun --cwd source/packages/csel run lint
```

## Common Development Workflows

### 1. Setting up for Backend Development

```bash
# Install dependencies
bun install

# Start development server with hot reload
bun run dev

# Server will be available at http://localhost:3000 (or configured port)
# Includes TypeScript compilation watch and nodemon restart
```

### 2. Client SDK Development

```bash
# Install dependencies
bun install

# Build client library
bun --cwd source/client build

# Watch mode for development
bun --cwd source/client dev
```

### 3. Working on Expression Language

```bash
# Install dependencies
bun install

# Build the CSEL package
bun --cwd source/packages/csel build

# Run tests
bun --cwd source/packages/csel test

# Run linting
bun --cwd source/packages/csel run lint
```

### 4. Cross-workspace Dependencies

The workspaces are set up to use each other as dependencies:

- Backend uses `@kabeersnetwork/csel` for rule evaluation
- Both backend and client are published packages that can be used independently

When you make changes to CSEL, you may need to rebuild it for the backend to pick up changes:

```bash
# Rebuild CSEL
bun --cwd source/packages/csel build

# Restart backend to pick up changes
bun run dev
```

## Troubleshooting

### TypeScript Issues

If you encounter TypeScript compilation errors:

```bash
# Clean build outputs
rm -rf source/client/build
rm -rf source/backends/default/bundled

# Reinstall dependencies
bun install

# Try building again
bun run build
```

### Dependency Issues

```bash
# Clear Bun cache
bun pm cache rm

# Reinstall everything
rm -rf node_modules
rm bun.lockb
bun install
```

### Watch Mode Issues

If hot reload isn't working properly:

```bash
# Restart the development server
# Kill the process and run again
bun run dev
```

## Adding New Workspaces

To add a new workspace to the project:

1. Create the new package directory under `source/`
2. Add a `package.json` with appropriate name and scripts
3. Update root `package.json` workspaces array if needed:

```json
{
  "workspaces": [
    "source/*",
    "source/backends/*", 
    "source/packages/*",
    "source/new-category/*"
  ]
}
```

4. Run `bun install` to register the new workspace

## Best Practices

1. **Use workspace-specific commands**: Always use `bun --cwd <workspace>` for workspace-specific operations
2. **Build dependencies first**: If workspaces depend on each other, build dependencies before dependents
3. **Use filters for parallel operations**: Use `--filter` for running commands across multiple workspaces
4. **Keep workspace names consistent**: Follow the `@kabeersnetwork/<name>` pattern
5. **Document workspace-specific scripts**: Each workspace should have clear documentation of its available scripts