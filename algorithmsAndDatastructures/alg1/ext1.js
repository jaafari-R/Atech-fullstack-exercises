function printInLoop(words) {
    let i = 0;
    let n = words.length;
    while(true) {
        console.log(words[i]);
        i = ++i % n;
    }
}

printInLoop(["down", "the", "rabbit", "hole"])
