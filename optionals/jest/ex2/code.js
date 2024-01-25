const EMPTY_ARRAY_TEXT = "The passed array is empty :/";

function removeAtLeastOne(arr) {
    if(arr.length === 0) {
        return EMPTY_ARRAY_TEXT;
    }

    let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1;
    arr.splice(0, numItemsToRemove);
    return arr;
}

module.exports = {
    EMPTY_ARRAY_TEXT,
    removeAtLeastOne
}