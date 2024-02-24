import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Item from './components/Item';
import { observer } from 'mobx-react';

function App({ store }) {
  const [newItemName, setNewItemName] = useState("");

  const handleChange = (e) => {
    setNewItemName(e.target.value)
  }
  const addItem = () => {
    console.log("Hi")
    store.addItem(newItemName)
  }
  return (
    <div className="App">
      <input onChange={handleChange} value={newItemName} />
      <button onClick={addItem}>Add</button>
      {/* your code here
        You should map each grocery item into an Item component
    */}
      {store.list.map((item, i) => 
        <Item 
          item={item}
          store={store}
          key={i}
        />)
      }
    </div>
  );
}

export default observer(App);
