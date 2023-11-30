function hasNestedProperty(obj, key) {
    const subKeys = key.split('.');
    for(let key of subKeys) {
        if(!obj[key])
            return false;
        obj = obj[key];
    }
    return true;
}
// Test the function with
console.log(hasNestedProperty({ user: { name: 'Bob', age: 30 } }, 'user.name')); // Should return true
