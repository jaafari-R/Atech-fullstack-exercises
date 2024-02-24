import { observable, makeObservable, action } from 'mobx'

export class Item {

    constructor(name) {
        this.name = name
        this.completed = false
        this.location = "Super Sell"

        makeObservable(this, {
            name: observable,
            completed: observable,
            location: observable,
            rename: action
        })
    }

    rename = () => {
        this.name += 'a';
    }
}