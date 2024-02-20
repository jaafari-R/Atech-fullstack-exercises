const reverse = function(str){
    const strArr = str.split("");
    for(let left = 0, right = strArr.length - 1; left < right; ++left, --right) {
        const temp = strArr[left];
        strArr[left] = strArr[right];
        strArr[right] = temp;
    }
    let reversed = strArr.join("");
    return reversed
}
      
console.log(reverse("dog")) //should return "god"
console.log(reverse("race car")) //should return "rac ecar"