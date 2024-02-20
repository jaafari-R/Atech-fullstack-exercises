function secondBiggest(arr) {
    if(arr.length < 2)
        return null;
    let biggest = Number.MIN_VALUE + 1;
    let secondBiggest = Number.MIN_VALUE;
    for(const num of arr) {
        if(num > biggest) {
            secondBiggest = biggest;
            biggest = num;
        }
        else if(num > secondBiggest) {
            secondBiggest = num;
        }
    }
    return secondBiggest;
}

console.log(secondBiggest([12,13,3,4,7,23]))