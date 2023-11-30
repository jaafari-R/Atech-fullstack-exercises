function mergeObjects(obj1, obj2) {
    const newObj = {};

    for(const key of Object.keys(obj1)) {
        newObj[key] = obj1[key];
    }
    for(const key of Object.keys(obj2)) {
        newObj[key] = obj2[key];
    }
    
    return newObj;
}
// Test the function with
console.log(mergeObjects({ name: 'Alice' }, { age: 25 })); // Should return { name: 'Alice', age: 25 }