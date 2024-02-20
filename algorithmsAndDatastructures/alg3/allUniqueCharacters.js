function allUniqueChars(str) {
    const exists = {};
    for(const letter of str) {
        if(exists[letter]) {
            return false;
        }
        else {
            exists[letter] = true;
        }
    }
    return true;
}

console.log(allUniqueChars("hello"));
console.log(allUniqueChars("cat"));
