const colors = ["red", "indigo", "white", "teal", "yellow"];
const foods = ["bread", "cheese", "cucumber"];
    
const jumble = function (arr1, arr2) {
    arr1 = [...arr1];
    arr2 = [...arr2];
    const jumbledArr = []
    while(arr1.length || arr2.length) {
        if(arr2.length) {
            jumbledArr.push(popRandomArrElement(arr2));
        }
        if(arr1.length) {
            jumbledArr.push(popRandomArrElement(arr1));
        }
    }
    return jumbledArr
}

function popRandomArrElement(arr) {
    const pos = getRandomValue(arr.length);
    const element = arr[pos];
    arr[pos] = arr[arr.length - 1];
    arr.splice(-1, 1);
    return element
}

function getRandomValue(maxVal) {
    return Math.floor(Math.random() * maxVal)
}

console.log(jumble(colors, foods));
// could return: ["cheese",teal","cucumber","red","bread","yellow","white","indigo"]