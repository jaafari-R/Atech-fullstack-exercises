const userEmailAndCompany = (users) => {
    return users.map(u => {
        return {
            email: u.email,
            companyName: u.company.name
        }
    });
}

const usersWhoZipcodeStartingWithDigit = (users, digit) => {
    if(typeof digit !== "number" && digit > 9 || digit < 0) {
        return false;
    }
    return users.filter(u => u.address.zipcode[0] == digit);
}

const userIdsWhoZipcodeStartingWithDigit = (users, digit) => {
    if(typeof digit !== "number" && digit > 9 || digit < 0) {
        return false;
    }
    return users.filter(u => u.address.zipcode[0] === '5').map(u => u.id);
}

const nameOfUsersWhoNamesStartWithLetter = (users, letter) => {
    return users.map(u => u.name).filter(u => u[0].toLowerCase() === letter.toLowerCase());
}

const doAllUsersLiveIn = (users, city) => {
    return users.every(u => u.address.city === city);
}

const companyOfUserWhoLivesAtSuite = (users, suite) => {
    return users.find(u => u.address.suite === suite).company.name;
}

const printEveryUsersBrief = (users) => {
    const userBrief = user => console.log(`${user.name} lives in ${user.address.city}, and owns the company ${user.company.name}`);
    return users.forEach(userBrief);
}

const users = fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        res.json()
            .then((users) => {
                /* Exercise 1 */
                console.log(userEmailAndCompany(users));

                /* Exercise 2 */
                console.log(usersWhoZipcodeStartingWithDigit(users, 5));

                /* Exercise 3*/
                console.log(userIdsWhoZipcodeStartingWithDigit(users, 5));

                /* Exercise 4*/
                console.log(nameOfUsersWhoNamesStartWithLetter(users, 'c'));

                /* Exercise 5*/
                const city = "South Christy"
                console.log(doAllUsersLiveIn(users, city) ? "Yes, all the users live in" : "No, not all the users live in", city);

                /* Exercise 6*/
                const suite = "Apt. 950";
                console.log(companyOfUserWhoLivesAtSuite(users, suite));

                /* Exercise 7*/
                printEveryUsersBrief(users);
            })
    })
    .catch((error) => {
        console.log("Failed to retrieve data\n" + error);
    })

