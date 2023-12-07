fetch("https://random-word-api.herokuapp.com/word").then(data => data.json()
    .then(word => {
        word = word[0];
        console.log("Random Word:", word);
        
        const getRandomBookTitle = (volume) => {
            if(!volume.items)
                return "No Books Found :(";
            const randomIndex = Math.floor(Math.random() * volume.items.length);
            return volume.items[randomIndex].volumeInfo.title;
        }

        const getGifImageUrl = (gifData) => {
            if(!gifData)
                return "No Gif found :(";
            return gifData[0].images.original.url;
        } 

        const bookPromise = fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
        .then(data => data.json());

        const gifPromise = fetch(`https://api.giphy.com/v1/gifs/search?api_key=SZm3Ezv7v0hmUILQvH00XeUzUN4QRin9&q=${word}&limit=1&lang=en`)
        .then(data => data.json());

        Promise.all([bookPromise, gifPromise])
        .then((data) => {
            const bookData = data[0]; 
            const gifData =  data[1];

            const bookTitle = getRandomBookTitle(bookData);
            const gifImage = getGifImageUrl(gifData.data);

            $("body").append($(`<h1>${bookTitle}</h1>`));
            $("body").append($(`<img src=${gifImage} alt=${gifImage}/>`))
        })
    })
)