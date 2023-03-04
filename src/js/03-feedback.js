import throttle from 'lodash.throttle';

/*
Завдання 3 - форма зворотного зв'язку​
HTML містить розмітку форми. Напиши скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.
*/
/*
<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form >
*/
/*
Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт 
з полями email і message, у яких зберігай поточні значення полів форми. 
Нехай ключем для сховища буде рядок "feedback-form-state".
Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, 
заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з 
полями email, message та їхніми поточними значеннями.
Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд.
Для цього додай до проекту і використовуй бібліотеку lodash.throttle.
*/

const formRef = document.querySelector('.feedback-form'); // form tag
const inputRef = document.querySelector('input'); // email tag
const textareaRef = document.querySelector('textarea'); // textarea tag

formRef.addEventListener('input', throttle(onDataAdded, 500));
formRef.addEventListener('submit', onFormSubmit);

// inputRef.addEventListener('input', onInputAdded);
// textareaRef.addEventListener('input', onTextAdded);

function onDataAdded(e) {
  e.preventDefault();
  // const data = e.target.value;

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email: inputRef.value, message: textareaRef.value })
  );
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(data); // object in console according to the task

  // console.log(localStorage.getItem('feedback-form-state'));
}
if (localStorage) {
  console.log(inputRef.value);
  inputRef.value = data.email;
  textareaRef.value = data.message;
} else {
  inputRef.value = '';
  textareaRef.value = '';
}
// function onInputAdded() {
//   if (inputRef.value) {
//     return (inputRef.value = data.email);
//   }
//   inputRef.value = '';
// }
// function onTextAdded() {
//   if (textareaRef.value) {
//     return (textareaRef.value = data.message);
//   }
//   textareaRef.value = '';
// }

function onFormSubmit(e) {
  e.preventDefault();

  e.target.reset(); // очищає значення форми при публікації
  localStorage.clear('feedback-form-state'); // очищає localStorage
}
