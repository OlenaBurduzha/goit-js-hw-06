const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener("input",  () =>{
   span.style.fontSize = input.value + "px";
});

console.log(span);


//Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
// і змінює інлайн - стиль span#text, оновлюючи властивість font - size. 
//В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.