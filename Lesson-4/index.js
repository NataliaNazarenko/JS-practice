// функції

// Функції — це головні “будівельні блоки” програми. Вони дозволяють робити
// однакові дії багато разів без повторення коду.
// Ми можемо передати в функцію довільні дані використовуючи параметри.
// В наступному прикладі, функція має два параметри: from і text.
// function showMessage(from, text) { // параметри: from, text
// alert(from + ': ' + text);
// }
// showMessage('Анна','Привіт!'); // Анна: Привіт! (*)
// Якщо викликати функцію без аргументів, тоді відповідні значення стануть
// undefined.

// Функціональний вираз (function expression) - звичайне оголошення змінної,
// значення якої буде функцією.
// Оголосимо змінну add, і надамо їй функцію приймаючу 3 значення і повертає
// результат складання цих значень.
// const add = function(a, b, c) {
// return a + b + c;
// };
// Ім'я функції це дія, дієслово, що починається з маленької літери, що
// відповідає на питання 'Що зробити?'. Наприклад: findSmallesNumber,
// fetchUserInfo, validateInput.

// Оператор return визначає значення, що повертається. Коли інтерпретатор доходить доreturn, він відразу ж виходить з функції, і повертає це значення в місце коду, де функціябула викликана.
// Оператор return без виразу повертає значення undefined. При відсутності обороту в
// тілі функції вона все одно поверне значення undefined

// Термін аргументи використовується під час виклику функції, коли ми передаємо
// значення у функцію.
// Термін параметри використовується при оголошенні функції, це ті локальні
// змінні всередині функції, які будуть записані значення аргументів під час її
// виклику.

// function showMessageHello() {
//     console.log('Hello!');
// };

// showMessageHello();

// function showMessage(name, city) {
//     console.log(`Hello, my name is ${name}. I'm from ${city}.`);
// };

// showMessage("Nata", "Kyiv");

// const sayHi = function() {
//     console.log("Hi");
// };

// sayHi();

// const userName = "Margo!";
// const sayHello = function() {
//     let message = "Hello ";
//     console.log(message + userName);
// };

// sayHello();

// function sum(a, b) {
//     return a + b;
// };

// let result = sum(7, 5);
// console.log(result);

// аргументи and rest

// const addArguments = function() {
//     const arg = Array.from(arguments);

//     console.log(arguments);
//     console.log(arg);
// };

// addArguments(1, 2, 3);
// addArguments(4, 8, 7, 65, 100);

// const addName = function(...arg1) {
  
//     console.log(arg1);
// };

// addName(89, 52, 73);

// callback

// Колбеки (функції зворотного виклику)
// Розглянемо інші приклади передачі функції як значення та використання
// Функціональних Виразів.
// Для цього напишемо функцію ask(question, yes, no) з трьома параметрами:
// question
// Текст запитання
// yes
// Функція, що буде викликатись, якщо відповідь “Так”
// no
// Функція, що буде викликатись, якщо відповідь “Ні”
// Функція повинна поставити запитання question і, залежно від відповіді
// користувача, викликати yes() або no():
// function ask(question, yes, no) {
// if (confirm(question)) yes()
// else no();
// }
// function showOk() {
// alert( "Ви погодились." );
// }
// function showCancel() {
// alert( "Ви скасували виконання." );
// }
// використання: функції showOk, showCancel передаються як аргументи для ask
// ask("Ви згодні?"
// , showOk, showCancel);

// function ask(question, yes, no) {
//     if(confirm(question)) {
//         yes();
//     } else {
//         no();
//     };
// };

// function showOk() {
//     console.log("You say ok!");
// };

// function showCancel() {
//     console.log("You say no!");
// };

// ask("Yes or no?", showOk, showCancel);

// hof

// const hello = function(name) {
//     console.log(`Hello ${name}!`);
// };

// const searchName = function(callback) {
//     const name = "Nata";
//     callback(name);
// };

// searchName(hello);

// function checkAge(age) {
//     if (age > 18) {
//         return console.log("Hello!");
//     };

//     return console.log("Good Bye!");
// };

// checkAge(12);
// checkAge(21);

// function showMovie(age) {
//     if (age > 21) {
//         return;
//     };

//     return console.log("Go to movie!");
// };

// showMovie(12);
// showMovie(35);

// стрілкові

// Існує ще один простий та короткий синтаксис для створення функцій, який часто
// доцільніше використовувати замість Функціонального Виразу.
// Це так звані “стрілкові функції”
// , а виглядають вони ось так:
// let func = (arg1, arg2, ..., argN) => expression;
// Цей код створить функцію func з аргументами arg1..argN, що обчислює
// expression з правого боку (використовуючи ці аргументи) та повертає його
// результат.
// Іншими словами, це приблизно те ж саме, що і:
// let func = function(arg1, arg2, ..., argN) {
// return expression;
// };

// const test = (data) => {
//     console.log(data);
// };

// test("Booo!");

// const sayMovie = (age) => {
//     if (age > 21) {
//         return console.log("Yes! Hello!");
//     };

//     return console.log("Bye!");
// };

// sayMovie(12);
// sayMovie(35);

// стек виконання f()

// Стек – структура даних, яка працює за принципом останнім прийшов – першим
// вийшов (LIFO – Last In, First Out). Останнє, що ви додали в стек, буде видалено з
// нього першим, тобто можна додати або видалити елементи лише з верхівки
// стека.
// Контекст виконання (execution context) - внутрішня конструкція мови для
// відстеження виконання функції, що містить метаінформацію про її виклик.
// Глобальний контекст виконання (global execution context) – це контекст є за
// замовчуванням, сам файл скрипта – це функція яка запускається на виконання.
// Контекст виконання функції (functional execution context) - створюється щоразу
// під час виклику функції.
// Стек викликів (Execution Context stack, call stack) – внутрішня констуркція двигуна,
// що містить усі контексти виконання.
// Stack frame (кадр стека, запис стека) - структура, яка додається на стек при
// виклику функції. Зберігає деяку метаінформацію: ім'я функції, аргументи які були
// передані під час виклику та номер рядка в якому відбувся виклик.

// const b = () => {
//     console.log("b");
// };

// const p = () => {
//     console.log("p");
// };

// const n = () => {
//     console.log("n");
//     b();
//     p();
// };

// n();

// практика

const addNumber = (number) => {
    let summa = Number(number) + 100;
    return console.log(summa);
};

const inputRef = document.querySelector('input[name="number"]');
const btnRef = document.querySelector('button');

console.log(inputRef);
console.log(btnRef);

btnRef.addEventListener("click", () => addNumber(inputRef.value));

