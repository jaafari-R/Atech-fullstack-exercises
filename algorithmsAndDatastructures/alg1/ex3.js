function firstNonRepeatingChar(str) {
    const freq = {};
    for(const char of str) {
        if(freq[char] === undefined)
            freq[char] = 1;
        else
            ++freq[char];
    }
    for(const char of str) {
        if(freq[char] === 1) {
            return char;
        }
    }
    return null;
}

console.log(firstNonRepeatingChar("aabbccdee"));
console.log(firstNonRepeatingChar("abca"));
