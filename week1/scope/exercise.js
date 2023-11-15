// For each section, before testing the code, determine the following:
//
//     1- What will console log?
//     2- Will there be an error? Why?
//     3- Will something be undefined? Why?
//     4- To what scope does each variable belong? are they local or global?


/* Section 1 */
const run = true

if (run) {
    let distance = 8
    for (var i = 0; i < distance; i++) {
        console.log("running")
    }
    console.log("Finished running " + distance + " miles")
}

console.log("Damn, you see this gal? She ran " + distance + " miles") 

// 1- The console will log: 
//      "running" 8 times
//      "Finished running 8 miles"
// 2- There will be an variable not defined error, because 'distance' was not defined in the same scope as the last console log
// 3- 'i' will be undefined at the start of the script, because it's defined with 'var'
// 4- scopes:
//      'run' is global - it belongs to the whole script
//      'distance' is local - it belongs to the if statement after it's definition
//      'i' is global - belongs to the whole script


/* Section 2 */
if (13 == "space") {
    let cowSound = "moo"
}
else {
    console.log("Cow says " + cowSound)
}

// 1- Nothing will be logged
// 2- There will be an variable not defined error, because 'cowSound' was not defined in the same scope as the last console log in the else scope
// 3- No
// 4- scopes:
//      'cowSound' is local - it belongs to the if scope - not the else scope


/* Section 3 */
const serveOrders = function (orders) {

    for (let order of orders) {
        let specialOrder = "special " + order
        console.log("Served a " + specialOrder)
    }

    console.log("Finished serving all the orders: " + orders)
}
const allOrders = ["fish", "lettuce plate", "curious cheese"]
serveOrders(allOrders)

// 1- The console will log:
//      "Served a special fish"
//      "Served a special lettuce plate"
//      "Served a special curious cheese"
//      "Finished serving all the orders: [ "fish", "lettuce plate", "curious cheese"]"
// 2- No errors
// 3- nothing will be undefined
// 4- scopes:
//      'allOrders' and 'serveOrders' are global - they belongs the entire script
//      'orders' is local - it belongs to the servOrders function scope
//      'order' and 'specialOrder' are local - they belong to the for loop scope


/* Section 4 */
const pot = "red pot with earth in it"

const getSeed = function () {
    const seed = "brown seed"
}

const plant = function () {
    getSeed()
    console.log("Planting the " + seed + " inside a " + pot)
}

plant()

// 1- Nothing will be logged
// 2- Error inside plant, because 'seed' is not defined in the function scope
// 3- Nohing will be undefined
// 4- scopes:
//      'pot', 'getSeed', and 'plant',  are global - their scope is the entire script
//      'seed' is local - it belongs in the getSeed function scope


/* Section 5 */
const doesUserExist = function (name) {
    const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
    for (let u of users) {
        if (u.name == name) {
            const found = true
        }
    }
    return found
}

const userExists = doesUserExist("Lucius")
if (userExists) {
    console.log("We found the ragamuffin!")
}
else {
    console.log("No idea where this person is.")
}

// 1- Nothing will be logged
// 2- There will be a variable not defined error because the 'found' returned in the 'doesUserExist' is not in the scope of the entire function - rather inside the if scope
// 3- Nothing will be undefined
// 4- scopes:
//      'userExists, and 'doesUserExist' are global - their scope is the entire script
//      'name' and 'users' are local - it belongs in the 'doesUserExist' function scope
//      'u' is local - it belongs in the for loop scope inside of 'doesUserExist' method
//      'found' is local - it belongs in the if scope inside of 'doesUserExist' method


/* Section 6 */
const isEnough = false

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true
        }
    }
}

makeEnough()
if (isEnough) {
    console.log("Finally, sheesh")
}
else {
    console.log("Here we go again...")
}

// 1- Nothing will be logged
// 2- there will be an assign value to constant error when we try to reassign isEnough in the makeEnough function
// 3- Nothing will be undefined
// 4- scopes:
//      'isEnough', and 'makeEnough' are global - they belongs in the scope of the entire script
//      'i' is local - it belongs in the 'makeEnough' function scope