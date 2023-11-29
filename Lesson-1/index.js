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

// String

let result;
result = 5 + 5 + '5';
console.log(result);
console.log(typeof result);
const num = 55;
result = `${num} cars`
console.log(result);

// методи строк

// length -довжина
// indexOf()
// includes()
// toLowerCase()
// toUpperCase()

const message = 'Hello, I am Natalia';
console.log(message.length);
console.log(message.toLowerCase());
console.log(message.toUpperCase());
console.log(message.indexOf('t'));
console.log(message.indexOf('cat'));
console.log(message.includes('hello'));
console.log(message.includes('Hello'));

// BigInt

const a = 54789214569586256n;
console.log(typeof a);


// Об"єкти і їх методи

const obj = {
    name: "Natalia",
    age: 38, "like cats": true,
}

console.log(obj['like cats']);
delete obj['like cats'];
console.log(obj);

const user = {};
user.name = 'Mango';
user.color = 'orange';
console.log(user);

// for_in
// for (key in object)

let cat = {
    name: 'Marcus',
    color: 'orange',
    age: 1.5,
};

for (let key in cat) {
    console.log(key);
    console.log(cat[key]);
};

