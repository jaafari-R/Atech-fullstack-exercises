const mathOperations = function () {
    return {
        add: (num1, num2) => num1 + num2,
        sub: (num1, num2) => num1 - num2,
        mult: (num1, num2) => num1 * num2,
        div: (num1, num2) => num1 / num2
    }
}

const m = mathOperations();

console.log(m.add(5,2))
console.log(m.sub(5,2))
console.log(m.mult(5,2))
console.log(m.div(5,2))
