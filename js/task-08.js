const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const {elements: { email, password }} = event.currentTarget;
    if (email.value === "" || password.value === "") {
        alert("Попередженням! Є не заповнені поля!");
    } else {
        console.log({ "email": email.value, "password": password.value })
    form.reset();
    };
});
   

//Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
//Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт,
// де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості.
//Для доступу до елементів форми використовуй властивість elements.
//Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
