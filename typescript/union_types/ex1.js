// type StringOrArr = string | string[];
function concat(strings, print) {
    var concatination = "";
    if (typeof strings == "string") {
        concatination = strings;
    }
    else {
        concatination = strings.reduce(function (cc, str) { return cc + str + " "; }, "");
        concatination = concatination.slice(0, -1);
    }
    if (print) {
        console.log(concatination);
    }
    return concatination;
}
concat("abc", 0);
concat(["a", "b", "c"], true);
concat("abc", 1);
