regexArr = [/at/,/a/,/a$/,/^b/]

console.log(SearchMatchingRegex('cat')) //will return true
console.log(SearchMatchingRegex('bike')) //will return true
console.log(SearchMatchingRegex('mouse')) //will return false 


function SearchMatchingRegex(str) {
    return regexArr.find(regExp => regExp.test(str)) !== undefined;
}