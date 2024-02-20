function reverseOnlyNumbers(arr) {
    const numPositions = [];
    const arrWithReversedNumbers = [...arr];
    for(let i = 0; i < arr.length; ++i) {
        if(typeof arr[i] === "number")
            numPositions.push(i);
    }
    for(let left = 0, right = numPositions.length - 1; left < right; ++left, --right) {
        const temp = arrWithReversedNumbers[numPositions[right]];
        arrWithReversedNumbers[numPositions[right]] = arrWithReversedNumbers[numPositions[left]];
        arrWithReversedNumbers[numPositions[left]] = temp;
    }
    return arrWithReversedNumbers;
}

console.log(reverseOnlyNumbers([1,"w","e",2,"r",7,8]))