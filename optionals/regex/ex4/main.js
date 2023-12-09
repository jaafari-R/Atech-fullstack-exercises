const urlRegExp = /^www.[a-z0-9]*.com$/

const firstURL = "www.workingurl.com"
const secondURL = "iamabadurl.com"
const thirdURL = "www.doireallywork.net"

const urlValidator = function(str){
    return urlRegExp.test(str);
}

console.log(urlValidator(firstURL)) //return true
console.log(urlValidator(secondURL)) //return false
console.log(urlValidator(thirdURL)) //return false