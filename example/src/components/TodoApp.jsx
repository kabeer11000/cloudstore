import { useState } from 'preact/hooks';
import { useCollection, useCloudStore } from '../hooks/useCloudStore.jsx';
import { v4 } from 'uuid';

const TodoItem = ({ todo, onUpdate, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text || '');

    const handleSave = async () => {
        if (editText.trim() && onUpdate) {
            await onUpdate(todo.id, { text: editText.trim() });
            setIsEditing(false);
        }
    };

    const handleToggleComplete = async () => {
        if (onUpdate) {
            await onUpdate(todo.id, { completed: !todo.completed });
        }
    };

    return (
        <li style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1rem',
            marginBottom: '0.5rem',
            backgroundColor: '#2a2a2a',
            borderRadius: '8px',
            border: '1px solid #444'
        }}>
            <input
                type="checkbox"
                checked={todo.completed || false}
                onChange={handleToggleComplete}
                style={{ marginRight: '1rem' }}
            />

            {isEditing ? (
                <div style={{ flex: 1, display: 'flex', gap: '0.5rem' }}>
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        style={{
                            flex: 1,
                            padding: '0.5rem',
                            backgroundColor: '#1a1a1a',
                            border: '1px solid #555',
                            borderRadius: '4px',
                            color: 'white'
                        }}
                        onKeyPress={(e) => e.key === 'Enter' && handleSave()}
                    />
                    <button onClick={handleSave} style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}>
                        Save
                    </button>
                    <button onClick={() => setIsEditing(false)} style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: '#f44336',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}>
                        Cancel
                    </button>
                </div>
            ) : (
                <>
                    <span style={{
                        flex: 1,
                        color: todo.completed ? '#888' : 'white',
                        textDecoration: todo.completed ? 'line-through' : 'none'
                    }}>
                        {todo.text}
                    </span>
                    <button onClick={() => setIsEditing(true)} style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: '#2196F3',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        marginRight: '0.5rem'
                    }}>
                        Edit
                    </button>
                    <button onClick={() => onDelete(todo.id)} style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: '#f44336',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}>
                        Delete
                    </button>
                </>
            )}
        </li>
    );
};

const ConnectionStatus = ({ isConnected, error }) => {
    return (
        <div style={{
            padding: '1rem',
            marginBottom: '1rem',
            borderRadius: '8px',
            backgroundColor: isConnected ? '#1b5e20' : '#b71c1c',
            color: 'white',
            textAlign: 'center'
        }}>
            {isConnected ? (
                <span>✅ Connected to CloudStore</span>
            ) : (
                <span>❌ Disconnected{error && `: ${error}`}</span>
            )}
        </div>
    );
};

export const TodoApp = () => {
    const { cloudStore, isConnected, connectionError } = useCloudStore();
    const [newTodoText, setNewTodoText] = useState('');
    const [filter, setFilter] = useState('all'); // all, active, completed

    // Create query based on filter
    const query = cloudStore?.query.orderBy('createdAt', 'DESCENDING');
    if (filter === 'active') {
        query?.where('completed', 'EQUAL', false);
    } else if (filter === 'completed') {
        query?.where('completed', 'EQUAL', true);
    }

    const { data: todos, loading, error, operations } = useCollection('todos', query);

    const handleAddTodo = async () => {
        if (!newTodoText.trim()) return;

        try {
            await operations.insert({
                id: v4(),
                text: newTodoText.trim(),
                completed: false,
                createdAt: new Date().toISOString()
            });
            setNewTodoText('');
        } catch (err) {
            console.error('Failed to add todo:', err);
        }
    };

    const handleUpdateTodo = async (todoId, updates) => {
        try {
            const updateQuery = cloudStore.query.where('id', 'EQUAL', todoId);
            await operations.update(updateQuery, updates);
        } catch (err) {
            console.error('Failed to update todo:', err);
        }
    };

    const handleDeleteTodo = async (todoId) => {
        try {
            const deleteQuery = cloudStore.query.where('id', 'EQUAL', todoId);
            await operations.remove(deleteQuery);
        } catch (err) {
            console.error('Failed to delete todo:', err);
        }
    };

    const handleClearCompleted = async () => {
        try {
            const deleteQuery = cloudStore.query.where('completed', 'EQUAL', true);
            await operations.remove(deleteQuery);
        } catch (err) {
            console.error('Failed to clear completed todos:', err);
        }
    };

    const stats = {
        total: todos.length,
        active: todos.filter(todo => !todo.completed).length,
        completed: todos.filter(todo => todo.completed).length
    };

    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '2rem',
            backgroundColor: '#1a1a1a',
            minHeight: '100vh',
            color: 'white'
        }}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
                CloudStore Todo App
            </h1>

            <ConnectionStatus isConnected={isConnected} error={connectionError} />

            {/* Add new todo */}
            <div style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '2rem'
            }}>
                <input
                    type="text"
                    value={newTodoText}
                    onChange={(e) => setNewTodoText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
                    placeholder="Add a new todo..."
                    style={{
                        flex: 1,
                        padding: '1rem',
                        backgroundColor: '#2a2a2a',
                        border: '1px solid #444',
                        borderRadius: '8px',
                        color: 'white',
                        fontSize: '16px'
                    }}
                />
                <button
                    onClick={handleAddTodo}
                    disabled={!newTodoText.trim() || !isConnected}
                    style={{
                        padding: '1rem 2rem',
                        backgroundColor: isConnected ? '#4CAF50' : '#666',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: isConnected ? 'pointer' : 'not-allowed',
                        fontSize: '16px'
                    }}
                >
                    Add
                </button>
            </div>

            {/* Filter buttons */}
            <div style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '2rem',
                justifyContent: 'center'
            }}>
                {['all', 'active', 'completed'].map(filterType => (
                    <button
                        key={filterType}
                        onClick={() => setFilter(filterType)}
                        style={{
                            padding: '0.5rem 1rem',
                            backgroundColor: filter === filterType ? '#2196F3' : '#2a2a2a',
                            color: 'white',
                            border: '1px solid #444',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            textTransform: 'capitalize'
                        }}
                    >
                        {filterType}
                    </button>
                ))}
            </div>

            {/* Stats */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                padding: '1rem',
                backgroundColor: '#2a2a2a',
                borderRadius: '8px',
                marginBottom: '2rem'
            }}>
                <div>Total: {stats.total}</div>
                <div>Active: {stats.active}</div>
                <div>Completed: {stats.completed}</div>
            </div>

            {/* Error display */}
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

            {/* Loading indicator */}
            {loading && (
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                    Loading todos...
                </div>
            )}

            {/* Todo list */}
            {!loading && (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {todos.length === 0 ? (
                        <li style={{
                            textAlign: 'center',
                            padding: '3rem',
                            color: '#888',
                            backgroundColor: '#2a2a2a',
                            borderRadius: '8px'
                        }}>
                            {filter === 'all' ? 'No todos yet. Add one above!' :
                             filter === 'active' ? 'No active todos!' :
                             'No completed todos!'}
                        </li>
                    ) : (
                        todos.map(todo => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                onUpdate={handleUpdateTodo}
                                onDelete={handleDeleteTodo}
                            />
                        ))
                    )}
                </ul>
            )}

            {/* Clear completed button */}
            {stats.completed > 0 && (
                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <button
                        onClick={handleClearCompleted}
                        style={{
                            padding: '1rem 2rem',
                            backgroundColor: '#f44336',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer'
                        }}
                    >
                        Clear Completed ({stats.completed})
                    </button>
                </div>
            )}
        </div>
    );
};