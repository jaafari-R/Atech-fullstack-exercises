/* check this in the browser's console =) */
console.log("Hello!");


// comment 1
/* comment2 */


/* Variables are created using the keywords: 'let', 'const', and 'var' */
/* 'let' variables are only accessible withen the scope they were created */
/* 'const' is the same as 'let', but we must initialize it's value and we can't change it later */
/* 'var' variables can be accessed from anywhere withen the script */
let food = "Ice Cream";
let otherFood; // no initial value
const mustHave = "stake"; // we must initialize 'const' variables
var mineral = "Gold";
var otherMineral;
// we can change 'var' and 'let' variables values
food = "Steak";
mineral = "Silver";

/* Note: uninitialized variables have the value of 'undifined' */


/* JS variables can hold anything */
/* Most common datatypes are 'Boolean', 'Number', 'String' <== Those are "Premitive" types */


/* Comparision Operators */
/* JS has '==' which tries to adjust the values to the same type before evaulating their equality */
/* JS has '===' which checks the equality of the 'type' and 'value', if one of them is not equal the result is false */
1 == '1'; // true
1 == 1; // true
1 === '1'; // false - same value, different type
1 === 1; // true - same type and value


/* The following values evalute as false: */
/* 0, '', "", undefined, NaN, null */


/* We can use || to assign default values if a variable is undefined */
let value = undefined;
let newValue = (value || 5); // set to 5, because value is undefined 


/* We can prompt the user for input using the prompt function */
/* If the user closes the prompt instead of submitting a value, 'null' is returned */
if(userName) {
    console.log("The user's name is", userName);
}
else {
    console.log("The user have not entered his name");
}