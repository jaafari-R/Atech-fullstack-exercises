const BSNode = require("./BSNode");

const letters = ["H", "E", "S", "G", "L", "Y", "I"];
const bsTree = new BSNode()
letters.forEach(letter => bsTree.insertNode(letter));

//Use the following to test
console.log(bsTree.findNode("H")) // should print true
console.log(bsTree.findNode("G")) // should print true
console.log(bsTree.findNode("Z")) // should print false
console.log(bsTree.findNode("F")) // should print false
console.log(bsTree.findNode("y")) // should print false - we didn't make the tree case sensitive!
