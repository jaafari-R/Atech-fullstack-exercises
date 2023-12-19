const { Router } = require("express");
const usersModel = require("./users");
const userErrors = require("./usersErrors");

const router = Router();

router.get("/users", (req, res) => {
    try {
        const users = usersModel.getUsers();
        if(users.length)
            res.send({success: true, users});
        else
            res.status(404).send({succeess: false, msg: "No users found :("});
    }
    catch(error) {
        res.status(500).send({succeess: false, msg: "An error occured while trying to retrieve the users :("})        
        console.log("GET /users ERROR\n" + error);
    }
});

router.get("/user/:username", (req, res) => {
    const { username } = req.params;
    try {
        const user = usersModel.getUserByUsername(username);
        res.send(user);
    }
    catch(error) {
        if(error instanceof userErrors.UserDoesNotExistError) {
            res.status(404).send({
                succeess: false, msg: "User not found"
            });
        }
        else if(error instanceof userErrors.InvalidUserDataError) {
            res.status(400).send({
                success: false, msg: "Didn't receive a username"
            });
        }
        else {
            res.status(500).send({
                success: false, msg: "An error occured while trying to delete the user"
            });
            console.log("GET /user/:username ERROR!");
            console.log(error);
        }
    }
})

router.post("/user", (req, res) => {
    const {username, name, country, age} = req.body;
    try {
        const newUser = usersModel.addUser(username, name, country, age);
        res.status(201).send({success: true, newUser});
    }
    catch(error) {
        if(error instanceof userErrors.InvalidUserDataError) {
            res.status(400).send({
                succeess: false, msg: "Some user data is missing."
            });
        }
        else if(error instanceof userErrors.UsernameAlreadyTakenError) {
            res.status(409).send({
                succeess: false, msg: "A user with this username already exists."
            });
        }
        else {
            res.status(500).send({
                succeess: false, msg: "An error occured while trying to create the user :("
            });
            console.log("POST /user ERROR!\nReq_body:", req.body);
            console.log(error);
        }
    }
});

router.delete("/user", (req, res) => {
    const { username } = req.body;
    try {
        usersModel.deleteUser(username)
        res.sendStatus(204);
    }
    catch(error) {
        if(error instanceof userErrors.UserDoesNotExistError) {
            res.status(404).send({
                succeess: false, msg: "Delete - User not found"
            });
        }
        else if(error instanceof userErrors.InvalidUserDataError) {
            res.status(400).send({
                success: false, msg: "Didn't receive a username"
            });
        }
        else {
            res.status(500).send({
                success: false, msg: "An error occured while trying to delete the user"
            });
            console.log("DELETE /user ERROR!\nReq body:", req.body);
            console.log(error);
        }
    }
})

module.exports = router;