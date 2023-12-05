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

// console.log(5 * 5 === 25 ? "OK" : "NOT");
// console.log(5 + 5 === 25 ? "OK" : "NOT");

// умова switch/case

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


