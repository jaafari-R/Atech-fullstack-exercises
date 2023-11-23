const StringFormatter = function() {
    return {
        capitalizeFirst: (str) => str[0].toUpperCase() + str.slice(1).toLowerCase(),
        toSkewerCase: (str) => str.replace(' ', '-')
    };
}

const formatter = StringFormatter();

const dorthy = formatter.capitalizeFirst("dorothy") //should return Dorothy
const blueBox = formatter.toSkewerCase("blue box") //should return blue-box

console.log(dorthy);
console.log(blueBox);
