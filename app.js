let container =  document.querySelector(".container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");


let startBtn = document.querySelector(".start-btn");
startBtn.addEventListener("click", startGame);

function startGame() {
    // deleteGrids();
    let userNum = prompt("Enter the no. :");
    if(userNum <= 100 && userNum > 0) {
        createGrid(userNum);
        console.log(userNum);
    }
}

function makeRows(rowNum) {
    for(let i=0; i < rowNum; i++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    }
}

function makeColumns(columnNum) {

    for(let i=0; i < rows.length; i++) {
        for(let j = 0; j < columnNum; j++) {
            let cell = document.createElement("div");
            rows[j].appendChild(cell).className = "cell";

            cell.addEventListener("mouseenter", () => {
                cell.style.backgroundColor = "white";

            })

        } 
    }
   }


function createGrid(num) {
    makeRows(num);
    makeColumns(num);
    
}


function deleteGrids() {
    let row = document.querySelectorAll(".gridRow");
    let cell = document.querySelectorAll(".cell");
    row.removeChild(cell);
    container.removeChild(row);

}

