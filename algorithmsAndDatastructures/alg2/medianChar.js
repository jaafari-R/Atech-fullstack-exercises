function medianChar(str) {
    // letters = str.split("").sort();
    letters = [...new Set(str.split(""))].sort(); // no repitition
    return letters[Math.floor((letters.length - 1) / 2)]
}

console.log(medianChar("questionnn"));