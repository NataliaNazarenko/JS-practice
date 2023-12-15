// 1 task Перепишіть функцію, використовуючи '?' або '||'

// function checkAge(age) {
//     if (age > 18) {
//     return true;
//     } else {
//     return confirm('Батьки дозволили?');
//     }
// };

// const checkAge = (age) => age > 18 ? true : confirm('Батьки дозволили?');

// checkAge(14);

// const checkAge = (age) => (age > 18) || confirm('Батьки дозволили?');

// checkAge(14);

// 2 task Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// const min = (a, b) => (a > b) ? b : a;

// console.log(min(171, 10));

// const min = (a, b) => Math.min(a, b);

// console.log(min(171, 10));

// const min = (a, b) => {
//     if (a > b) {
//         return b;
//     } else {
//         return a;
//     }
// };

// console.log(min(171, 10));

// 3 task Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
// if (confirm(question)) yes();
// else no();
// }
// ask(
// "Ви згодні?"
// ,
// function() { alert("Ви погодились."); },
// function() { alert("Ви скасували виконання."); }
// );

// const ask = (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
// }
// ask("Ви згодні?", () => alert("Ви погодились."), () => alert("Ви скасували виконання."));