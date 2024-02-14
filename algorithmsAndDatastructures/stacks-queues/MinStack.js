class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    get length() {
        return this.stack.length;
    }

    push(item) {
        if(this.minStack.length === 0 ||
            this.stack[this.#back(this.minStack)] > item) {
                this.minStack.push(this.stack.length);
        }
        this.stack.push(item);
    }   

    isEmpty() {
        return this.length === 0;
    }

    peek() {
        if(this.isEmpty())
            return null;
        return this.stack[this.stack.length - 1];
    }

    pop() {
        if(this.isEmpty())
            return null;
        const top = this.stack.splice(-1, 1)[0];
        if(this.stack.length === this.#back(this.minStack)) {
            this.minStack.splice(-1, 1);
        }
        return top;
    }

    getMin() {
        if(this.isEmpty())
            return null;
        return this.stack[this.#back(this.minStack)];
    }

    #back(arr) {
        return arr[arr.length - 1];
    }
}

module.exports = MinStack;