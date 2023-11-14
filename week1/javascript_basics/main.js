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
const userName = prompt("What's your name?")
if(userName) {
    console.log("The user's name is", userName);
}
else {
    console.log("The user have not entered his name");
}


/* Arrays */
let employeeNames = ["Ramadan", "Raed", "Rami", "Rena"]
// array size
console.log(employeeNames.length)
/* Arrays are 0-indexed and their members can be accessed using the syntax 'arr[index]'*/
console.log(employeeNames[2]) // prints Rami in the console
/* items can be inserted to the end of the Array using the push() method */
employeeNames.push("Roni");

/* Spread operator */
/* the syntax '...arr' represents 'arr[0], arr[1], ..., arr[-1]' */
// arr[-1] means the last element of the array
/* Spread operator can be used to insert the elements in an array into another array */
employeeNames.push(...employeeNames); // same as employeeNames.push("Ramadan", "Raed", "Rami", "Rena")
// note that this is different than employeeNames.push(employeeNames), as this appends a reference of the array to itself

/* Splice - removes elements (in a specific range) from an array and returns them */
employeeNames.splice(1,2); // remove two items, starting at index 1
/* Splice can insert a set of items at the remove position by passing an array to it */
employeeNames.splice(1, 1, ...["Sami", "Foad", "Karem"]);
console.log(employeeNames);



12