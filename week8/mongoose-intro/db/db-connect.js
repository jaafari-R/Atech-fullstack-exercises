const mongoose = require('mongoose')

function dbConnect() {
    return mongoose.connect("mongodb://127.0.0.1:27017/peopleDB")
    .catch(err => {
        console.log("Failed to connect to DB");
        console.log(err);
    })
}

module.exports = {
    dbConnect
}