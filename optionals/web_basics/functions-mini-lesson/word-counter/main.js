const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialCharsRegex = /[,.'"?!;]/

function removeSpecialCharacters(word) {
    word.replace(specialCharsRegex, "")
    return word;
}

function countWords(text) {
    wordCount = {};
    text.split(" ").forEach(word => {
        word = removeSpecialCharacters(word).toLowerCase();
        if(word) {
            if(!wordCount[word]) {
                wordCount[word] = 0;
            }
            ++wordCount[word];
        }
    });
    return wordCount;
}

console.log(countWords(story));

