const emailRegexp = /^[a-z]*@[a-z]*.com$/i;


const email1 = "cat@meow.com"
const email2 = "bad1npuT!@gmail.com"
const email3 = "meow@gmail.net"
const email4 = "bad1npuT@gmail.com"

const emailValidator = function(str){
    return emailRegexp.test(str);
}

console.log(emailValidator(email1)) //return true
console.log(emailValidator(email2)) //return false
console.log(emailValidator(email3)) //return false
console.log(emailValidator(email4)) //return false