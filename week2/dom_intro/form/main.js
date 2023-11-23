const MIN_NAME_LENGTH = 3;
const MIN_SALARY = 10001;
const MAX_SALARY = 15999;
const PHONE_NUM_LEN = 10;

const INVALID_NAME_ERROR_MSG = "The Name should contain more than 2 letters";
const INVALID_SALARY_ERROR_MSG = "The salary should be more than 10000 and less than 16000";
const INVALID_BIRTHDAY_ERROR_MSG = "Please Enter your BirthDay";
const INVALID_PHONENUMBER_ERROR_MSG = "The phone number does not contain 10 digits";

const isValidNameLength = (name) => {
    if(name.length < MIN_NAME_LENGTH)
        return false;
    return true;
}

const isValidSalary = (salary) => {
    const salaryVal = parseInt(salary) || 0;
    if(salaryVal < MIN_SALARY || salaryVal > MAX_SALARY)
        return false;
    return true;
}

const isValidDate = (date) => {
    if(date === '')
        return false;
    return true;
}

const isValidPhoneNumber = (phoneNum) => {
    if(phoneNum.length !== PHONE_NUM_LEN)
        return false;
    return true;
}

const validateInput = () => {
    const errorMsg = document.getElementById("error-msg");
    const name = document.getElementById("name").value;
    const salary = document.getElementById("salary").value;
    const birthday = document.getElementById("birthday").value;
    const phoneNum = document.getElementById("phone").value;
    
    errorMsg.innerHTML = "";
    errorMsg.style.color = "red";
    if(!isValidNameLength(name)) {
        errorMsg.innerHTML += INVALID_NAME_ERROR_MSG + "<br>";
    }
    if(!isValidSalary(salary)) {
        errorMsg.innerHTML += INVALID_SALARY_ERROR_MSG + "<br>";
    }
    if(!isValidDate(birthday)) {
        errorMsg.innerHTML += INVALID_BIRTHDAY_ERROR_MSG + "<br>";
    }
    if(!isValidPhoneNumber(phoneNum)) {
        errorMsg.innerHTML += INVALID_PHONENUMBER_ERROR_MSG + "<br>";
    }

    if(!errorMsg.innerHTML) {
        const form = document.getElementById("info-form");
        const welcomeMsg = document.getElementById("valid-submit");
        form.style.display = "none";
        welcomeMsg.innerHTML = "Welcome " + name;
    }
}