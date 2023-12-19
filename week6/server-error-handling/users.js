const userErrors = require("./usersErrors");

const initUsers = [
    { username: "bonz", name: "Bony", country: "Nepal", age: 21 },
    { username: "marv", name: "Marvin", country: "Arizona", age: 33 },
    { username: "luc", name: "Lucil", country: "Singapore", age: 47 },
    { username: "marc", name: "Marco", country: "Greece", age: 63 },
    { username: "kev", name: "Kevin", country: "Italy", age: 31 }
]

class User {
    constructor(username, name, country, age) {
        this.username = username;
        this.name = name;
        this.country = country;
        this.age = age;
    }
}

class UsersModel {
    constructor(users) {
        this.users = users || [];
    }

    getUsers() {
        return this.users;
    }

    getUserByUsername(username) {
        this._validateUsername(username);
        const userIndex = this.users.findIndex(user => user.username === username);
        if(userIndex === -1) {
            throw new userErrors.UserDoesNotExistError();
        }
        return this.users[userIndex];
    }

    addUser(username, name, country, age) {
        this._validateUserData(username, name, country, age);
        const newUser = new User(username, name, country, age);
        this.users.push(newUser);
        return newUser;
    }

    deleteUser(username) {
        this._validateUsername(username);
        const userIndex = this.users.findIndex(user => user.username === username);
        if(userIndex === -1) {
            throw new userErrors.UserDoesNotExistError();
        }
        this.users.splice(userIndex, 1);
    }

    /* ---- Validators ---- */
    _validateUsername(username) {
        if(!username)
            throw new userErrors.InvalidUserDataError();
    }

    _validateUserData(username, name, country, age) {
        if(!username || !name || !country || !age) {
            throw new userErrors.InvalidUserDataError();
        }
        if(this._userExists(username)) {
            throw new userErrors.UsernameAlreadyTakenError();
        }
    }

    _userExists(username) {
        return this.users.some(user => user.username === username);
    }
}

module.exports = new UsersModel(initUsers);