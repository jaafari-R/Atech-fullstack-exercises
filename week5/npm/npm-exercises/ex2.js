const { faker } = require('@faker-js/faker');

function makeHuman(num) {
    const humans = [];
    for(let i = 0; i < num; ++i) {
        humans.push({
            username: faker.name.firstName() + " " + faker.name.lastName(),
            avatar: faker.image.avatar(),
            company: faker.company.name()
        })
    }
    return humans;
}

console.log(makeHuman(5));