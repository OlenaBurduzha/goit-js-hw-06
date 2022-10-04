const input = document.querySelector('input');
const span = document.querySelector('span');

input.addEventListener('input',(event)=> {
    if (input.value){
      span.textContent = input.value;
    } else {
      span.textContent = 'Anonymous';
    }
  });

//Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
//підставляє його поточне значення в span#name - output.
//Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous"