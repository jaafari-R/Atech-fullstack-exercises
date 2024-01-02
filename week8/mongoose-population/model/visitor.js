require("../db/schemas/planet");
const Visitor = require("../db/schemas/visitor");

class VisitorModel {
    static getAll() {
        return Visitor.find()
        .then(planets => {
            return planets;
        })
    }

    static getVisitedPlanetsById(_id) {
        return Visitor.findById(_id)
        .populate("visitedPlanets")
        .exec()
        .then(visitor => {
            return visitor.visitedPlanets;
        })
    }

    // TODO
    // find the name of the star in the system of a visitor's home planet
    static getStarNameForHomePlanetById(_id) {
        return Visitor.findById(_id)
        .populate({
            path: "homePlanet",
            populate: {
                path: "system"
            }
        })
        .exec()
        .then(visitor => {
            return visitor.homePlanet.system.starName;
        });
    }
}

module.exports = VisitorModel;