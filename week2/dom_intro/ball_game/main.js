const MOVE_AMMOUNT = 25;
const MOVE_UNIT = "px";
const INIT_EDGES = {
    left: 0,
    top: 0
};
// Each move has a corrosponding element with it's id matching a key.
const MOVES = {
    'right': {
        edge: "left",
        modifier: 1
    },
    'left': {
        edge: "left",
        modifier: -1
    },
    'up': {
        edge: "top",
        modifier: -1
    },
    'down': {
        edge: "top",
        modifier: 1
    }
};

const ball = document.getElementById('ball');
ball.style.backgroundColor = 'yellow';

const moveBall = (move) => {
    const currPos = parseInt(ball.style[move.edge]) || INIT_EDGES[move.edge];
    ball.style[move.edge] = `${currPos + MOVE_AMMOUNT * move.modifier}${MOVE_UNIT}`;
}

for(let key of Object.keys(MOVES)) {
    document.getElementById(key).addEventListener("click", () => moveBall(MOVES[key]));
}

window.addEventListener("keydown", (event) => {
    switch(event.key) {
        case "ArrowLeft":
            moveBall(MOVES.left);
            break;
        case "ArrowRight":
            moveBall(MOVES.right);
            break;
        case "ArrowUp":
            moveBall(MOVES.up);
            break;
        case "ArrowDown":
            moveBall(MOVES.down);
            break;
    }
});


const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
header.setAttribute("class", "my-header")
document.body.appendChild(header)

const creatorHeader = document.createElement("h2");
creatorHeader.innerHTML = "Created by Ramadan Jaafari";
creatorHeader.setAttribute("class", "creator-header")
document.body.append(creatorHeader);


