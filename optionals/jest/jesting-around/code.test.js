const { ArrayManipulator, MANIPULATE_LENGTH_MISMATCH_TEXT} = require("./code");
const arrManip = new ArrayManipulator();

test("ArrayManipulator.manipulate should return error text on length mismatch"
, () => {
    const arr1 = ["food", "item"];
    const arr2 = ["cherry"];

    const result1 = arrManip.manipulate(arr1, arr2);

    expect(result1).toMatch(MANIPULATE_LENGTH_MISMATCH_TEXT);
});


test("ArrayManipulator.manipulate should return an object with keys from the first array and values from the second array"
, () => {
    const empty1 = [];
    const empty2 = [];
    const emptyObj = {};

    const titles = ["food", "item", "location"];
    const items = ["cherry", "lightbulb", "Tazmania"];
    
    const titleToItem = {
        food: "cherry",
        item: "lightbulb",
        location: "Tazmania"
    };

    const result1 = arrManip.manipulate(titles, items);
    const result2 = arrManip.manipulate(empty1, empty2);

    expect(result1).toEqual(titleToItem);
    expect(result2).toEqual(emptyObj);
});