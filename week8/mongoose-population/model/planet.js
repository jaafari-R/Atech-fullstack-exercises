require("../db/schemas/visitor")
const Planet = require("../db/schemas/planet");
const SolarSystemModel = require("./solarSystem")

class PlanetModel {
    static getAll() {
        return Planet.find()
        .then(planets => {
            return planets;
        })
    }

    static getAllVisitorsById(_id) {
        return Planet.findById(_id)
        .populate("visitors")
        .exec()
        .then(planet => planet.visitors);
    }

    static async findSystemStarNameAndSystemVisitors(_id) {
        return Planet.findById(_id)
        .populate({
            path: "system",
            populate: {
                path: "planets",
                populate: {
                    path: "visitors"
                }
            }
        })
        .exec()
        .then(planet => {
            return SolarSystemModel.getAllVisitorsById(planet.system._id)
            .then(visitors => {
                return {
                    sunName: planet.system.starName,
                    visitors
                };
            })
        });
    }
}

module.exports = PlanetModel;