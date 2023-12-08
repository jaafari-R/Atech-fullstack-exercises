function showGif() {
    const search = $("input").val();
    if(!search)
        return;

    $.get(`https://api.giphy.com/v1/gifs/search?api_key=SZm3Ezv7v0hmUILQvH00XeUzUN4QRin9&q=${search}&limit=30&rating=g`)
    .then(data => {
        if(data.data) {
            const randomGifIndex = Math.floor(Math.random() * data.data.length);
            const gifUrl = data.data[randomGifIndex].images.original.url;
            $("img").attr("src", gifUrl);
        }
        // const gifWebsiteUrl = data.data ? data.data[0].url : "";
        // $("iframe").attr("src", gifWebsiteUrl);
    })
}

