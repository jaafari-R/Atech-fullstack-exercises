

// tests 1
let regexArr = [/at/,/a/,/a$/,/^b/]

console.log(searchMatchingRegex('cat')) //will return true
console.log(searchMatchingRegex('bike')) //will return true
console.log(searchMatchingRegex('mouse')) //will return false 


// tests 2
regexArr = [/a/, /b/, /^d/, /e$/];
const str = "Bike"
const str1 = "the room is on fire"
const str2 = "Fergalicious"
const str3 = "Fox in sheep clothing"


console.log(searchMatchingRegex(str)) //return true (contains b)
console.log(searchMatchingRegex(str1)) //return true (ends with e)
console.log(searchMatchingRegex(str2)) //return true (contains a)
console.log(searchMatchingRegex(str3)) //return false


function searchMatchingRegex(str) {
    return regexArr.find(regExp => regExp.test(str)) !== undefined;
}