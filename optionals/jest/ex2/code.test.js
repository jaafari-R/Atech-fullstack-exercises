const { removeAtLeastOne, EMPTY_ARRAY_TEXT } = require("./code");

test("removeAtLeastOne should return a text if the array is empty"
, () => {
    const arr = [];
    expect(removeAtLeastOne(arr)).toMatch(EMPTY_ARRAY_TEXT);
})

test("removeAtLeastOne should remove at least one element from the array `arr`"
, () => {
    const arr1 = [1,2,3,4];
    const arr2 = [1];

    const arr1Length = arr1.length;
    const arr2Length = arr2.length;

    const resArr1 = removeAtLeastOne(arr1);
    const resArr2 = removeAtLeastOne(arr2);

    expect(resArr1.length).toBeLessThan(arr1Length);
    expect(resArr2.length).toBeLessThan(arr2Length);
});