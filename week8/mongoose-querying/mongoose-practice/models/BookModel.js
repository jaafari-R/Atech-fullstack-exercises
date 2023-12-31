const { Schema, model } = require("mongoose")

const bookSchema = new Schema({
    title: String,
    author: String,
    pages: Number,
    genres: [String],
    rating: Number
})

const Book = model('book', bookSchema);
module.exports = Book;