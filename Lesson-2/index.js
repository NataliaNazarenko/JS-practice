
// Оператор typeof
// Для отримання типу значення змінної використовується оператор типу, який
// повертає на місце свого виклику тип значення змінної вказаного після нього.
// Значення, що повертається, це просто рядок в якому вказаний тип.

const b = null;
console.log(typeof null); // "object"
const c = 5;
console.log(typeof c); // "number"
const d = 'JavaScript is awesome!';
console.log(typeof d); // "string"
const e = false;
console.log(typeof e); // "boolean"

// Вивід данних/ Ввід данних
// Взаємодія: alert, prompt, confirm
// Оскільки основним середовищем для демонстрації можливостей JavaScript буде
// браузер, давайте розглянемо декілька функцій для взаємодії з користувачем:
// alert, prompt та confirm.
// alert
// Функція показує повідомлення та чекає, доки користувач не натисне кнопку “ОК”.
// alert("Привіт");
// prompt
// Функція prompt показує модальне вікно з текстовим повідомленням, полем, куди
// відвідувач може ввести текст, та кнопками ОК/Скасувати.
// let age = prompt('Скільки вам років?');
// confirm
// result = confirm(question);
// Функція confirm показує модальне вікно з питанням question та двома
// кнопками: ОК та Скасувати.
// Результат: true, якщо натиснути кнопку OK, інакше — false.


// виведення даних

// const message = "I am FullStack Developer ";
// alert(message);
// console.log(message);

// отримання данних

// prompt()
// confirm()

// const isConfirm = confirm("It's OK");
// console.log(isConfirm);

// const userName = prompt('Wat is your name?');
// console.log(userName);

// перетворення данних

// let value;
// value = true;
// console.log(typeof value);
// const newValue = String(value);
// console.log(typeof newValue);

// value = '555';
// console.log(typeof value);
// const newValue = Number(value);
// console.log(typeof newValue);

// console.log(Boolean(1));
// console.log(Boolean(0));
// console.log(Boolean('name'));
// console.log(Boolean(''));
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(undefined));

// унарний оператор, якщо він має один операнд

// let x = 1;
// x = -x;
// console.log(x);

// бінарний оператор, якщо він має два операнди

// let c = 4, y = 2;
// alert(c - y);

// математичні операції

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);

// залишок від ділення %

// console.log(8 % 3);
// console.log(10 % 3);

// піднесення до степеня **

// console.log(2 ** 3);
// console.log(5 ** 2);

// оператори порівняння

// Завжди використовуйте строгу рівність === і строгу нерівність !==.
// Оператори == і !=виконують перетворення типів порівнюваних значень, що
// може призвести до помилок, особливо у початківців.

// console.log(2 > 5);
// console.log(2 < 5);
// console.log(2 >= 10);
// console.log(2 <= 4);

// let data = "3";
// console.log(data == 3); //не строге порівняння

// let data = "3";
// console.log(data === 3);  //строге порівняння

// let data = "3";
// console.log(data != 3); //не дорівнює

// let data = "3";
// console.log(data !== 3);  //строго не дорівнює

// логічні оператори

// В JavaScript існує чотири логічні оператори: || (АБО), && (І), ! (НЕ), ?? (оператор null об’єднання)
// || (АБО)
// Оператор “АБО” представлений двома символами вертикальної лінії:
// result = a || b;
// Логічний оператор АБО призначений для маніпулювання лише булевими
// значеннями. Якщо будь-який з його аргументів означає true, повертається true,
// інакше повертається false.
// && (І)
// Оператор І представлений двома амперсандами &&:
// result = a && b;
// Повертає true, якщо обидва оператори є правдивими, і false в іншому випадку
// ! (НЕ)
// Булевий оператор НЕ представлений знаком оклику !.
// result = !value;
// Оператор приймає один аргумент і виконує наступне:
// Перетворює операнд на булевий тип: true/false.
// Повертає зворотне значення.
// alert( !true ); // false
// alert( !0 ); // true
// Подвійний НЕ !! іноді використовується для перетворення значення на булевий
// тип:
// alert( !!"не пустий рядок" ); // true
// alert( !!null ); // false
// Тобто, перший НЕ перетворює значення на булеве і повертає зворотне, а другий
// НЕ інвертує його знову

// and && оператор і

// console.log(5 === 5 && 6 > 3);
// console.log(5 === 6 && 6 > 3);
// console.log(5 === 5 && 6 < 3);


// or || оператор або

// console.log(5 + 5 === 25 || 2 + 2 === 6);
// console.log(5 * 5 === 25 || 2 * 2 === 6);
// console.log(5 + 5 === 25 || 2 * 2 === 6);
// console.log(5 * 5 === 25 || 2 + 2 === 6);


// not ! оператор ні

// console.log(!true);


// умови if/else

// if (5 + 5 === 25) {
//     console.log("OK");
// };

// if (5 * 5 === 25) {
//     console.log('OK');
// };

// if (5 + 5 === 25) {
//     console.log("OK");
// } else {
//     console.log("NOT");
// };

// if (5 * 5 === 25) {
//     console.log("OK");
// } else {
//     console.log("NOT");
// };

// if (5 + 5 === 25) {
//     console.log("NOT");
// } else if (5 * 5 === 25) {
//     console.log("OK");
// } else {
//     console.log("UPS");
// }

// тернарний оператор

// Умовний оператор ‘?’
// Так званий “умовний” оператор або оператор “знак питання” дає нам зробити
// це в більш короткій і простій формі.
// / 2 + 2 === 4 ? console.log("1") : console.log("2")
// 5 * 5 === 24 ? console.log(true) : console.log(false)
// Оператор представлений знаком питання ?. Іноді його називають “тернарним”
// ,
// оскільки оператор має три операнди.
// let result = умова ? значення1 : значення2;

// console.log(5 * 5 === 25 ? "OK" : "NOT");
// console.log(5 + 5 === 25 ? "OK" : "NOT");

// умова switch/case

// Конструкція "switch"
// Конструкція switch може замінити кілька if.
// Вона дає можливість більш наочного способу порівняння значення відразу з
// кількома варіантами.
// Конструкція switch має один або більше case блоків та необов’язковий блок default.
// switch(x) {
// case 'value1': // if (x === 'value1')
// ...
// [break]
// case 'value2': // if (x === 'value2')
// ...
// [break]
// default:
// ...
// [break]
// }
// Значення змінної x перевіряється на строгу рівність (===) значенню із першого
// блоку case (яке дорівнює value1), потім значенню із другого блоку (value2) і так
// далі.
// Якщо строго рівне значення знайдено, то switch починає виконання коду із
// відповідного case до найближчого break або до кінця всієї конструкції switch.
// Якщо жодне case-значення не збігається – виконується код із блоку default (якщо
// він присутній).
// Якщо break відсутній, то буде продовжено виконання коду по наступним
// блокам case без перевірок.

// let cost = null;
// const sub = 'pro';

// switch (sub) {

//     case "free":
//         cost = 0;
//         break;

//     case "pro":
//         cost = 200;
//         break;

//     case "premium":
//         cost = 500;
//         break;

//     default:
//         console.log("Not sub");
//         break;
// }

// console.log(cost);

// Умовні розгалуження: if- else
// Інструкція “if”
// Інструкція if(...) обчислює умову в дужках і, якщо результат умови true, виконує
// блок коду.
// if (5 * 5 === 25) {
// console.log("Виведе в консоль цей рядок")}
// Блок “else”
// Вираз if може містити необов’язковий блок “else” (“інакше”). Він виконується, коли
// умова є хибною.
// if (5 * 5 === 25) {
// console.log("1");
// } else {
// console.log("2");
// }
// Декілька умов: “else if”
// Іноді ми хотіли б перевірити кілька варіантів умови. Блок else if дозволяє нам це
// зробити.
// if (5 + 5 === 10) {
// console.log("5+5 ===10");
// } else if (2 + 2 === 4) {
// console.log("2+2 ===4");
// } else {
// console.log("no");
// }

// Задача 1

// const min = prompt("Введіть хвилини до 60");

// if (min >= 0 && min <= 14) {
//     console.log("Перша чверть");
// } else if (min >= 15 && min <= 29) {
//     console.log("Друга чверть");
// } else if (min >= 30 && min <= 44) {
//     console.log("Третя чверть");
// } else if (min >= 45 && min <= 60) {
//     console.log("Четверта чверть");
// } else {
//     console.log("Це більше ніж одна хвилина");
// };

// Задача 2

// const value = prompt("Введіть назву фрукта").toLowerCase();
// let cost;

// switch (value) {

//     case "яблуко":
//         cost = 10;
//         alert(`Товар ${value} - коштує ${cost} гривень за 1 кг`);
//         break;

//     case "груша":
//         cost = 20;
//         alert(`Товар ${value} - коштує ${cost} гривень за 1 кг`);
//         break;

//     case "слива":
//         cost = 50;
//         alert(`Товар ${value} - коштує ${cost} гривень за 1 кг`);
//         break;

//     case "банан":
//         cost = 50;
//         alert(`Товар ${value} - коштує ${cost} гривень за 1 кг`);
//         break;

//     case "персик":
//         cost = 100;
//         alert(`Товар ${value} - коштує ${cost} гривень за 1 кг`);
//         break;  

//     default:
//        alert(`Товару ${value} - немає в наявності`);
//     break;
// }


