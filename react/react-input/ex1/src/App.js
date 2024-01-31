import './App.css';
import { useState } from "react";

function App() {
    const [person, setPerson] = useState({ name: "", age: "" });

    const handleChange = (event, property) => {
        console.log(property, event.target.value)
        setPerson({ ...person, [property]: event.target.value });
    }

    const greet = () => {
        alert(`Hello ${person.name}, you're ${person.age}`);
    }

    return (
        <div>
            <input placeholder='name' id="name-input" onChange={(e) => handleChange(e, 'name')} value={person.name} />
            <input placeholder='age' id="age-input" onChange={(e) => handleChange(e, 'age')} value={person.age} />
            <button onClick={greet}>Go to Bar</button>
        </div>
    );
}

export default App;
