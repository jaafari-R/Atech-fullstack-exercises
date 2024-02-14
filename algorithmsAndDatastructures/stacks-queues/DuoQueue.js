const Queue = require("./Queue");

class MultiQueue {
    constructor(n) {
        this.length = n;
        this.queues = [];
        for(let i = 0; i < n; ++i) {
            this.queues.push(new Queue());
        }
    }

    enqueue(person, qNum) {
        if(qNum < 0 || qNum >= this.length)
            return null;
        this.queues[qNum].enqueue(person);
    }

    dequeue(qNum) {
        if(qNum < 0 || qNum >= this.length)
            return null;
        return this.queues[qNum].dequeue();
    }

    getLongestQueue() {
        let longestQueue = null;
        let maxLen = -1;
        for(const q of this.queues) {
            if(q.length > maxLen) {
                longestQueue = q;
                maxLen = q.length;
            }
        }
        return longestQueue;
    }

    getShortestQueue() {
        let shortestQueue = null;
        let minLen = Infinity;
        for(const q of this.queues) {
            if(q.length < minLen) {
                shortestQueue = q;
                minLen = q.length;
            }
        }
        return shortestQueue;
    }

    balanceQueues() {
        let shortestQueue = this.getShortestQueue();
        let longestQueue = this.getLongestQueue();
        while(Math.abs(longestQueue.length - shortestQueue.length > 1))
            shortestQueue.enqueue(longestQueue.dequeue());
            shortestQueue = this.getShortestQueue();
            longestQueue = this.getLongestQueue();
        }
    }

class DuoQueue extends MultiQueue {
    constructor() {
        super(2);
    }
}

module.exports = { 
    DuoQueue,
    MultiQueue
};