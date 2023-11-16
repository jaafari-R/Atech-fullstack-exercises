/* Exercies 1 */
const isEven = (number) => {
    return !(number % 2);
}
console.log(isEven(-1));
console.log(isEven(8));
console.log(isEven(17));


/* Exercies 2 */
const printOddNumbers = (numbers) => {
    for(let number of numbers) {
        if(!isEven(number)) {
            console.log(number);
        }
    }
}
const numberList = [1,2,3,4,5,981,98412];
printOddNumbers(numberList)


/* Exercise 3 */
const containsNumber = (arr, number) => {
    for(let num of arr) {
        if(num === number)
            return true;
    }
    return false;
}
console.log(containsNumber(numberList, -5));
console.log(containsNumber(numberList, 98412));
console.log(containsNumber(numberList, 98413));


/* Exercise 4 */
const calculator = {
    add: function(num1, num2) {
        return num1 + num2;
    },
    substract: function(num1, num2) {
        return num1 - num2;
    }
};
console.log(calculator.add(1, 4));
console.log(calculator.substract(0, 50));


/* Exercise 5 */
const turnToKing = function(name, money){
    const increaseByNameLength = (value, _name) => {
        return value * _name.length;
    }
    const makeRegal = (_name) => {
        return "His Royal Highness, " + _name;
    }

    name = name.toUpperCase();
    money = increaseByNameLength(money, name);
    name = makeRegal(name);

    console.log(name + " has " + money + " gold coins");
}

turnToKing("martin luther", 100); // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"
