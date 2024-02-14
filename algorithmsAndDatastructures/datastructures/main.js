class UniqueArray {
    constructor() {
        this.items = {};
        this.itemsArr = [];
    }

    add(item) {
        if(typeof item === "object" && item !== null)
            return;

        if(this.items[item] === undefined) {
            this.items[item] = this.itemsArr.length;
            this.itemsArr.push(item);
        }
    }

    showAll() {
        console.log(this.itemsArr);
    }

    exists(item) {
        if(this.items[item] !== undefined) {
            return true;
        }
        return false;
    }

    get(index) {
        if(index >= this.itemsArr.length) {
            return -1;
        }
        return this.itemsArr[index];
    }
}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
console.log(uniqueStuff.exists("toy")) //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"