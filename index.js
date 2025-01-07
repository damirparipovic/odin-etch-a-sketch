function createGrid(rows, cols) {
    const gridContainer = document.querySelector(".grid_container");

    gridContainer.innerHTML = '';

    const containerWidth = gridContainer.clientWidth;
    const containerHeight = gridContainer.clientHeight;

    const boxWidth = Math.floor(containerWidth / cols);
    const boxHeight = Math.floor(containerHeight / rows);

    // create rows * cols boxes
    for (let bid = 0; bid < (rows * cols); bid++) {

        let newBox = document.createElement('div');
        newBox.classList.add('box-item')
        newBox.style.height = `${boxHeight}px`;
        newBox.style.width = `${boxWidth}px`;
        newBox.addEventListener('mouseover', (event) => {
            let target = event.target;
            target.style.backgroundColor = 'pink';
        })
        newBox.id = bid;

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
