const SolarSystem = require("../db/schemas/solarSystem");
const { getNonDuplicatesByKey } = require("../utils/helpers");

class SolarSystemModel {
    static getAll() {
        return SolarSystem.find()
        .then(solarSystems => {
            return solarSystems;
        })
    }

    static getAllVisitorsById(_id) {
        return SolarSystem.findById(_id).
        populate({
            path: "planets",
            populate: {
                path: "visitors"
            }
        })
        .exec()
        .then(solarSystem => {
            const visitors = [];
            solarSystem.planets.forEach(p => {
                visitors.push(
                    ...getNonDuplicatesByKey(visitors, p.visitors, '_id')
                );
            });
            return visitors;
        })
    }
}

module.exports = SolarSystemModel;