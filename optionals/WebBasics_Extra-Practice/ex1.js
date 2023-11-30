function countProperties(obj) {
    return Object.keys(obj).length;
}
// Test the function with
console.log(countProperties({ name: 'Alice', age: 25 })); // Should return 2
