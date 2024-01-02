const mongoose = require("mongoose");

const DB_URL = "mongodb://127.0.0.1/solar-system";

function connectMongo() {
    return mongoose.connect(DB_URL);
}

module.exports = {
    connectMongo
};