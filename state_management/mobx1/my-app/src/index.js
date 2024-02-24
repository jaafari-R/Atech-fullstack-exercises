import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Item } from "./stores/Item";
import { ShoppingList } from "./stores/ShoppingList";

let potatoes = new Item("Potatoes")
let corn = new Item("Corn")
let sombreros = new Item("Sombreros")
let groceryList = new ShoppingList()
groceryList.list.push(potatoes)
groceryList.list.push(corn)
groceryList.list.push(sombreros)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={groceryList}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
