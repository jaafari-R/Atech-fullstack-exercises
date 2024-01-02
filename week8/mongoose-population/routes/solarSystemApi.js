const { Router } = require("express");
const PlanetModel = require("../model/planet");
const SolarSystemModel = require("../model/solarSystem");
const VisitorModel = require("../model/visitor");

const router = Router();

router.get("/", (req, res) => {
    SolarSystemModel.getAll()
    .then(solarSystems => {
        res.send(solarSystems);
    })
})

router.get("/allVisitors/:solarSystemId", (req, res) => {
    const solarSystemId = req.params.solarSystemId;
    SolarSystemModel.getAllVisitorsById(solarSystemId)
    .then(visitors => {
        res.send(visitors);
    })
})

router.get("/planets", (req, res) => {
    PlanetModel.getAll()
    .then(planets => {
        res.send(planets);
    })
})

router.get("/planet/:planetId/allVisitors/", (req, res) => {
    const planetId = req.params.planetId;
    PlanetModel.getAllVisitorsById(planetId)
    .then(visitors => {
        res.send(visitors);
    })
})

router.get("/planet/:planetId/starNameAndSolarSystemVisitors", (req, res) => {
    const planetId = req.params.planetId;
    PlanetModel.findSystemStarNameAndSystemVisitors(planetId)
    .then(starNameAndSystemVisitors => {
        res.send(starNameAndSystemVisitors);
    })
})

router.get("/visitors", (req, res) => {
    VisitorModel.getAll()
    .then(visitors => {
        res.send(visitors);
    })
})

router.get("/visitor/:visitorId/visitedPlanets", (req, res) => {
    const visitorId = req.params.visitorId;
    VisitorModel.getVisitedPlanetsById(visitorId)
    .then(visitedPlanets => {
        res.send(visitedPlanets);
    })
})

router.get("/visitor/:visitorId/starHome", (req, res) => {
    const visitorId = req.params.visitorId;
    VisitorModel.getStarNameForHomePlanetById(visitorId)
    .then(starName => {
        res.send(starName)
    })
})

module.exports = router;
