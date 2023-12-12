// 1 task  - У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruts = [
//     {id: 0, name: 'apple'},
//     {id: 1, name: 'orange'},
//     {id: 2, name: 'kiwi'},
//     {id: 3, name: 'banana'},
//     {id: 4, name: 'mango'},
//     {id: 5, name: 'cherry'},
// ];
    
      
// let result = fruts.map(frut => frut.name);
// console.log(result);

// 2 task - Виведіть парні числа від 2 до 10, використовуючи цикл for.


// for (let i = 2; i <= 10; i += 2) {
//     console.log(i);
// };

//  3 task - Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
// console.lpg( `цифра ${i}!` );
// }

// for (let i = 0; i < 5; i+=1) {
//     console.log( `цифра ${i}!` );
// }

// let a = 0;
// while (a < 5) {
//     console.log( `цифра ${a}!` );
//     a += 1;
// };

// 4 task - //Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок

// let number;

// do {
//     number = prompt("Введіть число більше за 100");

    // Перевірка, чи введено число та чи воно більше за 100
//     if (number !== null && number !== "" && !isNaN(number) && Number(number) <= 100) {
//         alert("Будь ласка, введіть число більше за 100.");
//     }

// } while (number === null || number === "" || isNaN(number) || Number(number) <= 100);

// console.log("Введено число більше за 100:", number);

// 5 task - // Вирахуйте середній вік
// const girls = [
// { age: 23, name: "Оля" },
// { age: 29, name: "Аня" },
// { age: 10, name: "Юля" },
// { age: 20, name: "Катя" },
// ];

// const girls = [
//     { age: 23, name: "Оля" },
//     { age: 29, name: "Аня" },
//     { age: 10, name: "Юля" },
//     { age: 20, name: "Катя" },
// ];

// let girlsAge = girls.map(girl => girl.age);
// console.log(girlsAge);
// let averageAge = girlsAge.reduce((summ, item) => summ + item) / girlsAge.length;
// console.log(Math.round(averageAge * 10) / 10);