#!/bin/bash

# CloudStore Test Environment Setup Script
# This script sets up a complete testing environment for CloudStore

set -e

echo "🚀 Setting up CloudStore test environment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if required tools are installed
check_dependencies() {
    print_status "Checking dependencies..."

    if ! command -v bun &> /dev/null; then
        print_error "Bun is not installed. Please install from https://bun.sh/"
        exit 1
    fi

    if ! command -v mongod &> /dev/null; then
        print_warning "MongoDB not found. Please install MongoDB or ensure it's running remotely"
    fi

    if ! command -v redis-server &> /dev/null; then
        print_warning "Redis not found. Please install Redis or ensure it's running remotely"
    fi

    print_success "Dependencies check completed"
}

# Install project dependencies
install_dependencies() {
    print_status "Installing project dependencies..."

    # Install root dependencies
    bun install

    # Install example app dependencies
    cd example
    bun install
    cd ..

    print_success "Dependencies installed"
}

# Setup test databases
setup_databases() {
    print_status "Setting up test databases..."

    # Check if Redis is accessible
    if command -v redis-cli &> /dev/null; then
        print_status "Setting up Redis test tenant..."

        # Add test tenant with public key
        redis-cli SET "12" "-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE7S9jNNFeKXJaYcUh8FW6/FtOPsGqZNKaP8QANhOZwJYOGYEByAfGKzKhUAGVATVB/rE1bYXEQMD/DGOfPRdcMQ==
-----END PUBLIC KEY-----" > /dev/null 2>&1

        if [ $? -eq 0 ]; then
            print_success "Redis test tenant configured"
        else
            print_warning "Could not configure Redis tenant. Please ensure Redis is running"
        fi
    else
        print_warning "Redis CLI not available. Please manually add tenant key to Redis"
    fi
}

# Create environment file
create_env_file() {
    print_status "Creating environment configuration..."

    ENV_FILE="source/backends/default/.env"

    if [ ! -f "$ENV_FILE" ]; then
        cat > "$ENV_FILE" << EOF
# Database Configuration
MONGODB_URI=mongodb://localhost:27017/cloudstore-demo
REDIS_URI=redis://localhost:6379

# Server Configuration
PORT=8080
NODE_ENV=development
ENV=development

# CORS Configuration
CORS_ALLOWED_ORIGINS=http://localhost:4321,http://localhost:5173

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-for-testing
JWT_EXPIRES_IN=7d
EOF
        print_success "Environment file created at $ENV_FILE"
    else
        print_warning "Environment file already exists at $ENV_FILE"
    fi
}

# Build the project
build_project() {
    print_status "Building CloudStore client..."

    cd source/client
    bun run build:esm
    cd ../..

    print_success "Client built successfully"
}

# Start services
start_services() {
    print_status "Starting services..."

    # Check if ports are available
    if lsof -i :8080 &> /dev/null; then
        print_warning "Port 8080 is already in use. Please stop the service or change the port"
    fi

    if lsof -i :5173 &> /dev/null; then
        print_warning "Port 5173 is already in use. Please stop the service or change the port"
    fi

    print_status "To start CloudStore backend: cd source/backends/default && bun dev"
    print_status "To start example app: cd example && bun dev"
}

# Run basic tests
run_tests() {
    print_status "Running basic tests..."

    # Test TypeScript compilation
    cd source/client
    if command -v tsc &> /dev/null; then
        tsc --noEmit
        if [ $? -eq 0 ]; then
            print_success "TypeScript compilation passed"
        else
            print_error "TypeScript compilation failed"
        fi
    fi
    cd ../..

    # Test backend TypeScript
    cd source/backends/default
    if command -v tsc &> /dev/null; then
        tsc --noEmit
        if [ $? -eq 0 ]; then
            print_success "Backend TypeScript compilation passed"
        else
            print_error "Backend TypeScript compilation failed"
        fi
    fi
    cd ../../..
}

# Display final instructions
show_instructions() {
    echo ""
    print_success "CloudStore test environment setup complete!"
    echo ""
    echo -e "${BLUE}Next steps:${NC}"
    echo "1. Start your databases (MongoDB and Redis)"
    echo "2. Start the backend server:"
    echo -e "   ${YELLOW}cd source/backends/default && bun dev${NC}"
    echo "3. In a new terminal, start the example app:"
    echo -e "   ${YELLOW}cd example && bun dev${NC}"
    echo "4. Open your browser to:"
    echo -e "   ${YELLOW}http://localhost:5173${NC}"
    echo ""
    echo -e "${BLUE}Testing URLs:${NC}"
    echo "- Todo App Demo: http://localhost:5173 (Todo App tab)"
    echo "- Full Demo: http://localhost:5173 (Full Demo tab)"
    echo "- Backend API: http://localhost:8080"
    echo ""
    echo -e "${BLUE}Documentation:${NC}"
    echo "- Setup Guide: SETUP_AND_TESTING_GUIDE.md"
    echo "- API Specification: CLOUDSTORE_SPECIFICATION.md"
    echo "- Testing Checklist: FINAL_TESTING_CHECKLIST.md"
    echo ""
    print_success "Happy testing! 🎉"
}

# Main execution
main() {
    echo -e "${GREEN}"
    echo "╔════════════════════════════════════════╗"
    echo "║        CloudStore Setup Script        ║"
    echo "║     Real-time Database System          ║"
    echo "╚════════════════════════════════════════╝"
    echo -e "${NC}"

    check_dependencies
    install_dependencies
    create_env_file
    setup_databases
    build_project
    run_tests
    start_services
    show_instructions
}

# Handle script interruption
trap 'print_error "Setup interrupted"; exit 1' INT

# Run main function
main