function sum<Type>(numbers: Type) : number | string | null {
    if(typeof numbers == "number")
        return numbers;
    else if(typeof numbers == "string") {
        return !isNaN(parseInt(numbers)) ? numbers : null;
    }
    else if(Array.isArray(numbers)) {
        return numbers.map(num => parseInt(num)).reduce((sum, num) => !isNaN(num) ? sum + num : sum, 0);
    }
    return null;
}

console.log(sum("23"));
console.log(sum("Tomer"));
console.log(sum(44));
console.log(sum(["test", 22, 55, "block", "9"]));
console.log(sum([23, 433, 11]));