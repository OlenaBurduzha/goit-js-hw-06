
const decrementBtn = document.querySelectorAll('button')[0];
const incrementBtn = document.querySelectorAll('button')[1];
const valueEl = document.querySelector('span');

let counterValue = 0;

decrementBtn.addEventListener('click', function (event) {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});

incrementBtn.addEventListener('click', function (event) {
     counterValue += 1;
    valueEl.textContent = counterValue;
});

console.log(valueEl)




// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника 
//та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй 
//або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue