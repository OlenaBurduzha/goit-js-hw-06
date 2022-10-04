function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const createboxBtn = document.querySelector('[data-create]');
const deleteboxBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector("#boxes");

const inputChange = (event) => {
  input.setAttribute("count", Number(event.currentTarget.value));
};

input.addEventListener("input", inputChange);

let baseboxSize = 30;
const randomColor = getRandomHexColor;

const createbox = () => {
  let countBox = Number(input.getAttribute("count"));

  for (let i = 0; i < countBox; i += 1) {
    baseboxSize += 10;
    const newBox = document.createElement("div");
    newBox.style.background = randomColor();
    newBox.style.height = baseboxSize + "px";
    newBox.style.width = baseboxSize + "px";
    newBox.style.margin = '5px';
    newBox.classList.add("new-box");
    boxes.append(newBox);
  }
};

createboxBtn.addEventListener("click", createbox);

const deletebox = () => {
  const allNewBoxes = document.querySelectorAll(".new-box");
  for (let allNewBoxe of allNewBoxes) {
    boxes.removeChild(allNewBoxe);
  }
  baseboxSize = 30;
};

deleteboxBtn.addEventListener("click", deletebox);