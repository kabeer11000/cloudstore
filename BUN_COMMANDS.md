# Bun Workspace Commands Quick Reference

## Installation & Setup

```bash
# Install all dependencies
bun install

# Install and save to specific workspace
bun add <package> --cwd source/client
bun add -D <dev-package> --cwd source/backends/default

# Remove package from workspace
bun remove <package> --cwd source/packages/csel
```

## Workspace Information

```bash
# List workspaces
bun pm ls

# Show all dependencies across workspaces
bun pm ls --all

# Show workspace info
bun pm ls --depth=0
```

## Building

```bash
# Build all workspaces
bun run build

# Build specific workspace by filter
bun run --filter "@kabeersnetwork/cloudstore" build
bun run --filter "@kabeersnetwork/cloudstore-backend" build
bun run --filter "@kabeersnetwork/csel" build

# Build workspace by path
bun --cwd source/client build
bun --cwd source/backends/default build
bun --cwd source/packages/csel build
```

## Development

```bash
# Start main development server (backend)
bun run dev

# Start backend specifically
bun run backend:start

# Start client in development mode  
bun --cwd source/client dev

# Start client build in watch mode
bun --cwd source/client run build:esm:watch
```

## Testing & Linting

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

## Running Scripts

```bash
# Run script across all workspaces that have it
bun run --filter '*' <script-name>

# Run script in specific workspace by name
bun run --filter "@kabeersnetwork/cloudstore" <script-name>

# Run script in workspace by path
bun --cwd source/client <script-name>

# Run script with workspace context
bun --cwd source/backends/default run dev
```

## Workspace Filters

```bash
# Filter by package name pattern
bun run --filter "@kabeersnetwork/*" build

# Filter by specific package
bun run --filter "@kabeersnetwork/cloudstore" build

# Filter by path pattern
bun run --filter "./source/client" build

# Multiple filters
bun run --filter "@kabeersnetwork/cloudstore" --filter "@kabeersnetwork/csel" build
```

## Dependency Management

```bash
# Add dependency to root workspace
bun add <package>

# Add dependency to specific workspace
bun add <package> --cwd source/client

# Add dev dependency
bun add -D <package> --cwd source/backends/default

# Add peer dependency
bun add -P <package> --cwd source/client

# Update dependencies
bun update

# Update specific package
bun update <package>
```

## Cache & Cleanup

```bash
# Clear Bun cache
bun pm cache rm

# Clean install (remove node_modules and reinstall)
rm -rf node_modules bun.lockb
bun install

# Clean workspace build outputs
rm -rf source/client/build
rm -rf source/backends/default/bundled
```

## Environment & Configuration

```bash
# Run with specific environment
NODE_ENV=production bun run build

# Run with workspace-specific env file
bun --cwd source/backends/default run dev

# Debug mode
DEBUG=* bun run dev
```

## Common Development Workflows

### Full Development Setup
```bash
# 1. Install dependencies
bun install

# 2. Build all packages
bun run build  

# 3. Start development server
bun run dev
```

### Client SDK Development
```bash
# 1. Navigate to client workspace
cd source/client

# 2. Build in watch mode  
bun run dev
# or
bun run build:esm:watch
```

### Backend Development
```bash
# 1. Start backend with hot reload
bun run dev

# 2. Server runs on configured port with auto-restart on changes
```

### CSEL Development
```bash
# 1. Build the package
bun --cwd source/packages/csel build

# 2. Run tests
bun --cwd source/packages/csel test

# 3. Run linting
bun --cwd source/packages/csel run lint
```

### Cross-workspace Development
```bash
# 1. Build dependency first (CSEL)
bun --cwd source/packages/csel build

# 2. Build dependent packages
bun --cwd source/backends/default build
bun --cwd source/client build

# 3. Start development
bun run dev
```

## Troubleshooting Commands

```bash
# Check Bun version
bun --version

# Verify workspace setup
bun pm ls

# Check for TypeScript issues
bun --cwd source/client tsc --noEmit
bun --cwd source/backends/default tsc --noEmit

# Force reinstall dependencies
rm -rf node_modules */node_modules bun.lockb
bun install

# Check for circular dependencies
bun pm ls --all | grep -E "└─|├─" 
```

## Package-specific Commands

### @kabeersnetwork/cloudstore (Client)
```bash
bun --cwd source/client build           # Build all formats
bun --cwd source/client run build:esm   # ESM only
bun --cwd source/client run build:cjs   # CommonJS only
bun --cwd source/client run build:mjs   # MJS only
bun --cwd source/client dev              # Watch mode
```

### @kabeersnetwork/cloudstore-backend (Server)
```bash
bun --cwd source/backends/default run dev              # Development mode
bun --cwd source/backends/default run run:node-start   # Start with nodemon
bun --cwd source/backends/default run run:ts-watch     # TypeScript watch
```

### @kabeersnetwork/csel (Expression Language)  
```bash
bun --cwd source/packages/csel build    # Webpack build
bun --cwd source/packages/csel test     # Mocha tests
bun --cwd source/packages/csel run lint # ESLint
```