const MANIPULATE_LENGTH_MISMATCH_TEXT = "The arrays length don't match";

class ArrayManipulator {
    manipulate(arr1, arr2) {
        if(arr1.length != arr2.length) {
            return MANIPULATE_LENGTH_MISMATCH_TEXT;
        }

        const obj = {};
        for(let i in arr1) {
            obj[arr1[i]] = arr2[i];
        }
        return obj;
    }
}

module.exports = {
    MANIPULATE_LENGTH_MISMATCH_TEXT,
    ArrayManipulator
};
