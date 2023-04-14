const gameContainer = document.querySelector("#game-container");
document.addEventListener("mousedown", handleMouseDown);
document.addEventListener("mouseup", handleMouseUp);
let mouseDown = false;

function handleMouseDown (e) {
  if(e) mouseDown = true;
}

function handleMouseUp (e) {
  if(e) mouseDown = false;
}

function paintClick(e) {
    e.target.classList.add("black");
}

function paintHold(e) {
  if (mouseDown) {
    e.target.classList.add("black");
  }
}

for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  gameContainer.appendChild(row);
  for (let i = 0; i < 16; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.addEventListener("mouseover", paintHold);
    div.addEventListener("mousedown", paintClick);
    row.appendChild(div);
  }
}
