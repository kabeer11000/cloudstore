import { useState } from 'preact/hooks'
import './app.css';
import CloudStore, { Adapters } from "@kabeersnetwork/cloudstore";
import { createContext } from "preact";
import { TodoApp } from "./components/TodoApp.jsx";
import { CloudStoreDemo } from "./components/CloudStoreDemo.jsx";
import { ErrorBoundary } from "./components/ErrorBoundary.jsx";

export const DataContext = createContext(undefined);

const cloudStore = new CloudStore({
    server: {
        uri: "http://localhost:8080",
        access: {
            key: "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.tyh-VfuzIxCyGYDlkBA7DfyjrqmSHu6pQ2hoZuFqUSLPNY2N0mpHb3nk5K17HWP_3cYHBw7AhHale5wky6-sVA"
        },
        config: {
            upgradeToBackgroundSync: true,
        }
    },
    authentication: {
        custom_token: {
            jwt: "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.tyh-VfuzIxCyGYDlkBA7DfyjrqmSHu6pQ2hoZuFqUSLPNY2N0mpHb3nk5K17HWP_3cYHBw7AhHale5wky6-sVA"
        }
    },
    cache: {
        active: "IF_NO_NETWORK",
        storage: {
            adapter: new Adapters.IndexedDB("cloudstore.demo.todos")
        }
    },
    database: {
        name: "cloudstore-demo"
    },
});

const Navigation = ({ activeDemo, setActiveDemo }) => (
    <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '60px',
        backgroundColor: '#2a2a2a',
        borderBottom: '1px solid #444',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        zIndex: 1000
    }}>
        <button
            onClick={() => setActiveDemo('todo')}
            style={{
                padding: '0.5rem 1rem',
                backgroundColor: activeDemo === 'todo' ? '#2196F3' : 'transparent',
                color: 'white',
                border: '1px solid #2196F3',
                borderRadius: '4px',
                cursor: 'pointer'
            }}
        >
            Todo App
        </button>
        <button
            onClick={() => setActiveDemo('full')}
            style={{
                padding: '0.5rem 1rem',
                backgroundColor: activeDemo === 'full' ? '#2196F3' : 'transparent',
                color: 'white',
                border: '1px solid #2196F3',
                borderRadius: '4px',
                cursor: 'pointer'
            }}
        >
            Full Demo
        </button>
    </div>
);

export function App() {
    const [activeDemo, setActiveDemo] = useState('todo');

    return (
        <div style={{ minHeight: "100vh", width: "100vw", backgroundColor: "#121212" }}>
            <ErrorBoundary>
                <DataContext.Provider value={cloudStore}>
                    <Navigation activeDemo={activeDemo} setActiveDemo={setActiveDemo} />
                    <div style={{ paddingTop: '60px' }}>
                        {activeDemo === 'todo' ? <TodoApp /> : <CloudStoreDemo />}
                    </div>
                </DataContext.Provider>
            </ErrorBoundary>
        </div>
    )
}
