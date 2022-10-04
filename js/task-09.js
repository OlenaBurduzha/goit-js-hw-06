function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const span=document.querySelector('.color');
const body = document.querySelector('body');

changeColorBtn.addEventListener('click', (event) => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  span.textContent = randomColor;
})


//Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по 
//кліку на button.change - color і виводить значення кольору в span.color.