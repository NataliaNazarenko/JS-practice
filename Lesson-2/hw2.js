// 1 task - // Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.

let a = 1;
console.log(a > 0);

let d = 0;
console.log(d > 0);

let b = -3;
console.log(b > 0);

// 2 task - // Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test',"qwerty", true

let f = "test";
console.log(f === "test");  // true

let c = "qwerty";
console.log(c === "test");  // false

let isTrue = true;
console.log(isTrue === "test");  // false

// 3 task - // Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.

let k = 1;
console.log(k > 10 ? k - 5 : k + 5);  // Додати 5, бо 1 менше за 10

let m = 10;
console.log(m > 10 ? m - 5 : m + 5);  // Додати 5, бо 10 рівне 10

let s = 13;
console.log(s > 10 ? s - 5 : s + 5);  // Відняти 5, бо 13 більше за 10

// 4 task - //Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const monthString = prompt("Введіть число від 1 до 12");
// const month = parseInt(monthString);

// let cost;

// switch (month) {
//     case 1:
//         cost = "січень";
//         alert(`Число ${month} - це місяць ${cost}.`);
//         break;
//     case 2:
//         cost = "лютий";
//         alert(`Число ${month} - це місяць ${cost}.`);
//         break;
//     case 3:
//         cost = "березень";
//         alert(`Число ${month} - це місяць ${cost}.`);
//         break;
//     case 4:
//         cost = "квітень";
//         alert(`Число ${month} - це місяць ${cost}.`);
//         break;
//     case 5:
//         cost = "травень";
//         alert(`Число ${month} - це місяць ${cost}.`);
//         break;
//     case 6:
//         cost = "червень";
//         alert(`Число ${month} - це місяць ${cost}.`);
//         break;
//     case 7:
//         cost = "липень";
//         alert(`Число ${month} - це місяць ${cost}.`);
//         break;
//     case 8:
//         cost = "серпень";
//         alert(`Число ${month} - це місяць ${cost}.`);
//         break;
//     case 9:
//         cost = "вересень";
//         alert(`Число ${month} - це місяць ${cost}.`);
//         break;
//     case 10:
//         cost = "жовтень";
//         alert(`Число ${month} - це місяць ${cost}.`);
//         break;
//     case 11:
//         cost = "листопад";
//         alert(`Число ${month} - це місяць ${cost}.`);
//         break;
//     case 12:
//         cost = "грудень";
//         alert(`Число ${month} - це місяць ${cost}.`);
//         break;
//     default:
//         alert("Введено некоректне число. Введіть число від 1 до 12.");
//         break;
// }

// console.log(cost);

// 5 task - //Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

const inputNumber = prompt("Введіть тризначне число:");
const number = parseInt(inputNumber);

if (!isNaN(number) && inputNumber.length === 3) {
    const digit1 = parseInt(inputNumber[0]);
    const digit2 = parseInt(inputNumber[1]);
    const digit3 = parseInt(inputNumber[2]);

    const sum = digit1 + digit2 + digit3;

    alert(`Сума цифр тризначного числа ${number}: ${sum}`);
} else {
    alert("Введено некоректне тризначне число.");
}