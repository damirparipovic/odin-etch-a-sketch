function getRandomColour() {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function createBox(boxId, boxWidth, boxHeight) {
    let newBox = document.createElement('div');
    newBox.classList.add('box-item')
    newBox.style.height = `${boxHeight}px`;
    newBox.style.width = `${boxWidth}px`;
    newBox.style.backgroundColor = 'white';
    newBox.style.opacity = 1;
    newBox.addEventListener('mouseover', (event) => {
        let target = event.target;
        // check for current color
        // if has a color, make it darker
        // if not color, get random color and make it a certain darkness
        if (target.style.backgroundColor === 'white') {
            target.style.backgroundColor = getRandomColour();
        } else {
            target.style.opacity -= 0.1;
        }
    })
    newBox.id = boxId;

    return newBox;
}

function createGrid(rows, cols) {
    const gridContainer = document.querySelector(".grid_container");

    // clear old container of items
    gridContainer.innerHTML = '';

    const containerWidth = gridContainer.clientWidth;
    const containerHeight = gridContainer.clientHeight;

    const boxWidth = Math.floor(containerWidth / cols);
    const boxHeight = Math.floor(containerHeight / rows);

    // create rows * cols boxes
    for (let bid = 0; bid < (rows * cols); bid++) {

        let newBox = createBox(bid, boxWidth, boxHeight);

        gridContainer.appendChild(newBox);
    }
}

function resetGrid() {
    let rows = document.querySelector("input").value;
    let cols = rows;

    createGrid(rows, cols);
}

function setup() {
    let resetButton = document.querySelector(".reset_button");
    resetButton.addEventListener('click', resetGrid);

    resetGrid();
}

setup();
