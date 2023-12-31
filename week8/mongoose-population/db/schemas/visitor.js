const { Schema, model } = require("mongoose");

const visitorSchema = new Schema({
    name: String,
    homePlanet: {type: Schema.Types.ObjectId, ref: "Planet"},
    visitedPlanets: [{type: Schema.Types.ObjectId, ref: "Planet"}]
})

const Visitor = model("Visitor", visitorSchema);
module.exports = Visitor;
