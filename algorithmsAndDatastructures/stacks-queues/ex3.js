const { DuoQueue } = require("./DuoQueue");

let dq = new DuoQueue()
    
//first set
dq.enqueue(1, 0)
dq.enqueue(1, 0)
dq.enqueue(1, 0)
dq.enqueue(2, 1)
dq.enqueue(2, 1)
dq.dequeue(0)
dq.dequeue(0)
    
console.log(dq.getLongestQueue()) //Queue { queue: [ 2, 2 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 1 ] }
    
//second set
dq.enqueue(1, 0)
dq.enqueue(1, 0)
dq.enqueue(1, 0)
dq.enqueue(1, 0)
dq.enqueue(1, 0)
dq.enqueue(1, 0)
    
console.log(dq.getLongestQueue()) //Queue { queue: [ 1, 1, 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 2, 2 ] }
    
//balance queues
dq.balanceQueues()
console.log(dq.getLongestQueue()) //Queue { queue: [ 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 1, 1, 2, 2 ] }