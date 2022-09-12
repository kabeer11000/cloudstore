import {useEffect, useState} from 'preact/hooks'
import './app.css';
import CloudStore from "@kabeersnetwork/cloudstore";

export function App() {
    const [input, setInput] = useState("")
    useEffect(() => {
        CloudStore.store.create({
            serverURI: "http://localhost:8080/",
            token: "aao"
        }).then(cloudstore => {
            console.log(cloudstore.collection("users").where("user", "EQUAL", "kabeer").watch(console.log))
        })
    }, [])
    return (
        <div>
            <h2>Cloud Store Demo, <strong>SimplyTodo</strong></h2>
            <input value={input} onChange={({target}) => setInput(target.value)}/>
            <button onClick={async () => {

            }}>Save Todo
            </button>
        </div>
    )
}
