const gameContainer = document.querySelector("#game-container");

for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  gameContainer.appendChild(row);
  for (let i = 0; i < 16; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    row.appendChild(div);
  }
  
}
// const row = document.createElement("div");
// row.classList.add("row");
// gameContainer.appendChild(row);
// for (let i = 0; i < 16; i++) {
//   const div = document.createElement("div");
//   div.classList.add("cell");
//   row.appendChild(div);
// }
