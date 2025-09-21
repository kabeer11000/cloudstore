import { useState } from 'preact/hooks';
import { useCollection, useCloudStore } from '../hooks/useCloudStore.jsx';
import { v4 } from 'uuid';

const StatusBadge = ({ status }) => {
    const colors = {
        active: '#4CAF50',
        inactive: '#f44336',
        pending: '#FF9800'
    };

    return (
        <span style={{
            padding: '0.25rem 0.5rem',
            borderRadius: '12px',
            backgroundColor: colors[status] || '#666',
            color: 'white',
            fontSize: '12px',
            fontWeight: 'bold'
        }}>
            {status.toUpperCase()}
        </span>
    );
};

const UserCard = ({ user, onUpdate, onDelete }) => (
    <div style={{
        padding: '1rem',
        backgroundColor: '#2a2a2a',
        borderRadius: '8px',
        border: '1px solid #444',
        marginBottom: '1rem'
    }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: 'white' }}>{user.name}</h4>
                <p style={{ margin: '0 0 0.5rem 0', color: '#ccc', fontSize: '14px' }}>{user.email}</p>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <StatusBadge status={user.status} />
                    <span style={{ color: '#888', fontSize: '12px' }}>
                        Age: {user.age} | Role: {user.role}
                    </span>
                </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                    onClick={() => onUpdate(user.id, {
                        status: user.status === 'active' ? 'inactive' : 'active'
                    })}
                    style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: user.status === 'active' ? '#f44336' : '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    {user.status === 'active' ? 'Deactivate' : 'Activate'}
                </button>
                <button
                    onClick={() => onDelete(user.id)}
                    style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: '#f44336',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    </div>
);

const QueryBuilder = ({ onQueryChange }) => {
    const [filters, setFilters] = useState([]);
    const [newFilter, setNewFilter] = useState({ field: '', operation: 'EQUAL', value: '' });

    const operations = [
        'EQUAL', 'GREATER', 'LESSER', 'GREATER_EQUAL',
        'LESSER_EQUAL', 'ARRAY.IN', 'ARRAY.NOT_IN'
    ];

    const addFilter = () => {
        if (newFilter.field && newFilter.value) {
            const updatedFilters = [...filters, { ...newFilter, id: v4() }];
            setFilters(updatedFilters);
            onQueryChange(updatedFilters);
            setNewFilter({ field: '', operation: 'EQUAL', value: '' });
        }
    };

    const removeFilter = (filterId) => {
        const updatedFilters = filters.filter(f => f.id !== filterId);
        setFilters(updatedFilters);
        onQueryChange(updatedFilters);
    };

    return (
        <div style={{
            padding: '1rem',
            backgroundColor: '#2a2a2a',
            borderRadius: '8px',
            border: '1px solid #444',
            marginBottom: '1rem'
        }}>
            <h3 style={{ color: 'white', marginBottom: '1rem' }}>Query Builder</h3>

            {/* Add new filter */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr auto',
                gap: '0.5rem',
                marginBottom: '1rem'
            }}>
                <input
                    type="text"
                    placeholder="Field name"
                    value={newFilter.field}
                    onChange={(e) => setNewFilter({ ...newFilter, field: e.target.value })}
                    style={{
                        padding: '0.5rem',
                        backgroundColor: '#1a1a1a',
                        border: '1px solid #555',
                        borderRadius: '4px',
                        color: 'white'
                    }}
                />
                <select
                    value={newFilter.operation}
                    onChange={(e) => setNewFilter({ ...newFilter, operation: e.target.value })}
                    style={{
                        padding: '0.5rem',
                        backgroundColor: '#1a1a1a',
                        border: '1px solid #555',
                        borderRadius: '4px',
                        color: 'white'
                    }}
                >
                    {operations.map(op => (
                        <option key={op} value={op}>{op}</option>
                    ))}
                </select>
                <input
                    type="text"
                    placeholder="Value"
                    value={newFilter.value}
                    onChange={(e) => setNewFilter({ ...newFilter, value: e.target.value })}
                    style={{
                        padding: '0.5rem',
                        backgroundColor: '#1a1a1a',
                        border: '1px solid #555',
                        borderRadius: '4px',
                        color: 'white'
                    }}
                />
                <button
                    onClick={addFilter}
                    style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: '#2196F3',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Add
                </button>
            </div>

            {/* Current filters */}
            {filters.length > 0 && (
                <div>
                    <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Active Filters:</h4>
                    {filters.map(filter => (
                        <div key={filter.id} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginBottom: '0.5rem',
                            padding: '0.5rem',
                            backgroundColor: '#1a1a1a',
                            borderRadius: '4px'
                        }}>
                            <span style={{ color: 'white' }}>
                                {filter.field} {filter.operation} "{filter.value}"
                            </span>
                            <button
                                onClick={() => removeFilter(filter.id)}
                                style={{
                                    padding: '0.25rem 0.5rem',
                                    backgroundColor: '#f44336',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontSize: '12px'
                                }}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export const CloudStoreDemo = () => {
    const { cloudStore, isConnected, connectionError } = useCloudStore();
    const [activeFilters, setActiveFilters] = useState([]);
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        age: '',
        role: 'user',
        status: 'active'
    });

    // Build query from active filters
    let query = cloudStore?.query.orderBy('createdAt', 'DESCENDING');
    activeFilters.forEach(filter => {
        let value = filter.value;

        // Convert numeric values
        if (filter.field === 'age') {
            value = parseInt(value);
        }

        // Handle array operations
        if (filter.operation.includes('ARRAY.')) {
            value = value.split(',').map(v => v.trim());
        }

        query = query?.where(filter.field, filter.operation, value);
    });

    const { data: users, loading, error, operations } = useCollection('users', query);

    const handleAddUser = async () => {
        if (!newUser.name || !newUser.email) return;

        try {
            await operations.insert({
                id: v4(),
                ...newUser,
                age: parseInt(newUser.age) || 18,
                createdAt: new Date().toISOString(),
                lastUpdated: new Date().toISOString()
            });

            setNewUser({ name: '', email: '', age: '', role: 'user', status: 'active' });
        } catch (err) {
            console.error('Failed to add user:', err);
        }
    };

    const handleUpdateUser = async (userId, updates) => {
        try {
            const updateQuery = cloudStore.query.where('id', 'EQUAL', userId);
            await operations.update(updateQuery, {
                ...updates,
                lastUpdated: new Date().toISOString()
            });
        } catch (err) {
            console.error('Failed to update user:', err);
        }
    };

    const handleDeleteUser = async (userId) => {
        try {
            const deleteQuery = cloudStore.query.where('id', 'EQUAL', userId);
            await operations.remove(deleteQuery);
        } catch (err) {
            console.error('Failed to delete user:', err);
        }
    };

    const handleBulkStatusUpdate = async (status) => {
        try {
            const updateQuery = cloudStore.query.where('status', 'EQUAL', status === 'active' ? 'inactive' : 'active');
            await operations.update(updateQuery, { status });
        } catch (err) {
            console.error('Failed to bulk update:', err);
        }
    };

    const stats = {
        total: users.length,
        active: users.filter(user => user.status === 'active').length,
        inactive: users.filter(user => user.status === 'inactive').length,
        pending: users.filter(user => user.status === 'pending').length
    };

    return (
        <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '2rem',
            backgroundColor: '#1a1a1a',
            minHeight: '100vh',
            color: 'white'
        }}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
                CloudStore Full Demo
            </h1>

            {/* Connection Status */}
            <div style={{
                padding: '1rem',
                marginBottom: '2rem',
                borderRadius: '8px',
                backgroundColor: isConnected ? '#1b5e20' : '#b71c1c',
                color: 'white',
                textAlign: 'center'
            }}>
                {isConnected ? (
                    <span>✅ Connected to CloudStore</span>
                ) : (
                    <span>❌ Disconnected{connectionError && `: ${connectionError}`}</span>
                )}
            </div>

            {/* Stats Dashboard */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1rem',
                marginBottom: '2rem'
            }}>
                <div style={{
                    padding: '1rem',
                    backgroundColor: '#2a2a2a',
                    borderRadius: '8px',
                    textAlign: 'center'
                }}>
                    <h3 style={{ margin: '0 0 0.5rem 0', color: '#2196F3' }}>{stats.total}</h3>
                    <p style={{ margin: 0, color: '#ccc' }}>Total Users</p>
                </div>
                <div style={{
                    padding: '1rem',
                    backgroundColor: '#2a2a2a',
                    borderRadius: '8px',
                    textAlign: 'center'
                }}>
                    <h3 style={{ margin: '0 0 0.5rem 0', color: '#4CAF50' }}>{stats.active}</h3>
                    <p style={{ margin: 0, color: '#ccc' }}>Active</p>
                </div>
                <div style={{
                    padding: '1rem',
                    backgroundColor: '#2a2a2a',
                    borderRadius: '8px',
                    textAlign: 'center'
                }}>
                    <h3 style={{ margin: '0 0 0.5rem 0', color: '#f44336' }}>{stats.inactive}</h3>
                    <p style={{ margin: 0, color: '#ccc' }}>Inactive</p>
                </div>
                <div style={{
                    padding: '1rem',
                    backgroundColor: '#2a2a2a',
                    borderRadius: '8px',
                    textAlign: 'center'
                }}>
                    <h3 style={{ margin: '0 0 0.5rem 0', color: '#FF9800' }}>{stats.pending}</h3>
                    <p style={{ margin: 0, color: '#ccc' }}>Pending</p>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                {/* Left Column: Add User Form */}
                <div>
                    <div style={{
                        padding: '1rem',
                        backgroundColor: '#2a2a2a',
                        borderRadius: '8px',
                        border: '1px solid #444',
                        marginBottom: '1rem'
                    }}>
                        <h3 style={{ color: 'white', marginBottom: '1rem' }}>Add New User</h3>

                        <div style={{ display: 'grid', gap: '1rem' }}>
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={newUser.name}
                                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                                style={{
                                    padding: '0.75rem',
                                    backgroundColor: '#1a1a1a',
                                    border: '1px solid #555',
                                    borderRadius: '4px',
                                    color: 'white'
                                }}
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                value={newUser.email}
                                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                                style={{
                                    padding: '0.75rem',
                                    backgroundColor: '#1a1a1a',
                                    border: '1px solid #555',
                                    borderRadius: '4px',
                                    color: 'white'
                                }}
                            />

                            <input
                                type="number"
                                placeholder="Age"
                                value={newUser.age}
                                onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
                                style={{
                                    padding: '0.75rem',
                                    backgroundColor: '#1a1a1a',
                                    border: '1px solid #555',
                                    borderRadius: '4px',
                                    color: 'white'
                                }}
                            />

                            <select
                                value={newUser.role}
                                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                                style={{
                                    padding: '0.75rem',
                                    backgroundColor: '#1a1a1a',
                                    border: '1px solid #555',
                                    borderRadius: '4px',
                                    color: 'white'
                                }}
                            >
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                                <option value="moderator">Moderator</option>
                            </select>

                            <select
                                value={newUser.status}
                                onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
                                style={{
                                    padding: '0.75rem',
                                    backgroundColor: '#1a1a1a',
                                    border: '1px solid #555',
                                    borderRadius: '4px',
                                    color: 'white'
                                }}
                            >
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                                <option value="pending">Pending</option>
                            </select>

                            <button
                                onClick={handleAddUser}
                                disabled={!newUser.name || !newUser.email || !isConnected}
                                style={{
                                    padding: '0.75rem',
                                    backgroundColor: isConnected ? '#4CAF50' : '#666',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: isConnected ? 'pointer' : 'not-allowed',
                                    fontSize: '16px'
                                }}
                            >
                                Add User
                            </button>
                        </div>
                    </div>

                    {/* Bulk Actions */}
                    <div style={{
                        padding: '1rem',
                        backgroundColor: '#2a2a2a',
                        borderRadius: '8px',
                        border: '1px solid #444'
                    }}>
                        <h3 style={{ color: 'white', marginBottom: '1rem' }}>Bulk Actions</h3>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button
                                onClick={() => handleBulkStatusUpdate('active')}
                                style={{
                                    padding: '0.5rem 1rem',
                                    backgroundColor: '#4CAF50',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}
                            >
                                Activate All
                            </button>
                            <button
                                onClick={() => handleBulkStatusUpdate('inactive')}
                                style={{
                                    padding: '0.5rem 1rem',
                                    backgroundColor: '#f44336',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}
                            >
                                Deactivate All
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Column: Query Builder */}
                <div>
                    <QueryBuilder onQueryChange={setActiveFilters} />
                </div>
            </div>

            {/* Error Display */}
            {error && (
                <div style={{
                    padding: '1rem',
                    backgroundColor: '#d32f2f',
                    color: 'white',
                    borderRadius: '8px',
                    marginBottom: '1rem'
                }}>
                    Error: {error}
                </div>
            )}

            {/* Loading Indicator */}
            {loading && (
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                    Loading users...
                </div>
            )}

            {/* Users List */}
            <div style={{ marginTop: '2rem' }}>
                <h2 style={{ color: 'white', marginBottom: '1rem' }}>
                    Users ({users.length})
                    {activeFilters.length > 0 && (
                        <span style={{ fontSize: '14px', color: '#888' }}>
                            {' '}• {activeFilters.length} filter(s) applied
                        </span>
                    )}
                </h2>

                {!loading && users.length === 0 ? (
                    <div style={{
                        textAlign: 'center',
                        padding: '3rem',
                        color: '#888',
                        backgroundColor: '#2a2a2a',
                        borderRadius: '8px'
                    }}>
                        No users found. Add some users or adjust your filters.
                    </div>
                ) : (
                    <div>
                        {users.map(user => (
                            <UserCard
                                key={user.id}
                                user={user}
                                onUpdate={handleUpdateUser}
                                onDelete={handleDeleteUser}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};