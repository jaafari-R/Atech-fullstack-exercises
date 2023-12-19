class InvalidUserDataError extends Error {};

class UsernameAlreadyTakenError extends Error {};

class UserDoesNotExistError extends Error {};

module.exports = {
    InvalidUserDataError,
    UsernameAlreadyTakenError,
    UserDoesNotExistError
}