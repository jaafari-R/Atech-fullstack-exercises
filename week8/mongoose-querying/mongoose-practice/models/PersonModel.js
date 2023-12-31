const { Schema, model } = require("mongoose")

const personSchema = new Schema({
    hair: String,
    eyes: String,
    weight: Number,
    height: Number,
    salary: Number,
    numKids: Number,
    kids: Array
})

const Person = model('person', personSchema);
module.exports = Person;
