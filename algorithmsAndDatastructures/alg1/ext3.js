function secretEncrypt(str, key) {
    let encryptedStr = "";
    let key_i = 0;
    for(const letter of str) {
        encryptedStr += shiftLetterVal(letter, key[key_i]);
        key_i = (key_i + 1) % key.length;
    }
    return encryptedStr;
}

function secretDecrypt(encryptedStr, key) {
    let plainStr = "";
    let key_i = 0;
    for(const letter of encryptedStr) {
        plainStr += shiftLetterVal(letter, key[key_i], true);
        key_i = (key_i + 1) % key.length;
    }
    return plainStr;
}

function shiftLetterVal(letter, distanceLetter, backwards = false) {
    const letterCaseIndicator = letter.charCodeAt(0) & 32;
    const distCaseIndicator = distanceLetter.charCodeAt(0) & 32;
    letter = (letter.charCodeAt(0) - 65) ^ letterCaseIndicator;
    dist = (backwards ? -1 : 1) * ((distanceLetter.charCodeAt(0) + 1 - 65) ^ distCaseIndicator);
    const newLetterAscii = letter + dist;
    const newLetter = (newLetterAscii < 0 ? newLetterAscii + 26 : newLetterAscii) % 26 + (65 ^ letterCaseIndicator);
    return String.fromCharCode(newLetter)
}

const encryptedStr = secretEncrypt("elephant", "cab")
const decryptedStr = secretDecrypt(encryptedStr, "cab");

console.log(encryptedStr);
console.log(decryptedStr);
