/* eslint-disable */
import { observable, action, makeObservable } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    constructor() {
        this.list = []
        this.length = 0
        // your code here
        makeObservable(this, {
            list: observable,
            length: observable,
            checkItem: action,
            addItem: action,
            editItemLocation: action
        })
    }
    checkItem = (name) => {
        const item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    }
    addItem = (itemName) => {
        const newItem = new Item(itemName);
        this.list.push(newItem)
    }
    editItemLocation = (itemName, newLocation) => {
        const item = this.list.find(item => item.name === itemName);
        item.location = newLocation;
    }
    deleteItem = (itemName) => {
        const itemIndex = this.list.findIndex(item => item.name == itemName);
        this.list.splice(itemIndex, 1);
    }
}

