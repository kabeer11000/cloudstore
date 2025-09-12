# CloudStore Client SDK Development

This package contains the client-side JavaScript/TypeScript SDK for CloudStore.

## Overview

The CloudStore client SDK provides:
- Real-time database connections via Socket.io
- Authentication helpers with JWT support
- Type-safe APIs for data operations
- Support for both browser and Node.js environments

## Development Setup

```bash
# From project root
bun install

# Build the client library
bun --cwd source/client build

# Development with watch mode
bun --cwd source/client dev
```

## Available Scripts

```bash
# Build all formats (CJS + MJS)
bun run build

# Build specific formats
bun run build:esm      # ES Modules
bun run build:cjs      # CommonJS  
bun run build:mjs      # ES Modules with .mjs extension

# Development mode with watch
bun run dev
bun run build:esm:watch

# Documentation generation
bun run create:docs
bun run documentation:workflow
```

## Build Outputs

The build process generates multiple formats:

- `build/esm/` - ES Module format for modern bundlers
- `build/cjs/` - CommonJS format for Node.js
- `build/mjs/` - ES Module with `.mjs` extension for Node.js

## Dependencies

### Runtime Dependencies
- `@kabeersnetwork/csel` - Expression language support
- `bson` - BSON serialization
- `idb-keyval` - Browser storage utilities
- `jsonwebtoken` - JWT handling
- `socket.io-client` - Real-time communication
- `uuid` - UUID generation

### Development Dependencies
- `@types/*` - TypeScript definitions
- `archiver` - Build tooling
- `form-data` - HTTP utilities
- `node-fetch` - HTTP client
- `ttypescript` - TypeScript transforms
- `typedoc` - Documentation generation

## Usage Examples

```typescript
import CloudStore from '@kabeersnetwork/cloudstore';

// Initialize client
const client = new CloudStore({
  url: 'ws://localhost:3000',
  token: 'your-jwt-token'
});

// Real-time data operations
const doc = client.collection('users').doc('user123');
doc.on('update', (data) => {
  console.log('Document updated:', data);
});
```

## TypeScript Support

The package is built with full TypeScript support:

```typescript
import { CloudStore, DocumentReference } from '@kabeersnetwork/cloudstore';

interface User {
  id: string;
  name: string;
  email: string;
}

const userRef: DocumentReference<User> = client.collection('users').doc('123');
```

## Testing

```bash
# Run tests (if configured)
bun test

# Type checking
bun tsc --noEmit
```

## Publishing

The package is configured for npm publishing:

```bash
# Build before publishing
bun run build

# Publish (requires appropriate permissions)
npm publish
```

## Browser Compatibility

The client SDK supports:
- Modern browsers (ES2015+)
- Node.js 14+
- React Native
- Electron

## Contributing

1. Make changes to source files in `src/`
2. Test changes with `bun run dev`
3. Build with `bun run build`
4. Ensure TypeScript types are correct
5. Update documentation if needed