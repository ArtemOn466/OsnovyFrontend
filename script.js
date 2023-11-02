const table = document.getElementById("color-table");
const cells = table.getElementsByTagName("td");
const diagonalCells = [];

// Populate diagonalCells array with cells on the main diagonal
for (let i = 0; i < cells.length; i += 7) {
    diagonalCells.push(cells[i]);
}

// Function to generate a random color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Add event listeners to each cell
for (let i = 0; i < cells.length; i++) {
    // Handle hover for cell 23
    if (i === 22) {
        cells[i].addEventListener("mouseover", () => {
            cells[i].style.backgroundColor = getRandomColor();
        });
    }

}

for (const diagonalCell of diagonalCells) {
    cells[22].addEventListener("dblclick", () => {
        for (const cell of diagonalCells) {
            cell.style.backgroundColor = getRandomColor();
        }
    });
}




