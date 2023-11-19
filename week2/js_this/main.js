/* Exercise 1 */
// const person = {
//     hungry: true,
//     feed: function () {
//         if (this.hungry) {
//             this.hungry = false;
//             alert('Im no longer hungry!')
//         }
//     }
// }  
  
// person.feed() //should alert "I'm no longer hungry"


/* Exercise 2 */
// const pump = function (amount) {
//     this.liters += amount;
//     console.log('You put ' + amount + ' liters in ' + this.name);
// };
  
// const garage = {
//     car1: {
//         name: 'Audi',
//         liters: 3,
//         fillTank: pump
//     },
//     car2: {
//         name: 'Mercedes',
//         liters: 1,
//         fillTank: pump
//     },
// };
  
// garage.car1.fillTank(2);
// console.log('Audi should have 5 liters: ',  garage.car1.liters);

// garage.car2.fillTank(30);
// console.log('Mercedes should have 31 liters: ', garage.car2.liters);
  

/* Exercise 3 */
// const pumpFuel = function (plane) {
//     plane.fuel += 1;
// };

// const airplane = {
//     fuel: 0,
//     fly: function () {
//         if (this.fuel < 2) {
//             return 'on the ground!';
//         }
//         else {
//             return 'flying!';
//         }
//     }
// };

// console.log('The plane should not be able to fly (yet): ' + airplane.fly());

// pumpFuel(airplane);
// console.log('The plane should STILL not be able to fly: ' + airplane.fly());

// pumpFuel(airplane);
// console.log('Take off! ' + airplane.fly());
  

/* Exercise 4 */
// const tipJar = {
//     coinCount: 20,
//     tip: function () {
//         this.coinCount += 1;
//     },
//     stealCoins: function(amount) {
//         this.coinCount -= amount;
//     }
// };

// tipJar.tip();
// console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

// tipJar.stealCoins(3);
// console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

// tipJar.stealCoins(10);
// console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);


/* Exercise 5 */
// const revealSecret = function () {
//     return this.secret;
// };

// const shoutIt = function (person, func) {
//     person.revealItAll = func;
//     const result = person.revealItAll();
//     alert.log(person.name + " said: " + result);
// };

// const avi = {
//     name: "Avi",
//     secret: "Im scared of snakes!"
// };

// const narkis = {
//     name: "Narkis",
//     secret: "I dont have secrets because I'm zen like that."
// };

// shoutIt(avi, revealSecret);
// shoutIt(narkis, revealSecret);


/* Exercise 6 */
const coffeeShop = {
    beans: 40,
    money: 0,
    BEAN_COST: 0.1,
  
    drinkRequirements: {
        latte: {
            beanRequirement: 10,
            price: 5
        },
        americano: {
            beanRequirement: 5, 
            price: 3
        },
        doubleShot: {
            beanRequirement: 15, 
            price: 7
        },
        frenchPress: {
            beanRequirement: 12, 
            price: 8
        }
    },

    /* returns true if the drink was made successfully */
    makeDrink: function (drinkType) {
        // don't sell this type of drink
        if(this.drinkRequirements[drinkType] === undefined) {
            console.log("Sorry, we don’t make", drinkType);
            return false;
        }
        // not enough beans
        else if(this.drinkRequirements[drinkType].beanRequirement > this.beans) {
            // try to buy beans
            const beansToBuy = this.drinkRequirements[drinkType].beanRequirement - this.beans;
            if(this.buyBeans(beansToBuy)) {
                console.log("Bought", beansToBuy, "beans.");
            } 
            else {
                console.log("Sorry, we’re all out of beans!");
                return false;
            }
        }

        this.beans -= this.drinkRequirements[drinkType].beanRequirement;
        console.log("Successfully made", drinkType);
        return true;
    },

    buyDrink: function(drinkType) {
        if(this.makeDrink(drinkType)) {
            this.money += this.drinkRequirements[drinkType].price;
            console.log("Sold", drinkType);
        }
    },

    /* returns true if the transaction was successful */
    buyBeans: function(amount) {
        const totalCost = amount * this.BEAN_COST;
        if(totalCost > this.money) {
            console.log("Can't afford beans :(");
            return false;
        }
        else {
            this.money -= totalCost;
            this.beans += amount;
            return true;
        }
    }
}
  
coffeeShop.buyDrink("latte"); 
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered");
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress");
coffeeShop.buyDrink("frenchPress");

