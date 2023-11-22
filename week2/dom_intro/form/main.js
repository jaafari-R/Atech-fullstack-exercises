const MIN_NAME_LENGTH = 3;
const MIN_SALARY = 10001;
const MAX_SALARY = 15999;
const PHONE_NUM_LEN = 10;

const isValidNameLength = (name) => {
    if(str.length <= MIN_NAME_LENGTH)
        return false;
    return true;
}

const isValidSalary = (salary) => {
    if(salary < MIN_SALARY || salary > MAX_SALARY)
        return false;
    return true;
}

const isValidDate = (date) => {
    if(date === null || date === '')
        return false;
    return true;
}

const isValidPhoneNumber = (phoneNum) => {
    if(phoneNum.length !== PHONE_NUM_LEN)
        return false;
    return true;
}

const validateInput = () => {
    const name = document.getElementById("name").value;
    const salary = document.getElementById("salary").value;
    const birthday = document.getElementById("birthday").value;
    const phone = document.getElementById("phone").value;
    
    console.log(name, salary, birthday, phone)
}