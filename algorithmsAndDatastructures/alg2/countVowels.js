
function countVowels(str) {
    const VOWELS = "aeuoiAEUOI";
    let vowelsCount = 0;

    for(const char of str) {
        if(VOWELS.includes(char)) {
            ++vowelsCount;
        }
    }
    return vowelsCount;
}

console.log(countVowels("aabcUde"));
