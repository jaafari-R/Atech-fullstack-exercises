const NUM_OF_BOXES_IN_ROW = 8;
const NUM_OF_BOXES_IN_COLUMN = 4;
const NUM_OF_BOXES = NUM_OF_BOXES_IN_ROW * NUM_OF_BOXES_IN_COLUMN;
const GAP_BETWEEN_BOXES = 1; // %
// value is in % units
// const BOX_WIDTH = (100 - (NUM_OF_BOXES_IN_ROW / GAP_BETWEEN_BOXES)) / NUM_OF_BOXES_IN_ROW;
// const BOX_HEIGHT = (100 - (NUM_OF_BOXES_IN_COLUMN / GAP_BETWEEN_BOXES)) / NUM_OF_BOXES_IN_COLUMN;

const setupContainerRows= () => {
    const container = document.getElementById('container');
    container.style.gridTemplateColumns = `repeat(${NUM_OF_BOXES_IN_COLUMN}, 1fr)`;
}

const createBox = (id) => {
    const container = document.getElementById('container');
    
    const box = document.createElement('div');
    box.setAttribute("id", `box${id}`);
    const initColor = Math.floor(Math.random()*255*255*255).toString(16);
    box.style.backgroundColor = `#${initColor}`
    box.onmouseover = () => {
        const randomColor = Math.floor(Math.random()*255*255*255).toString(16);
        box.style.backgroundColor = `#${randomColor}`;
    }

    container.appendChild(box);
}

const main = () => {
    setupContainerRows();
    for(let i = 0; i < NUM_OF_BOXES; ++i) {
        createBox(i);
    }
}

main();