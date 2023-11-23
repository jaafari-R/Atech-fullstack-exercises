const NUM_OF_BOXES_IN_ROW = 1;
const NUM_OF_BOXES_IN_COLUMN = 2;
const NUM_OF_BOXES = NUM_OF_BOXES_IN_ROW * NUM_OF_BOXES_IN_COLUMN;
const GAP_BETWEEN_BOXES = 1; // %
// value is in % units
// const BOX_WIDTH = (100 - (NUM_OF_BOXES_IN_ROW / GAP_BETWEEN_BOXES)) / NUM_OF_BOXES_IN_ROW;
// const BOX_HEIGHT = (100 - (NUM_OF_BOXES_IN_COLUMN / GAP_BETWEEN_BOXES)) / NUM_OF_BOXES_IN_COLUMN;

const allBoxes = [];

const setupContainerRows= () => {
    const container = document.getElementById('container');
    container.style.gridTemplateColumns = `repeat(${NUM_OF_BOXES_IN_COLUMN}, 1fr)`;
}

const allBoxesHaveSameColor = () => {
    if(!allBoxes)
        return;
    const successMsg = document.getElementById("success-msg");
    successMsg.innerHTML = "";

    const commonColor = allBoxes[0].style.backgroundColor;
    for(let box of allBoxes) {
        if(commonColor !== box.style.backgroundColor)
            return;
    }
    successMsg.innerHTML = "Nice Job!";
    successMsg.style.color = "green";
}

const createBox = (id) => {
    const container = document.getElementById('container');
    
    const box = document.createElement('div');
    box.setAttribute("id", `box${id}`);
    const initColor = Math.floor(Math.random()*255*255*255).toString(16);
    box.style.backgroundColor = `#${initColor}`

    // Change the color of a box
    // then check if All boxes have the same color 
    box.onmouseover = () => {
        let r = Math.floor(Math.random() * 255).toString(16);
        let g = Math.floor(Math.random() * 255).toString(16);
        let b = Math.floor(Math.random() * 255).toString(16);
        if(r.length === 1)
            r = "0" + r;
        if(g.length === 1)
            g = "0" + g;
        if(b.length === 1)
            b = "0" + b;

        box.style.backgroundColor = `#${r}${g}${b}`;
        allBoxesHaveSameColor();
    }

    container.appendChild(box);
    allBoxes.push(box);
}


const main = () => {
    setupContainerRows();
    for(let i = 0; i < NUM_OF_BOXES; ++i) {
        createBox(i);
    }
}

main();