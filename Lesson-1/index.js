// Number

const value = '3';
console.log (typeof value);
console.log(Number(value));

// перевірка на число

const number = Number('51');
console.log(Number.isNaN(number));

const string = Number('hello');
console.log(Number.isNaN(string));

// Number.parseFloat() Number.parseInt()

console.log(Number.parseInt('5ddda'));
console.log(Number.parseInt('51/ddda457'));
console.log(Number.parseInt('2.fafr456'));
console.log(Number.parseInt('bnhsw'));

// парсить у строки число з крапкою

console.log(Number.parseFloat('5ddda'));
console.log(Number.parseFloat('51/ddda457'));
console.log(Number.parseFloat('2.3fafr456'));
console.log(Number.parseFloat('bnhsw'));

// складання з крапкою

console.log(0.1 + 0.2 === 0.3);
console.log(0.1 + 0.2);
console.log((0.1 * 10 + 0.2 * 10) / 10);

// Об"єкт Math

console.log(Math.floor(1.7));
console.log(Math.ceil(3.7));
console.log(Math.round(1.8));
console.log(Math.round(1.4));
console.log(Math.max(10, 50, 40, 3, 5));
console.log(Math.min(34, 28, -8, 45, 97));
console.log(Math.pow(2, 4));
console.log(Math.random());  //0-1
console.log(Math.random() * (10 - 1) + 1);  //1-10

