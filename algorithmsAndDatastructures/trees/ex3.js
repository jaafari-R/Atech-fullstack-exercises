const BSNode = require("./BSNode");

const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let nodeWithOneChild = new BSNode();
numbers.forEach(n => nodeWithOneChild.insertNode(n));
nodeWithOneChild.print()
nodeWithOneChild.removeNode(9); // will return tree like the first image (the 9 will be deletied) 
nodeWithOneChild.print()
    
let nodeWithTwoChildren = new BSNode();
numbers.forEach(n => nodeWithTwoChildren.insertNode(n));
nodeWithTwoChildren.print()
nodeWithTwoChildren.removeNode(8); // will return tree like the second image (the root will be 5) 
nodeWithTwoChildren.print()
