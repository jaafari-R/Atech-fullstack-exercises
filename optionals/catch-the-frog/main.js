const renderer = new Renderer();

const startGameButton = $("#start-game")

startGameButton.click(function() {
    console.log("HI")
    renderer.renderFrog();
})

