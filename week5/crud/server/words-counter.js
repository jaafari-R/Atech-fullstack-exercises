class WordCounter {
    constructor() {
        this.totalCount = 0;
        this.wordsCount = {};
        this.ignoreRegex = /[^a-z]+/ig;
    }

    getWordCount(word) {
        if(this.wordsCount[word]) {
            return {count: this.wordsCount[word]};
        }
        return {count: 0};
    }

    addWord(word, notmalize = true) {
        if(notmalize) {
            word = this.normalizeWord(word);
        }

        if(!word) {
            return 0;
        }

        if(this.wordsCount[word]) {
            ++this.wordsCount[word];
        }
        else {
            this.wordsCount[word] = 1;
        }
        ++this.totalCount;
        return this.wordsCount[word];
    }

    addSentence(sentence) {
        const newWords = new Set();
        const oldWords = new Set();
        const words = sentence.split(' ');
        words.forEach(word => {
            word = this.normalizeWord(word);
            if(!word) {
                return;
            }
            else if(this.addWord(word, false) == 1) {
                newWords.add(word);
            }
            else if(!newWords.has(word)) {
                oldWords.add(word);
            }
        })
        return {newWordsCount: newWords.size, oldWordsCount: oldWords.size};
    }

    // return false if the word is not recorded in the dictionary
    deleteWord(word) {
        if(this.wordsCount[word]) {
            this.totalCount -= this.wordsCount[word];
            delete this.wordsCount[word];
            return true;
        }
        return false;
    }

    mostPopularWord() {
        let currMax = 0;
        let popularWord = "";        
        Object.keys(this.wordsCount).forEach(word => {
            if(this.wordsCount[word] > currMax) {
                currMax = this.wordsCount[word];
                popularWord = word;
            }
        });
        return {
            text: popularWord,
            count: currMax
        };
    }

    totalWordsCount() {
        return this.totalCount;
    }

    normalizeWord(word) {
        return word.replace(this.ignoreRegex, '').toLowerCase();
    }
}

module.exports = new WordCounter();