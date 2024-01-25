const { isEven, TypeError } = require("./code")

test("isEven Should return true if n is even, false otherwise"
, () => {
    const num1 = 0;
    const num2 = 241;
    const num3 = 1086;
    
    expect(isEven(num1)).toBe(true);
    expect(isEven(num2)).toBe(false);
    expect(isEven(num3)).toBe(true);
})

test("isEven Should throw an error if num is not a number"
, () => {
    const nullIsEvenTest = () => isEven(null);
    const undefinedIsEvenTest = () => isEven(undefined);
    const strIsEvenTest = () => isEven("str");
    const arrayIsEvenTest = () => isEven([]);
    const objectIsEvenTest = () => isEven({});

    expect(nullIsEvenTest).toThrow(TypeError);
    expect(undefinedIsEvenTest).toThrow(TypeError);
    expect(strIsEvenTest).toThrow(TypeError);
    expect(arrayIsEvenTest).toThrow(TypeError);
    expect(objectIsEvenTest).toThrow(TypeError);
})