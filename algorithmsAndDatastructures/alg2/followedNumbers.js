function followedNumbers(nums) {
    const followedNums = new Set();
    const sortedNums = nums.sort();
    for(let i = 1; i < sortedNums.length; ++i) {
        if(sortedNums[i] - sortedNums[i-1] === 1) {
            followedNums.add(sortedNums[i]);
            followedNums.add(sortedNums[i-1]);
        }
    }
    return [...followedNums];
}

console.log(followedNumbers([4,1,3,55, 88, 89,90]));