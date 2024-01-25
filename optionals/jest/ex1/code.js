class TypeError extends Error {}

function isEven(num) {
    if(typeof num !== "number") {
        throw new TypeError();
    }

    return num % 2 == 0 ? true : false
}

module.exports = {
    TypeError,
    isEven
}