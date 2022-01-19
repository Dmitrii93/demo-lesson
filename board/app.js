const board = document.querySelector("#board");
const SQUARES_NUMBER = 500;
const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "pink",
  "purple",
  "darkgreen",
  "brown",
  "aqua",
  "lightred",
  "wheat",
  "azure",
  "cadetblue",
  "white",
];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => {
    setColor(square);
  });
  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });
  board.append(square);
}

function setColor(el) {
  const color = getColor();
  el.style.backgroundColor = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(el) {
  el.style.backgroundColor = "#1d1d1d";
  el.style.boxShadow = `0 0 2px black`;
}
function getColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
