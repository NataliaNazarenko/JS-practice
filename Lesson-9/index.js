// Обробники подій

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

const clickBtnNew = document.querySelector('#click-btn');
const infoClick = (event) => {
console.log(event);
console.log(event.type);
console.log(event.target);
};
clickBtnNew.addEventListener('click', infoClick);

// Форми: подія та метод submit


// const form = document.querySelector('.form');
// const loginInput = form.querySelector('.input');
// const passwordInput = form.querySelector('input[type="password"]');

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
//     const login = loginInput;
//     console.log(login);
//     console.log(login.value);
//     const password = passwordInput;
//     console.log(password);
//     console.log(password.value);
//     form.reset();
// };


const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const item = document.querySelector('#item');

// parent.addEventListener('click', () => console.log('Click Parent'));
// child.addEventListener('click', () => console.log('Click Child'));
// item.addEventListener('click', () => console.log('Click Item'));

// const handleClickAll = (event) => {
//     console.log(event.target);
// };

// parent.addEventListener('click', handleClickAll);

const itemClick = (event) => {
    console.log('itenClick stop');
    event.stopPropagation();
};

const childClick = (event) => {
    console.log('childClick stop');
    event.stopPropagation();
};

const parentClick = (event) => {
    console.log('parentClick stop');
    event.stopPropagation();
};

parent.addEventListener('click', parentClick);
child.addEventListener('click', childClick);
item.addEventListener('click', itemClick);

// Приклад делегування: дії в розмітці
// Скажімо, ми хочемо створити меню з кнопками «Зберегти», «Завантажити»,
// «Пошук» і так далі. А ще є об’єкт з методами save, load, search… Як їх поєднати?
// Перше, що спадає на думку – це призначити окремий обробник кожній кнопці.
// Але є більш елегантне рішення. Ми можемо додати один обробник до всього
// меню та атрибути data-action до кожної кнопки відповідно до методів, які вони
// викликають:
// <button data-action="save">
// Клікніть, щоб Зберегти
// </button>
// Обробник читає атрибут і виконує відповідний метод. Подивіться на робочий
// приклад:
{/* <div id="menu">
<button data-action="save">Зберегти</button>
<button data-action="load">Завантажити</button>
<button data-action="search">Пошук</button>
</div>
<script>
class Menu {
constructor(elem) {
this._elem = elem;
elem.onclick = this.onClick.bind(this); // (*)}
save() {
alert('збереження'); }
load() {
alert('завантаження'); }
search() {
alert('пошук'); }
onClick(event) {
let action = event.target.dataset.action;
if (action) {
this[action]();
} }; }
new Menu(menu);
</script> */}

// Зауважте, що this.onClick прив’язаний до this у (*). Це важливо, тому що інакше this
// в ньому посилатиметься на елемент DOM (elem), а не на об’єкт Menu, і this[action]
// буде не тим, який нам потрібен.
// Отже, які переваги дає нам тут делегування?
// Нам не потрібно писати код, щоб призначити обробник кожній кнопці. Достатньо
// створити один метод і помістити його в розмітку.
// Структура HTML гнучка, ми можемо в будь-який момент додати/видалити кнопки.
// Ми також можемо використовувати класи .action-save, .action-load, але підхід з
// використанням атрибутів data-action вважається семантично кращим. Крім того,
// його можна використовувати в правилах CSS.
// Делегування подій можна також використовувати для додавання певної
// «поведінки» елементам декларативно, за допомогою спеціальих атрибутів та
// класів.
// Шаблон складається з двох частин:
// 1. Ми додаємо спеціальний атрибут до елемента, який описує його поведінку.
// 2. За допомогою делегування ставиться один обробник на документ, що
// відстежує усі події і, якщо елемент має атрибут, виконує відповідну дію

const nav = document.querySelector('.nav');

nav.addEventListener('click', handleClickNav);

function handleClickNav(event) {
    console.log(event.target);
    const checkClass = document.querySelector('li.active');
    if(checkClass) {
        event.target.classList.remove('active');
    } else {
        event.target.classList.add('active');
    };
};

const ball = document.querySelector('.ball');

ball.onmousedown = function(event) {
    function move(pageX, pageY) {
        ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
        ball.style.top = pageY - ball.offsetWidth / 2 + 'px';
    };
    move(event.pageX, event.pageY);

    function onMouseMove(event) {
        move(event.pageX, event.pageY);
    };

    document.addEventListener('mousemove', onMouseMove);

    ball.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
    };
};