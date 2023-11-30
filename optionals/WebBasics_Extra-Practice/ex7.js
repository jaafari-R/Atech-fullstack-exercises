function hasProperty(obj, key) {
    if(!obj[key])
        return false;
    return true;
}
// Test the function with
console.log(hasProperty({ name: 'Alice', age: 25 }, 'age')); // Should return true

