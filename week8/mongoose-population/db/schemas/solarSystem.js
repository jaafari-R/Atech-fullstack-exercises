const { Schema, model } = require("mongoose");

const solarSystemSchema = new Schema({
    planets: [{type: Schema.Types.ObjectId, ref: "Planet"}],
    starName: String
})

const SolarSystem = model("solarSystem", solarSystemSchema);
module.exports = SolarSystem;