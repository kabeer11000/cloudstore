import { useContext, useEffect, useState, useCallback } from 'preact/hooks';
import { DataContext } from '../app.jsx';

/**
 * Custom hook for managing CloudStore connection and state
 */
export const useCloudStore = () => {
    const cloudStore = useContext(DataContext);
    const [isConnected, setIsConnected] = useState(false);
    const [connectionError, setConnectionError] = useState(null);

    useEffect(() => {
        if (!cloudStore) return;

        try {
            cloudStore.connect();
            setIsConnected(true);
            setConnectionError(null);
        } catch (error) {
            setConnectionError(error.message);
            setIsConnected(false);
        }

        // Monitor connection status
        const socket = cloudStore.info.socket;
        if (socket) {
            const onConnect = () => {
                setIsConnected(true);
                setConnectionError(null);
            };

            const onDisconnect = () => {
                setIsConnected(false);
            };

            const onError = (error) => {
                setConnectionError(error.message || 'Connection error');
                setIsConnected(false);
            };

            socket.on('connect', onConnect);
            socket.on('disconnect', onDisconnect);
            socket.on('error', onError);

            return () => {
                socket.off('connect', onConnect);
                socket.off('disconnect', onDisconnect);
                socket.off('error', onError);
            };
        }
    }, [cloudStore]);

    return {
        cloudStore,
        isConnected,
        connectionError
    };
};

/**
 * Enhanced hook for collection operations with full CRUD support
 */
export const useCollection = (collectionName, query = null) => {
    const { cloudStore } = useCloudStore();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [collection, setCollection] = useState(null);

    useEffect(() => {
        if (!cloudStore || !collectionName) return;

        try {
            const col = cloudStore.collection(collectionName);
            setCollection(col);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }, [cloudStore, collectionName]);

    // Watch for real-time updates
    useEffect(() => {
        if (!collection || !query) return;

        let watchSubscription = null;

        const startWatch = async () => {
            try {
                setLoading(true);
                watchSubscription = collection.watch(query, (updateData) => {
                    if (updateData.collection) {
                        setData(updateData.collection);
                    }
                    setLoading(false);
                    setError(null);
                });
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        startWatch();

        return () => {
            if (watchSubscription) {
                // Clean up subscription if needed
            }
        };
    }, [collection, query]);

    // CRUD operations
    const insert = useCallback(async (document) => {
        if (!collection) throw new Error('Collection not initialized');

        try {
            setError(null);
            const result = await collection.insert(document);
            return result;
        } catch (err) {
            setError(err.message);
            throw err;
        }
    }, [collection]);

    const update = useCallback(async (query, updateData) => {
        if (!collection) throw new Error('Collection not initialized');

        try {
            setError(null);
            const result = await collection.update(query, updateData);
            return result;
        } catch (err) {
            setError(err.message);
            throw err;
        }
    }, [collection]);

    const remove = useCallback(async (query) => {
        if (!collection) throw new Error('Collection not initialized');

        try {
            setError(null);
            const result = await collection.remove(query);
            return result;
        } catch (err) {
            setError(err.message);
            throw err;
        }
    }, [collection]);

    const get = useCallback(async (query) => {
        if (!collection) throw new Error('Collection not initialized');

        try {
            setError(null);
            const result = await collection.get(query);
            return result;
        } catch (err) {
            setError(err.message);
            throw err;
        }
    }, [collection]);

    return {
        data,
        loading,
        error,
        collection,
        operations: {
            insert,
            update,
            remove,
            get
        }
    };
};

/**
 * Hook for building queries with fluent API
 */
export const useQuery = (cloudStore) => {
    const buildQuery = useCallback(() => {
        if (!cloudStore) return null;
        return cloudStore.query;
    }, [cloudStore]);

    return { buildQuery };
};