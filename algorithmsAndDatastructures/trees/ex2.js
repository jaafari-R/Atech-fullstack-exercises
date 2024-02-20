const BSNode = require("./BSNode");

const letters = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"]
const bsTree = new BSNode()
letters.forEach(letter => bsTree.insertNode(letter));

console.log(bsTree.findCommonParent("B", "I")) //should return "H"
console.log(bsTree.findCommonParent("B", "G")) //should return "E"
console.log(bsTree.findCommonParent("B", "L")) //should return "J"
console.log(bsTree.findCommonParent("L", "Y")) //should return "R"
console.log(bsTree.findCommonParent("E", "H")) //should return "J"
