function encrypt(str) {
    let encryptedStr = "";
    for(const char of str) {
        encryptedStr += encryptChar(char);
    }
    return encryptedStr;
}

function encryptChar(char) {
    if(char == 'z')
        return 'a';
    if(char == 'Z')
        return 'A';
    return String.fromCharCode(char.charCodeAt(0) + 1);
}

console.log(encrypt("cat"))
console.log(encrypt("aazzAZ"))
