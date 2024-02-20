function duplicateArr(arr) {
    const dupArr = [...arr];
    let end = arr.length;
    for(let i = 0; i < end; ++i) {
        dupArr.push(arr[i]);
    }
    return dupArr;
}

console.log(duplicateArr([1,2,3]));
console.log(duplicateArr([4]));
console.log(duplicateArr(["A", "B"]));
