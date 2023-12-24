// The Factory Mistake
let meatArr = ["beef","chicken"]
let vegetableArr = ["rabbit","carrots","potatoes","lettuce"]

meatArr = [...meatArr, vegetableArr[0]];
deleteFirst = ([first, ...vegetableArr]) => vegetableArr;
vegetableArr = deleteFirst(vegetableArr);

console.log(meatArr, vegetableArr)
console.log


// The Torn Passportvar firstPiece = { id: 101, name: 'Ofri' }
var firstPiece = { id: 101, name: 'Ofri' }
var secondPiece = { country: 'Israel'}

const  fullPiece =  {...firstPiece, ...secondPiece};
console.log(fullPiece)


// Employees Filter
let employeesArr = [
    { name : "Joey" , id: 1 , age: 26},
    { name : "Lily" , id: null , age: 24},
    { name : "Alice" , id: 7 , age: null},
    { name : "Sam" , id: 8 , age: 24},
    { name : "Ray" , id: null , age: null}
]

nullishEmployeeNames = employeesArr
    .filter(employee => Object.keys(employee)
        .some(key => (employee[key] ?? true) === true))
    .map(employee => employee.name);

console.log(nullishEmployeeNames);