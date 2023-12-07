fetch("https://random-word-api.herokuapp.com/word").then(data => data.json()
    .then(word => {
        word = word[0];
        console.log(word);
        fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`).then(data => data.json()
            .then(volume => {
                const randomIndex = Math.floor(Math.random() * volume.items.length);
                console.log(volume.items[randomIndex]);
            }))
    })
)