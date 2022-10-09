import {useState} from 'preact/hooks'
import './app.css';
import CloudStore, {Adapters} from "@kabeersnetwork/cloudstore";
import {useCollection} from "./hooks.jsx";
import {createContext} from "preact";
import {v4} from "uuid";

export const DataContext = createContext(undefined);
const TodoList = () => {
    // cloudStore.query.where("username", "EQUAL", "kabeer11000").limit(2).orderBy("user", "ASCENDING").where("password", "EQUAL", "uganda123")
    const collection = useCollection(cloudStore.collection("users"), cloudStore.query.limit(2).orderBy("user", "ASCENDING"));
    return (
        <div style={{border: "transparent"}}>
            <ul style={{listStyle: "none"}}>
                {collection?.collection?.length ? collection.collection.map(({heading, id}) => heading ?
                    <li style={{display: "flex", width: "100%", marginBottom: "2rem", justifyContent: "space-between"}}>
                        <h3 style={{color: "lightgrey", width: "100%"}}>{heading}</h3>
                        <button style={{all: "unset", outline: "orange 5px auto", padding: "1rem", marginLeft: "1rem"}}
                                onClick={() => {
                                    cloudStore.collection("users").remove(cloudStore.query.where("id", "EQUAL", id));
                                }}>X
                        </button>
                    </li> : null) : <div
                    style={{flex: 1, display: "flex", justifyContent: "center", width: "100%", flexDirection: "row"}}>
                    <div style={{marginTop: "5rem"}}>
                        <img style={{filter: "invert(1)", width: "10rem"}}
                             src={"https://cdn.iconscout.com/icon/free/png-256/no-message-1442326-1218395.png"}/>
                        <h3>No Messages</h3>
                    </div>
                </div>}
            </ul>
        </div>
    )
}

const cloudStore = new CloudStore({
    server: {
        uri: "http://localhost:8080",
        access: {
            key: "sample token"
        },
        config: {
            upgradeToBackgroundSync: true,
        }
    },
    cache: {
        storage: {
            adapter: new Adapters.IndexedDB("cloudstore.demo.collection:1")
        }
    },
    database: {
        name: "cloudstore"
    },
});
console.log(cloudStore);

export function App() {
    const [input, setInput] = useState("");
    return (
        <div style={{minHeight: "100vh", width: "100vw"}}>
            <DataContext.Provider value={cloudStore}>
                {/*<Loginscreen/>*/}
                <div style={{display: "flex"}} hidden>
                    <div style={{maxWidth: "30rem", width: "30vw", display: "none", height: "100%"}}>
                    </div>
                    <div style={{
                        flex: 1,
                        display: "flex",
                        position: "relative",
                        padding: "1rem",
                        flexDirection: "column"
                    }}>
                        <div style={{flex: 1}}>
                            <h1 style={{color: "white"}}>Stream</h1>
                            <br/><br/>
                            <TodoList/>
                        </div>
                        <div style={{
                            display: "flex",
                            position: "fixed",
                            bottom: 0,
                            right: 0,
                            flex: 1,
                            width: "100%"
                        }}>
                            <input style={{flex: 1, fontSize: "1rem", padding: "1rem"}} value={input}
                                   onChange={({target}) => setInput(target.value)}/>
                            <button style={{
                                all: "unset",
                                border: "teal 5px auto",
                                backgroundColor: "black",
                                padding: "1rem",
                            }} onClick={async () => {
                                cloudStore.collection("users").insert({heading: input, id: v4()});
                                setInput("")
                            }}>{"Send Message".toUpperCase()}
                            </button>
                        </div>
                    </div>
                </div>
            </DataContext.Provider>
        </div>
    )
}
