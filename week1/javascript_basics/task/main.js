/* section 7 - Exercise 1 */
console.log( (5 > 2) && false );
console.log( !("knife" == "sword") );
console.log( (1 < 2) || (-1 > -1) || !false );
console.log( Boolean("") );
console.log( (31 % 5) == "1" );
console.log( !!true );
console.log( "5th Avenue" != "5th Avenue" );
console.log( 52 !== "52" );
console.log( undefined != null );


console.log("\n-------\n");


/* section 7 - Exercise 2 */
let a = 3;
let c = 0;
let b = a;
b = a;
c = a;
b = c;
a = b;
console.log("a:", a);
console.log("b:", b);
console.log("c:", c);


console.log("\n-------\n");


/* section 9 exercise */
const teslaAIBotInitConversation = (boughtTesla, yearOfTeslaPurchase, isUSCitizen, currentYear) => {
    if(isUSCitizen && boughtTesla) {
        if(currentYear - yearOfTeslaPurchase >= 4) {
            console.log("Are you interested in upgrading to a new Tesla?")
        }
        else {
            console.log("Are you satisfied with the Tesla you bought?")
        }
    }
    else if(boughtTesla) { // not a US citizen
        console.log("Would you like to move to the US?");
    }
    else {
        console.log("Are you interested in buying a Tesla?")
    }
}

teslaAIBotInitConversation(true, 2014, true, 2018);


console.log("\n-------\n");


/* section 11 exercise */
const numbers = [1,2,3,4,5,6,7,8,9,10];
// delete second and third element
numbers.splice(1, 2);
// change the fourth element to 1
numbers[3] = 1;
// delete the last 4 elements
numbers.splice(-4, 4);
// add another element 0 to the beginning of the array
numbers.unshift(0);
// print the modified array
console.log(numbers);


console.log("\n-------\n");


/* section 13 exercise 1 */
const p1 = {
    name: "Jill",
    age: 26,
    city: "Jerusalem"
}
const p2 = {
    name: "Robert",
    age: 26,
    city: "Eilat"
}

// write code using logic provided https://codio.com/rjaafari/javascript-basics
if(p1.age == p2.age) {
    if(p1.city == p2.city) {
        console.log(`${p1.name} wanted to date ${p2.name}`);
    }
    else {
        console.log(`${p1.name} wanted to date ${p2.name}, but couldn't`);
    }
}


console.log("\n-------\n");


/* section 13 exercise 2 */
const library = {
    books: [
        {
            title: "How Big Things Get Done",
            authors: ["Bent Flyvbjerg", "Dan Gardner"]
        },
        {
            title: "The Body Keeps the Score",
            authors: ["Bessel van der Kolk"]
        },
        {
            title: "Lost Connections",
            authors: ["Johann Hari"]
        }
    ]
}
console.log(library);


console.log("\n-------\n");


/* section 13 exercise 3 */
const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
}
  
let customerName;
// keep prompting until the user submits a name
while(!customerName) {
    customerName = prompt('Please enter the name for your reservation');
}
// lower case avoids confusion for the customer
customerName = customerName.toLowerCase();

if(reservations[customerName]) {
    if(reservations[customerName].claimed) {
        alert("Hmm, someone already claimed this reservation");
    }
    else {
        alert(`Welcome, ${customerName}!`)
    }
}
else {
    alert("You have no reservation");
}


/* section 13 exercise 3.2 */
customerName = null;
// keep prompting until the user submits a name
while(!customerName) {
    customerName = prompt('Please enter the name for your reservation');
}
// lower case avoids confusion for the customer
customerName = customerName.toLowerCase();

if(reservations[customerName] && reservations[customerName].claimed) {
    alert("Hmm, someone already claimed this reservation");
}
else {
    if(!reservations[customerName]) {
        reservations[customerName] = {
            claimed: true
        };
    }
    else {
        reservations[customerName].claimed = true;
    }
    alert(`Welcome, ${customerName}!`)
}


console.log("\n-------\n");


/* section 13 Extension */
const date = 3
const DAMAGE_RATE = 2;

const kitchen = {
    owner: "Geraldine",
    hasOven: true, // choose one
    fridge: {
        price: 500,
        works: false, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

const raddishExpireTime = date - kitchen.fridge.items[1].expiryDate;
const fridgeFixPrice = kitchen.fridge.price / DAMAGE_RATE;
// Geraldine does not care about the kitchen unless the radish expires :D
if(raddishExpireTime > 0) {
    const expireText = `${kitchen.owner}’s ${kitchen.fridge.items[1].name} expired ${raddishExpireTime} day ago.`;
    const fridgeWorksText = `Weird, considering her fridge works.`;
    const fridgeDoesntWorkText = `Probably because her fridge doesn’t work.`;
    const fridgeFixText = `And she’ll have to pay ${fridgeFixPrice} to fix the fridge.`;
    const ovenWorksText = `Luckily, she has an oven to cook the ${kitchen.fridge.items[1].name} in.`;
    const ovenDoesntWorkText = `Too bad she doesn’t have an oven to cook the ${kitchen.fridge.items[1].name} in.`;

    if(kitchen.hasOven && kitchen.fridge.works) {
        console.log(`${expireText} ${fridgeWorksText} ${ovenWorksText}`);
    }
    else if(kitchen.hasOven && !kitchen.fridge.works) {
        console.log(`${expireText} ${fridgeDoesntWorkText} ${ovenWorksText} ${fridgeFixText}`);
    }
    else if(!kitchen.hasOven && kitchen.fridge.works) {
        console.log(`${expireText} ${fridgeWorksText} ${ovenDoesntWorkText}`);
    }
    else { // !kitchen.hasOven && !kitchen.fridge.works
        console.log(`${expireText} ${fridgeDoesntWorkText} ${ovenDoesntWorkText} ${fridgeFixText}`);
    }
}


console.log("\n-------\n");


/* section 15 Exercise 1 */
const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for(let personIndex in names) {
    people.push({
        name: names[personIndex],
        age: ages[personIndex] || -1000
    });
}
// console.log(people);


console.log("\n-------\n");


/* section 15 Exercise 2 */
for(let person of people) {
    console.log(`${person.name} is ${person.age} years old`);
}


console.log("\n-------\n");


/* section 15 Exercise 3 */
const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
]
const deletePostId = 2;
const deletePostIndex = posts.findIndex(post => post.id === 2);
posts.splice(deletePostIndex, 1);
console.log(posts);


console.log("\n-------\n");


/* section 15 Exercise 4 */
// I am replacing the word 'posts' with 'reviews' here
const reviews = [
    {
        id: 1, 
        text: "Love this product",
        comments: []
    },
    { 
        id: 2, 
        text: "This is the worst. DON'T BUY!", 
        comments: [
            {id: 1, text: "Idiot has no idea"}, 
            {id: 2, text:"Fool!"}, 
            {id: 3, text: "I agree!"}
        ]
    },
    {
        id: 3, 
        text: "So glad I found this. Bought four already!",
        comments: []
    }
]
const reviewIndex = reviews.findIndex(review => review.id === 2);
const commentIndex = reviews[reviewIndex].comments.findIndex(comment => comment.id === 3);
reviews[reviewIndex].comments.splice(commentIndex, 1);
console.log(reviews)


console.log("\n-------\n");


/* section 15 Extention */
const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
}

for(let letter of Object.keys(dictionary)) {
    console.log("Words that begin with " + letter + ":")
    for(let word of dictionary[letter]) {
        console.log(`\t${word}`);
    }
}