const container = document.querySelector('.container');

let gridSize = 4;

function initializeGrid() {
    container.innerHTML = '';
    for (let i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
    }
    
    const divs = document.querySelectorAll('.container div');
    divs.forEach(div => {
        const divPercentage = (100 / gridSize).toFixed(4);
        div.style.width = `${divPercentage}%`;
        div.style.height = `${divPercentage}%`;
        div.addEventListener('mouseover', changeDivColor);
    });
}

initializeGrid();

function changeDivColor(event) {
    event.target.style.backgroundColor = '#787affff';
}

const editButton = document.getElementById('edit'); 
editButton.addEventListener('click', () => createNewGrid());

function createNewGrid() {
    gridSize = parseInt(prompt('Enter the number of squares (1-100) per side for the new grid (e.g., 5 for 5x5):', gridSize));
    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }
    initializeGrid();
}