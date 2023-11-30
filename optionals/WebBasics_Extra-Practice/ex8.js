let person = {
    name: 'John',
    greet: function() {
        return `hello, ${this.name}!`
    }
};
// Test the method with
console.log(person.greet()); // Should return "Hello, John!"
