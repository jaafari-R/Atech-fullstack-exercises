const NUM_OF_BOXES = 2;
const BOX_WIDTH = 150;
const BOX_HEIGHT = 150;
const DEFAULT_BOX_COLOR = "#bb00ff";
const NONE_HOVER_BOX_COLOR = "red";

const boxes = [];

for(let i = 0; i < NUM_OF_BOXES; ++i) {
    const box = $("<div class='box'></div>")
    box.css({
        'width': BOX_WIDTH + "px",
        'height': BOX_HEIGHT + "px",
        'backgroundColor': DEFAULT_BOX_COLOR
    })
    boxes.push(box);
    $("body").append(box);
}

$(".box").hover(function() {
    for(let box of boxes) {
        box[0].style.backgroundColor = NONE_HOVER_BOX_COLOR;
        this.style.backgroundColor = DEFAULT_BOX_COLOR;
    }
})