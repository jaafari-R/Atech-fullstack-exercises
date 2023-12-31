const { Router } = require("express");
const { PersonModel } = require("../model/person");

const router = Router();

router.get('/', function(req, res) {
    PersonModel.getAll()
    .then(people => res.send(people));
})

router.post('/person', function(req, res) {
    const person = req.body;
    PersonModel.createPerson(person);
    res.sendStatus(201);
})

router.patch('/person/age80/:id', function(req, res) {
    const { id } = req.params;
    PersonModel.setAgeById(id, 80);
    res.sendStatus(204);
})

router.delete('/apocalypse', (req, res) => {
    PersonModel.deleteAll();
    res.sendStatus(204);
})

module.exports = router;