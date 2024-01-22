// Подія – це сигнал від браузера у тому, що щось сталося.
// Події використовуються для реакції на дії відвідувача та виконання коду.
// Події стають у чергу та обробляються у порядку надходження, асинхронно,
// незалежно.
// Існує багато видів подій, розглянемо деякі з них.
// click - відбувається, коли клацнули на елемент лівою кнопкою миші
// submit - відвідувач надіслав форму
// focus - відвідувач фокусується на елементі, наприклад, натискає на input
// contextmenu – відбувається, коли клацнули на елемент правою кнопкою миші.
// mouseover / mouseout – коли миша наводиться на / залишає елемент.
// mousedown / mouseup – коли натиснули / відпустили кнопку миші на елементі.
// mousemove – під час руху миші.
// всі доступні події https://developer.mozilla.org/en-US/docs/Web/Events

// Події клавіатури:
// keydown та keyup – коли користувач натискає / відпускає клавішу.
// Події елементів форми:
// submit – користувач надіслав форму <form>.
// focus – користувач фокусується на елементі, наприклад, натискає на <input>.
// Події документа:
// DOMContentLoaded – коли HTML завантажено й оброблено, DOM документа повністю
// побудований і доступний.
// CSS події:
// transitionend – коли CSS-анімацію завершено

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');

btn1.addEventListener("click", () => console.log('click'));
btn2.addEventListener("contextmenu", () => console.log('contextmenu'));
btn3.addEventListener("mouseover", () => console.log('mouseover'));
btn3.addEventListener("mouseout", () => console.log('mouseout'));
btn4.addEventListener("mousedown", () => console.log('mousedown'));
btn4.addEventListener("mouseup", () => console.log('mouseup'));
btn5.addEventListener("mousemove", () => console.log('mousemove'));
btn6.addEventListener("keydown", () => console.log('keydown'));
btn6.addEventListener("keyup", () => console.log('keyup'));

// Обробники подій
// Події можна призначити обробник, тобто функцію, яка спрацює, щойно подія
// сталася.
// Саме завдяки обробникам JavaScript код може реагувати на дії користувача.
// Є кілька способів призначити події обробник. Зараз ми їх розглянемо,
// починаючи з найпростішого.
// Використання атрибута HTML
// Обробник може бути призначений прямо в розмітці, атрибуті, який називається
// on<event>.
// Наприклад, щоб призначити обробник події click на елементі input, можна
// використовувати атрибут onclick, ось так:
// <input value="Натисни мене" onclick="alert('Клік!')" type="button">
// При натисканні мишкою на кнопці виконається код, вказаний в атрибуті onclick.

// Порядок спрацювання подій
// Одна дія може викликати кілька подій. Наприклад, клік викликає спочатку стрілку
// вниз, а потім натисніть і клацніть. У випадках, коли одна дія генерує кілька подій,
// їх порядок фіксований. Тобто, обробники викликатимуться в порядку mousedown
// → mouseup → click.
// Кожна подія опрацьовується незалежно. Наприклад, при натисканні, події
// мишіup і click виникають одночасно, але обробляються послідовно. Спочатку
// повністю завершується обробка mouseup, потім запускається click.
// Слухачі подій
// Для того, щоб елемент реагував на дії користувача, на нього необхідно повісити
// слухача (обробник) події. Тобто функцію, яка спрацює, як тільки подія відбулася.
// Саме завдяки слухачам подій скрипт може реагувати на дії користувача.
// Методи elem.addEventListener() і elem.removeEventListener() це сучасний спосіб
// призначити або видалити обробник, при цьому можна використовувати скільки
// завгодно обробників на одному типі події.
// addEventListener
// once: якщо true, тоді обробник буде автоматично вилучений після виконання.
// capture: фаза, на якій повинен спрацювати обробник, докладніше про це буде розказано у
// розділі Bubbling and capturing. Так історично склалося, що options може бути false/true, це
// те саме, що {capture: false/true}.
// passive: якщо true, тоді обробник ніколи не викличе preventDefault(), докладніше про це
// буде розказано у розділі Типові дії браузера.
// Синтаксис додавання обробника:
// element.addEventListener(event, handler, [options]);
// event
// Назва події, наприклад "click".
// handler
// Посилання на функцію-обробник.
// options
// Додатковий об’єкт із властивостями:
// once: якщо true, тоді обробник буде автоматично вилучений після виконання.
// capture: фаза, на якій повинен спрацювати обробник, докладніше про це буде розказано у
// розділі Bubbling and capturing. Так історично склалося, що options може бути false/true, це
// те саме, що {capture: false/true}.
// passive: якщо true, тоді обробник ніколи не викличе preventDefault(), докладніше про це
// буде розказано у розділі Типові дії браузера.

// Для видалення обробника слід використовувати removeEventListener:
// element.removeEventListener(event, handler, [options]);
// Метод addEventListener дозволяє додавати кілька обробників на одну подію
// одного елемента, наприклад:
// <input id="elem" type="button" value="Натисни мене"/>
// <script>
// function handler1() {
// alert('Дякую!');
// };
// function handler2() {
// alert('Ще раз дякую!');} elem.onclick = () => alert("Привіт");
// elem.addEventListener("click"
// , handler1); // Дякую!
// elem.addEventListener("click"
// , handler2); // Ще раз дякую!
// </script>

const addBtn = document.querySelector('#add');
const removeBtn = document.querySelector('#remove');
const clickBtn = document.querySelector('#click');

function handleClick() {
    console.log('Hello');
};

addBtn.addEventListener('click', () => {
    clickBtn.addEventListener('click', handleClick);
});

removeBtn.addEventListener('click', () => {
    clickBtn.removeEventListener('click', handleClick);
});