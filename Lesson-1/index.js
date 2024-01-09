// Змінні
// Змінна це “іменована частинка сховища”
// , в якій зберігаються дані.
// Оголосити змінну можна викорустовую let , const або var
// Використовуйте за замовчуванням const, більшість змінних будуть оголошені
// саме так.
// Використовуйте let, якщо потрібно присвоїти змінній інше значення під час
// виконання скрипту.
// Оголошення за допомогою var подібне до let. У більшості випадків ми можемо
// замінити let на var або навпаки і очікувати, що це буде працювати.
// Але var – це зовсім інший звір, який походить з дуже давніх часів. Зазвичай він не
// використовується в сучасних скриптах, але все ще може переховуватися у старих.
// Відмінність const і let полягає в тому, що const забороняє повторне надання змінної
// будь-якого значення.


// У JavaScript є вісім основних типів даних:
// Число(number)
// BigInt
// Рядок (string)
// Булевий або логічний тип (boolean)
// Null
// Undefined
// Об’єкт (object)
// Symbol

// Оператор typeof повертає тип аргументу. Це корисно, коли ми хочемо обробляти
// значення різних типів по-різному або просто хочемо зробити швидку перевірку.
// Виклик typeof x повертає рядок із назвою типу.

// String
// Рядки або просто текст. Рядок починається і закінчується одиночною '
// , або
// подвійними лапками". Відкриваюча і закриваюча лапки повинні бути однакові.
// Boolean
// Логічний тип даних, прапори стану. Має лише два значення: true та false.
// Наприклад на запитання чи включено світло в кімнаті можна відповісти так (true)
// чи ні (false).
// null
// Особливе значення, яке насправді означає ніщо. Використовується в тих
// ситуаціях, коли необхідно явно вказати відсутність значення.
// undefined
// Ще одне спеціальне значення. За умовчанням, коли змінна оголошується, але не
// ініціалізується, її значення не визначено, їй присвоюється невизначений.
// Number
// Цілі числа та числа з плаваючою комою. Після оголошення змінної можна
// ініціалізувати її числовим значенням.
// BigInt
// У JavaScript, тип “number” не може містити числа більші за (253-1) (це
// 9007199254740991), або менші за -(253-1) для від’ємних чисел. Це технічне
// обмеження, спричинене їхньою внутрішньою реалізацією.
// Значення з типом BigInt створюється через додавання n у кінець цілого числа:
// Object
// Тип object є особливим типом.
// Усі інші типи називаються “примітивами”
// , тому що їхні значення можуть містити
// тільки один елемент (це може бути рядок, число, або будь-що інше). В об’єктах же
// зберігаються колекції даних і більш складні структури.
// Symbol Символи
// “Символ” являє собою унікальний ідентифікатор.
// Створити символ можна за допомогою Symbol() Символи гарантовано будуть
// унікальними. Навіть якщо ми створюємо багато символів з однаковим описом, вони
// мають різні значення. Опис – це просто мітка, яка ні на що не впливає.

// Number

// const value = '3';
// console.log (typeof value);
// console.log(Number(value));

// перевірка на число

// const number = Number('51');
// console.log(Number.isNaN(number));

// const string = Number('hello');
// console.log(Number.isNaN(string));

// Number.parseFloat() Number.parseInt()

// console.log(Number.parseInt('5ddda'));
// console.log(Number.parseInt('51/ddda457'));
// console.log(Number.parseInt('2.fafr456'));
// console.log(Number.parseInt('bnhsw'));

// парсить у строки число з крапкою

// console.log(Number.parseFloat('5ddda'));
// console.log(Number.parseFloat('51/ddda457'));
// console.log(Number.parseFloat('2.3fafr456'));
// console.log(Number.parseFloat('bnhsw'));

// складання з крапкою

// console.log(0.1 + 0.2 === 0.3);
// console.log(0.1 + 0.2);
// console.log((0.1 * 10 + 0.2 * 10) / 10);

// Об"єкт Math

// console.log(Math.floor(1.7));
// console.log(Math.ceil(3.7));
// console.log(Math.round(1.8));
// console.log(Math.round(1.4));
// console.log(Math.max(10, 50, 40, 3, 5));
// console.log(Math.min(34, 28, -8, 45, 97));
// console.log(Math.pow(2, 4));
// console.log(Math.random());  //0-1
// console.log(Math.random() * (max - min) + min);
// console.log(Math.random() * (10 - 1) + 1);  //1-10

// String

// let result;
// result = 5 + 5 + '5';
// console.log(result);
// console.log(typeof result);
// const num = 55;
// result = `${num} cars`
// console.log(result);

// методи строк

// length -довжина
// indexOf()
// includes()
// toLowerCase()
// toUpperCase()

// const message = 'Hello, I am Natalia';
// console.log(message.length);
// console.log(message.toLowerCase());
// console.log(message.toUpperCase());
// console.log(message.indexOf('t'));
// console.log(message.indexOf('cat'));
// console.log(message.includes('hello'));
// console.log(message.includes('Hello'));

// BigInt

// const a = 54789214569586256n;
// console.log(typeof a);


// Об"єкти і їх методи

// const obj = {
//     name: "Natalia",
//     age: 38, "like cats": true,
// }

// console.log(obj['like cats']);
// delete obj['like cats'];
// console.log(obj);

// const user = {};
// user.name = 'Mango';
// user.color = 'orange';
// console.log(user);

// for_in
// for (key in object)

// let cat = {
//     name: 'Marcus',
//     color: 'orange',
//     age: 1.5,
// };

// for (let key in cat) {
//     console.log(key);
//     console.log(cat[key]);
// };

// let codes = {
//     41: 'cat',
//     58: 'dog',
//     3: 'mango',
//     64: 'poly',
//     24: 'ben',
// };

// for (let code in codes) {
//     console.log(code);
// };

