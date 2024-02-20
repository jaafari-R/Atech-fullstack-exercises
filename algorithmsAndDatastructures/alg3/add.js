function add(num1, num2) {
    if(!num2) {
        return (num) => num1 + num;
    }
    return num1 + num2;
}

console.log(add(2, 5)); // 7
console.log(add(2)(5)); // 7
