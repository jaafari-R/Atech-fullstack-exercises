function longestSubstringWithNoRepeatingCharacters(str) {
    const exist = {};
    let longest = -1;
    let left = 0;
    let right = 0;
    for(; right < str.length; ++right) {
        if(exist[str[right]]) {
            while(str[left] != str[right]) {
                exist[str[left]] = false;
                ++left;
            }
            ++left;
        }
        else {
            exist[str[right]] = true;
        }
        longest = Math.max(longest, 1 + right - left);
    }
    return longest;
}

console.log(longestSubstringWithNoRepeatingCharacters("communication"));
console.log(longestSubstringWithNoRepeatingCharacters("aaaaaabcdefghhhq"));
