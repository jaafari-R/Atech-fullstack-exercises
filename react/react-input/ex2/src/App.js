import './App.css';
import { useState, useEffect } from 'react';

function App() {

    const [name, setName] = useState("");
    const [fruit, setFruit] = useState("");

    const handleChange = (setState) => (event) => {
        setState(event.target.value);
    }

    useEffect(() => {
        console.log(`${name} has picked ${fruit}`)
    }, [fruit]);

    return (
        <div>
            <input id="name-input" onChange={handleChange(setName)} value={name} />
            <select id="select-input" onChange={handleChange(setFruit)} value={fruit}>
                <option value="Apple">Apple</option>
                <option value="Peach">Peach</option>
                <option value="Banana">Banana</option>
            </select>
        </div>
    );
}

export default App;
