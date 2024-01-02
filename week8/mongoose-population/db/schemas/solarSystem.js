const { Schema, model } = require("mongoose");

const solarSystemSchema = new Schema({
    name: String,
    planets: [{type: Schema.Types.ObjectId, ref: "Planet"}],
    starName: String
})

const SolarSystem = model("SolarSystem", solarSystemSchema);
module.exports = SolarSystem;