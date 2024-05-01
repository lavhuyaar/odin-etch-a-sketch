let container = document.querySelector(".container");
let rows = document.getElementsByClassName("row");
let cells = document.getElementsByClassName("cell");

//Starts the game by clicking button.
let startBtn = document.querySelector(".start-btn");
startBtn.addEventListener("click", startGame);

//Starts the game.
function startGame() {
  deleteGrid();
  let userNum = prompt("Enter the number (1-100) :");
  if (userNum <= 100 && userNum > 0) {
    createGrid(userNum);
  }
}

//Creates the no. of rows inside the container.
function makeRows(rowNum) {
  for (let i = 0; i < rowNum; i++) {
    let row = document.createElement("div");
    container.appendChild(row).className = "row";
  }
}

//Creates the no. of cells inside the rows.
function makeColumns(cellNum) {
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < cellNum; j++) {
      let cell = document.createElement("div");
      rows[j].appendChild(cell).className = "cell";

      cell.addEventListener("mouseenter", () => {
        cell.style.backgroundColor = "#592E83";
      });
      cell.addEventListener("click", () => {
        cell.style.backgroundColor = "white";
      });
    }
  }
}

//Creates the grid.
function createGrid(num) {
  makeRows(num);
  makeColumns(num);
}

//Deletes the previous grid.
function deleteGrid() {
  container.replaceChildren();
}
