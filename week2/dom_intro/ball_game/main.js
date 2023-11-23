const MOVE_AMMOUNT = 25;

const ball = document.getElementById('ball');
ball.style.backgroundColor = 'yellow';

const moveBallLeft = () => {
    const leftVal = parseInt(ball.style.left) | 0;
    const newLeftVal = (leftVal - MOVE_AMMOUNT) + "px";
    ball.style.left = newLeftVal;
}

const moveBallRight = () => {
    const leftVal = parseInt(ball.style.left) | 0;
    const newLeftVal = (leftVal + MOVE_AMMOUNT) + "px";
    ball.style.left = newLeftVal;
}

const moveBallUp = () => {
    const topVal = parseInt(ball.style.top) | 0;
    const newLeftVal = (topVal - MOVE_AMMOUNT) + "px";
    ball.style.top = newLeftVal;
}

const moveBallDown = () => {
    const topVal = parseInt(ball.style.top) | 0;
    const newLeftVal = (topVal + MOVE_AMMOUNT) + "px";
    ball.style.top = newLeftVal;
}


const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever2"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
header.setAttribute("class", "my-header")
document.body.appendChild(header)

const creator = document.createElement("h2");
creator.innerHTML = "Created by Ramadan Jaafari";
creator.setAttribute("class", "creator-header")
document.body.append(creator);


