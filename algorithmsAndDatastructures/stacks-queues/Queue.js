class Queue {
    constructor() {
        this.queue = [];
    }

    get length() {
        return this.queue.length;
    }

    isEmpty() {
        return this.length === 0;
    }

    peek() {
        if(this.isEmpty())
            return null;
        return this.queue[0];
    }

    enqueue(item) {
        this.queue.push(item);
    }

    dequeue() {
        if(this.isEmpty())
            return null;
        const front = this.queue.splice(0, 1);
        return front[0];
    }

    print() {
        console.log(this.queue)
    }
}

module.exports = Queue;