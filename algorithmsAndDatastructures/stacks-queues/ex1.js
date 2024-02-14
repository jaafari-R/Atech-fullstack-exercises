const Queue = require("./Queue");

let q = new Queue()
console.log(q.isEmpty())    //true
q.print()                   //[]
q.enqueue(2)
console.log(q.isEmpty())    //false
q.enqueue(4)
q.print()                   //[2, 4]
console.log(q.peek())       //2
q.dequeue()
q.dequeue()
console.log(q.peek())       //null
console.log(q.isEmpty())    //true