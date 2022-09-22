import {useState} from "preact/hooks";

function Loginscreen() {
    let [password, setPassword] = useState("");
    let [username, setUsername] = useState("");

    return <div>
        <input value={username} onChange={e => setUsername(e.target.value)}/>
        <input value={password} onChange={e => setPassword(e.target.value)}/>
        <button>loginorsingup</button>
    </div>
}

export default Loginscreen;