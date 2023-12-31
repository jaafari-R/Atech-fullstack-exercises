const { Router } = require("express");
const wordCounter = require("../server/words-counter");

const router = Router();

// sanity | ping
router.get("/sanity", (req, res) => {
    res.send("Server is up and running")
});

// serve a word count
router.get("/word/:word", (req, res) => {
    const word = req.params.word;
    res.send(wordCounter.getWordCount(word));
});

// receive a word
router.post("/word", (req, res) => {
    const word = req.body.word;
    if(word) {
        res.send({
            success: true,
            text: `Added ${word}`,
            wordCounter: wordCounter.addWord(word)
        });
    }
    else {
        res.status(400);
        res.send({
            success: false,
            text: "Didn't receive a word :("
        });
    }
})

// receive a sentence
router.post("/sentence/", (req, res) => {
    const sentence = req.body.sentence;
    if(sentence) {
        const {newWordsCount, oldWordsCount} = wordCounter.addSentence(sentence);
        res.send({
            success: true,
            text: `Added ${newWordsCount} words, ${oldWordsCount} already existed`,
            currentCount: -1
        })
    }
    else {
        res.status(400);
        res.send({
            success: false,
            text: "Didn't receive a sentence :("
        });
    }
})

// delete a word
router.delete("/word/", (req, res) => {
    const word = req.body.word;
    if(word) {
        if(wordCounter.deleteWord(word)){
            res.send({
                success: true
            });
        }
        else {
            res.status(404);
            res.send({
                success: false,
                text: "Word wasn't found in the dictionary :/"
            });
        }
    }
    else {
        res.status(400);
        res.send({
            success: false,
            text: "Didn't receive a word :("
        });  
    }
});

router.get("/popular-word/", (req, res) => {
    const [ mostPopularWord ] = wordCounter.mostPopularWords(1);
    if(mostPopularWord) {
        res.send({text: mostPopularWord.word, count: mostPopularWord.count });
    }
    // TODO add error
    else {
        res.send({text: "N/A", count: 0});
    }
});

// gets the most popular 'count' words 
router.get("/popular-word/:count", (req, res) => {
    const count = Number.parseInt(req.params.count);
    const mostPopularWords = wordCounter.mostPopularWords(count)
        .map(word => {
            const wordObj = {};
            wordObj[word.word] = word.count;
            return wordObj;
        });
    res.send({ranking: mostPopularWords});
});

router.get("/total-words-count", (req, res) => {
    res.send({
        text: "Total count",
        count: wordCounter.totalWordsCount()});
})

module.exports = router;
