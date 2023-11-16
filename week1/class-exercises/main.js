const HELLO = "Hello";
const WORLD = "World";

function printHelloWorld() {
    console.log(HELLO + ", " + WORLD + "!");
}

const button = {    
    printHello: function() {
        console.log(HELLO);
    },
    text: "Click me",
    click: function() {
        console.log("Button clicked!");
    }
};

function addNum(num1, num2) {
    const sum = num1 + num2;
    console.log('Sum is: ' + sum);
}

printHelloWorld();
button.click();
addNum(5, 3);

const weatherToday = {
    temp: 24,
    type: "sunny",
    print: function() {
        console.log("It is " + this.type + " and the temperature is " + this.temp + "°C.");
    }
};

weatherToday.print();