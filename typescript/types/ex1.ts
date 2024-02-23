// Ex1
function sum(nums: number[]) : number {
    return nums.reduce((sum, num) => sum + num, 0);
}

function isEven(num: number) : boolean {
    return num % 2 === 0;
}

const sum1: number = sum([1,2,3,4,5,6]);
const sum3: number = sum([1000, -1000, 50]);
const sum2: number = sum([]);

console.log(sum1, isEven(sum1));
console.log(sum2, isEven(sum2));
console.log(sum3, isEven(sum3));
