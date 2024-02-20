const rawDist = {
    A: 60,
    B: 10,
    C: 10,
    D: 20
}

function getRandomLetter(dictRatio) {
    const values = Object.keys(dictRatio);
    var total = values.reduce((accumulator, value) => {
        return accumulator + dictRatio[value];
    },0);
    const random = getRandomValue(total);
    let sum = 0;
    for(const value of values) {
        sum += dictRatio[value];
        if(sum >= random)
            return value;
    }
    return null;
}

function getRandomValue(maxVal) {
    return Math.floor(Math.random() * maxVal)
}

let str = ""
for(let i = 0; i < 20; ++i) {
    str += getRandomLetter(rawDist);
}

console.log(str.split("").sort().join(""));
