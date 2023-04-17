let mouseDown = false;

//Track whether the mouse is currently up or down
window.addEventListener("mousedown", () => mouseDown = true);
window.addEventListener("mouseup", () => (mouseDown = false));


// Callbacks for different type of clicks
function paintClick(e) {
  e.target.classList.add("black");
}
function paintHold(e) {
  if (mouseDown) {
    e.target.classList.add("black");
  }
}

// Build the grid for the etch a sketch
const gameContainer = document.querySelector("#game-container");
let size = 16;

function buildGrid(size) {
  while (gameContainer.hasChildNodes()) {
    gameContainer.removeChild(gameContainer.firstChild);
  }
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    gameContainer.appendChild(row);
    for (let i = 0; i < size; i++) {
      const div = document.createElement("div");
      div.classList.add("cell");
      div.addEventListener("mouseover", paintHold);
      div.addEventListener("mousedown", paintClick);
      row.appendChild(div);
    }
  }
}
// Build grid at the start
buildGrid(size);

//Create button for changing size
const gridSize = document.querySelector("#grid-size");
gridSize.addEventListener("click", handleGridSize);

function handleGridSize(e) {
  let newGridSize = prompt("What size do you want?");
  newGridSize = parseInt(newGridSize);
  console.log(newGridSize);
  if (newGridSize !== null || newGridSize !== NaN) {
    size = newGridSize;
    buildGrid(size);
  } else {
    console.error("Not a valid input");
    alert("Not a valid input");
  }
}
