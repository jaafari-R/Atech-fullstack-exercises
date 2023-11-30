let person = {
    name: 'John',
    birthYear: 1990
};

function calculateAge(obj) {
    const currYear = new Date().getFullYear();
    return currYear - obj.birthYear;
}
// Test the function with
console.log(calculateAge(person)); // Should return age