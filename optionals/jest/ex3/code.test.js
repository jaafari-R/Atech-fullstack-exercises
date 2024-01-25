const { simplify } = require("./")

test(`should return a clean string without these symbols: "!", "#", ".", ",", "'"`
, () => {
    const str1 = "abc";
    const str2 = "'abc'`!def`#";
    const str3 = "!!!!########w````'''\"";
    const str4 = "";

    expect(simplify(str1)).toMatch("abc");
    expect(simplify(str2)).toMatch("abc`def");
    expect(simplify(str3)).toMatch("w````");
    expect(simplify(str4)).toMatch("");
})