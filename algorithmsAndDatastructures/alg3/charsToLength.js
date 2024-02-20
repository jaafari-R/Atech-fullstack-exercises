function charToLength(str) {
    if(!str)
        return "";

    let charToLengthStr = "";
    let count = 0;
    let currChar = str[0];
    for(const char of str) {
        if(char === currChar) {
            ++count;
        }
        else {
            charToLengthStr += currChar + count;
            count = 1;
            currChar = char;
        }
    }
    charToLengthStr += currChar + count;
    return charToLengthStr;
}

console.log(charToLength("aaabzzzbba"));
