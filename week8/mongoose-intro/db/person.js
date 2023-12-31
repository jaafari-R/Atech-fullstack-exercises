const { Schema, model } = require("mongoose");

// Schema/model setup
const personSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: String,
    age: Number
})

const Person = model("person", personSchema)
module.exports = Person;