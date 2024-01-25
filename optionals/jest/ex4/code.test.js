const { validate } = require("./code");

test("validate returns error if there are no booleans in the passed array"
, () => {
    const arr = ["a", 1, 2, {a:4}, [8, 6, 9, 7]];    
    expect(validate(arr)).toEqual({error: "Need at least one boolean"});
})

test("validate returns true if there are more trues than falses in the array"
, () => {
    const arr1 = ["a", "b", true];
    const arr2 = [1, "w", true, true, false, true, false, {a: "a", b: "b"}];

    expect(validate(arr1)).toBe(true);
    expect(validate(arr2)).toBe(true);
})

test("validate returns false if there are less or equal trues than falses in the array"
, () => {
    const arr1 = [false, 1, 2, 3];
    const arr2 = [[true, true, 4], false, true];

    expect(validate(arr1)).toBe(false);
    expect(validate(arr2)).toBe(false);
})

