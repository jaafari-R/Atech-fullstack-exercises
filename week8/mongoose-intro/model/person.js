const Person = require("../db/person");

class PersonModel {
    static getAll() {
        return Person.find({});
    }

    static createPerson({firstName, lastName, age}) {
        Person.create({firstName, lastName, age});
    };

    static setAgeById(id, newAge) {
        console.log(id, newAge)
        Person.findByIdAndUpdate(id, {age: newAge})
        .then();
    }

    static deleteAll() {
        Person.deleteMany({})
        .then();
    }
}

module.exports = { 
    PersonModel
}