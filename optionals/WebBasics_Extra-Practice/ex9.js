function objectToArray(obj) {
    const objArr = [];
    for(let key of Object.keys(obj)) {
        objArr.push([key, obj[key]]);
    }
    return objArr;
}
// Test the function with
console.log(objectToArray({ name: 'Alice', age: 25 })); // Should return [['name', 'Alice'], ['age', 25]]
