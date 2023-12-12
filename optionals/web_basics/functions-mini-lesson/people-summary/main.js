people_info = [
    {
        name: "guido",
        profession: "bungalow builder",
        age: 17,
        country: "canaland",
        city: "sydurn",
        catchphrase: "what a piece of wood!"
    },
    {
        name: "petra",
        profession: "jet plane mechanic",
        age: 31,
        country: "greenmark",
        city: "bostork",
        catchphrase: "that's my engine, bub"
    },
    {
        name: "damian",
        profession: "nursery assistant",
        age: 72,
        country: "zimbia",
        city: "bekyo",
        catchphrase: "with great responsibility comes great power"
    }
]

const capitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1);
}

const peopleSummary = (person) => {
    const ageStatus = person.age < 21 ? "Underage" : (person.age > 55 ? "55+" : person.age)
    console.log(`${capitalize(person.name)} is ${ageStatus} from ${capitalize(person.city)}, ${capitalize(person.country)}, catch phrase: "${person.catchphrase}"`)
}

peopleSummary(people_info[0]);
peopleSummary(people_info[1]);
peopleSummary(people_info[2]);

