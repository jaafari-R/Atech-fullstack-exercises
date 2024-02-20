function wordWithHighestScore(words) {
    words = words.split(" ");
    let highestScore = 0;
    let highestScoreWordIndex = -1;
    for(let i = 0; i < words.length; ++i) {
        const wordScore = getScore(words[i]);
        if(wordScore > highestScore) {
            highestScore = wordScore;
            highestScoreWordIndex = i;
        }
    }
    return words[highestScoreWordIndex];
}

function getScore(word) {
    let score = 0;
    for(const letter of word) {
        score += letter.charCodeAt(0) - 97;
    }
    return score;
}

console.log(wordWithHighestScore("if you are a winner zzz"));
