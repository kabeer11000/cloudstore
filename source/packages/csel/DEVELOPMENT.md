# CSEL (Cloud Store Expression Language) Development

This package contains the expression language parser and evaluator for CloudStore's rules engine.

## Overview

CSEL (Cloud Store Expression Language) is a powerful, context-based expression parser and evaluator that provides:
- JSON-based expression evaluation
- Context-aware filtering and validation
- Secure server-side rule execution
- JavaScript-like syntax with safety constraints

## Development Setup

```bash
# From project root
bun install

# Build CSEL package
bun --cwd source/packages/csel build

# Run tests
bun --cwd source/packages/csel test

# Run linting
bun --cwd source/packages/csel run lint
```

## Package Structure

```
source/packages/csel/
├── lib/                    # Core library files
│   ├── Jexl.js            # Main CSEL engine
│   ├── Lexer.js           # Tokenization
│   ├── grammar.js         # Language grammar
│   ├── evaluator/         # Expression evaluation
│   └── parser/            # Expression parsing
├── test/                  # Mocha test files
├── webpack.config.js      # Build configuration
└── package.json          # Package configuration
```

## Available Scripts

```bash
# Build using Webpack
bun run build

# Run test suite with Mocha
bun run test  

# Lint code with ESLint
bun run lint

# Watch mode for development
bun run watch
```

## Build System

CSEL uses Webpack 3.1.0 to build a single bundle:

- **Input**: `lib/Jexl.js`
- **Output**: `mozjexl.jsm` (Mozilla JavaScript Module format)
- **Format**: UMD (Universal Module Definition)
- **License**: Automatic license inclusion via webpack plugin

## Language Features

### Basic Expressions

```javascript
// Arithmetic
2 + 3 * 4          // 14

// String operations  
"hello" + " world"  // "hello world"

// Comparisons
age >= 18          // true/false

// Logical operations
user.active && user.verified
```

### Context-based Evaluation

```javascript
// Context: { user: { name: "John", age: 30 }, items: [1,2,3] }

user.name          // "John"
user.age > 18      // true
items|length       // 3
items[0]           // 1
```

### Filters and Functions

```javascript
// Array filtering
items|filter(.price > 10)

// Transformations
users|map(.name)|join(", ")

// Conditionals
user.active ? "Active" : "Inactive"
```

### CloudStore Rules Context

```javascript
// Authentication context
auth.user.id       // Current user ID
auth.user.role     // User role

// Resource context  
resource.id        // Document ID
resource.data      // Document data

// Request context
request.method     // HTTP method
request.time       // Request timestamp

// Data context
data.email         // Incoming data field
data.createdAt     // Document creation time
```

## API Usage

### Basic Usage

```javascript
const Jexl = require('@kabeersnetwork/csel');

// Create evaluator
const jexl = new Jexl();

// Evaluate expression
const result = await jexl.eval('user.name + " is " + user.age', {
  user: { name: 'John', age: 30 }
});
// Result: "John is 30"
```

### CloudStore Integration

```javascript
// Database rule evaluation
const rule = 'auth.user.id == resource.owner_id || auth.user.role == "admin"';

const context = {
  auth: { user: { id: 'user123', role: 'user' } },
  resource: { owner_id: 'user123', data: {...} }
};

const allowed = await jexl.eval(rule, context);
// Result: true (user owns resource)
```

### Custom Functions

```javascript
// Add custom functions
jexl.addFunction('isValidEmail', (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
});

// Use in expressions
const valid = await jexl.eval('isValidEmail(user.email)', {
  user: { email: 'test@example.com' }
});
```

## Testing

The test suite uses Mocha and Chai:

```bash
# Run all tests
bun test

# Run specific test file
./node_modules/.bin/mocha test/specific-test.js

# Run with coverage
npm run test:coverage  # If configured
```

### Test Structure

```javascript
describe('CSEL Expression Language', () => {
  it('should evaluate basic arithmetic', async () => {
    const result = await jexl.eval('2 + 3');
    expect(result).to.equal(5);
  });

  it('should handle context variables', async () => {
    const result = await jexl.eval('user.name', { user: { name: 'John' } });
    expect(result).to.equal('John');
  });
});
```

## CloudStore Rules Examples

### Collection-level Rules

```javascript
{
  "users": {
    "create": "auth.user != null && data.email != null",
    "read": "auth.user.id == resource.id || auth.user.role == 'admin'",
    "update": "auth.user.id == resource.id && data.email == resource.email",
    "delete": "auth.user.role == 'admin'"
  }
}
```

### Field-level Validation

```javascript
{
  "posts": {
    "create": [
      "data.title|length > 5",
      "data.content|length > 10", 
      "auth.user.verified == true"
    ].join(" && ")
  }
}
```

### Time-based Rules

```javascript
{
  "events": {
    "update": "auth.user.id == resource.creator_id && request.time < resource.expires_at"
  }
}
```

## Development Workflow

### 1. Making Changes

```bash
# Make changes to lib/ files
# Build to test changes
bun run build

# Run tests to verify
bun run test
```

### 2. Adding Features

1. Modify grammar in `lib/grammar.js`
2. Update parser in `lib/parser/`
3. Add evaluator logic in `lib/evaluator/`
4. Write tests in `test/`
5. Build and test

### 3. Integration Testing

```bash
# Test with CloudStore backend
cd source/backends/default
bun run dev

# CSEL changes will be picked up automatically
```

## Performance Considerations

- CSEL expressions are compiled once and cached
- Avoid deeply nested object traversal
- Use filters efficiently for large arrays
- Context objects should be reasonably sized

## Security

CSEL is designed for safe server-side execution:
- No access to global objects or file system
- No eval() or Function() constructor access
- Limited to provided context data
- All operations are deterministic

## Contributing

1. Follow existing code style
2. Add comprehensive tests for new features
3. Update documentation for API changes
4. Ensure backward compatibility
5. Performance test complex expressions
6. Validate security implications

## Debugging

### Enable Debug Mode

```javascript
const jexl = new Jexl();
jexl.addFunction('debug', (value) => {
  console.log('Debug:', value);
  return value;
});

// Use in expressions
await jexl.eval('user.name|debug', context);
```

### Common Issues

1. **Syntax Errors**: Check expression grammar
2. **Context Missing**: Ensure required context is provided
3. **Type Errors**: Validate data types in expressions
4. **Performance**: Profile complex expressions with large datasets