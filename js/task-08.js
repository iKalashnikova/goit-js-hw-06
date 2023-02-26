// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.



// const formEl = document.querySelector('.login-form');
// const formInputEls = Array.from(formEl.elements).filter(input => input.type !== "submit");
// const user = {};

// formEl.addEventListener('submit', (event) => {
// event.preventDefault();

// const values = formInputEls.map(input => input.value);
// const allInputFilled = values.every(value => value.trim() !== "");

// if(allInputFilled) { 
//         user['email'] = formInputEls[0].value;
//         user['password'] = formInputEls[1].value;
//  console.log(user);
//     } else {
//     alert("Заповніть всі поля");
// }
// });


const formEl = document.querySelector('.login-form')

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value !== "" || password.value !== "") {
    const user = {
        Email: email.value, 
        Password: password.value}
    console.log(user);
  } else {
    alert("Заповніть всі поля");
  }
  event.currentTarget.reset();
}