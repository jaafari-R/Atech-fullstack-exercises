function createNestedObject(obj) {
    const newObject = {};

    for(const key of Object.keys(obj)) {
        const subKeys = key.split('.');
        let subObj = newObject;
        for(const index in subKeys) {
            if(index == subKeys.length - 1) {
                subObj[subKeys[index]] = obj[key];
            }
            else {
                if(!subObj[subKeys[index]]) {
                    subObj[subKeys[index]] = {};
                }
            }
            subObj = subObj[subKeys[index]];
        }
    }
    return newObject;
}
// Test the function with
console.log(createNestedObject({ 'user.name': 'Alice', 'user.age': 25 })); // Should return { user: { name: 'Alice', age: 25 } }
