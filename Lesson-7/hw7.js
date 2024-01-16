// hw 1
// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома
// методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у
// властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей

// function Calculator() {
//     this.read = function() {
//         this.value1 = +prompt("Введіть перше значення");
//         this.value2 = +prompt("Введіть друге значення");
//     };

//     this.sum = function() {
//         return this.value1 + this.value2;
//     };

//     this.mul = function() {
//         return this.value1 * this.value2;
//     };
// }

// let calculator = new Calculator();
// calculator.read();
// let sumResult = calculator.sum();
// let mulResult = calculator.mul();

// console.log("Сума: " + sumResult);
// console.log("Множення: " + mulResult);