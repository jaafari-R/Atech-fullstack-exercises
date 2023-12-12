function updateProperty(obj, key, value) {
    obj[key] = value;
}
// Test the function with
const person = { name: 'Alice' };
updateProperty(person, 'name', 'Bob')
console.log(person); // Should change name to Bob
