// замикання

// Замикання (closure) - це зв'язок між функцією та її ланцюжком областей
// видимості.
// Цей механізм можливий завдяки лексичному оточенню. При виклику функції, її
// лексичне оточення отримує посилання ту область видимості, де функція було
// оголошено (зовнішнє лексичне оточення), цим отримуючи доступом до змінним
// із неї, буквально утримуючи у пам'яті таблицю доступних змінних.
// Разом, замикання це термін який описує здатність функції запам'ятовувати
// лексичне оточення в якому вона була оголошена, і продовжувати отримувати
// доступ до змінних з цього лексичного оточення незалежно від того, де вона була
// викликана.
// Тобто: функції автоматично запам’ятовують, де вони були створені,
// використовуючи приховану властивість [[Environment]], а потім їхній код може
// отримати доступ до зовнішніх змінних.
// Коли під час співбесіди розробник отримує запитання “що таке замикання?”
// ,
// правильною відповіддю буде визначення замикання та пояснення, що всі функції
// в JavaScript є замиканнями, і, можливо, ще кілька слів про технічні деталі:
// властивість [[Environment]], і як взагалі працюють лексичні середовища.

// function createNewSum(n) {
//     return function() {
//         console.log(10 * n);
//     }
// };

// const calc = createNewSum(23);
// calc();

// function createNewNumber(n) {
//     return function(num) {
//         return n + num;
//     };
// };

// const addFive = createNewNumber(10);
// console.log(addFive(20));

// function createURL(domain) {
//     return function(url) {
//         return `https://${url}.${domain}`;
//     };
// };

// const conUrl = createURL("com");
// console.log(conUrl("google"));

// this

// Ключове слово this є однією з найзаплутаніших частин JavaScript на старті
// вивчення.
// Необхідно засвоїти лише одне правило для визначення this.
// Значення контексту всередині функції визначаться над момент її створення, а
// момент виклику. Тобто значення цього визначається тим, як викликається
// функція, а не де вона була оголошена.
// У глобальній області видимості, якщо скрипт виконується не в строгому режимі,
// this посилається на об'єкт window. У строгому режимі значення this, в глобальній
// області видимості, буде undefined.
// Якщо функція була викликана як метод об'єкта, контекст буде посилатися на
// об'єкт, частиною якого є метод

// Методи об’єкту,
// "this"
// Об’єкти зазвичай створюються для представлення сутностей реального світу,
// таких як користувачі, замовлення тощо:
// let user = {
// name: "Іван"
// ,
// age: 30
// };
// І в реальному світі користувач може діяти: вибрати щось із кошика для покупок,
// авторизуватися, виходити із системи тощо.
// Дії представлені в JavaScript функціями у властивостях об’єкта.
// user.sayHi = function() {alert("Привіт!");}; user.sayHi(); // Привіт!
// Як правило, метод об’єкта повинен отримувати доступ до інформації, що
// зберігається в об’єкті, для виконання своєї роботи.
// Наприклад, коду всередині user.sayHi() може знадобитися ім’я, що зберігається в
// об’єкті user.
// Для доступу до інформації всередині об’єкта метод може використовувати
// ключове слово this.
// this у функціях зворотного виклику
// Коли ми передаємо метод, який використовує this, як параметр, який буде
// використовуватися як функція зворотного виклику, буде проблема. Вирішення
// цієї проблеми розглядається в наступній секції.
// const hotel = {
// name: 'Resort Hotel'
// ,
// showThis() {
// console.log(this);
// },
// };
// Під час виклику fn, callback буде посиланням на функцію showThis об'єкта hotel. Її
// виклик відбувається у глобальному контексті, про hotel вона нічого не знає.
// Відповідно this не посилатиметься на hotel
// const fn = function(callback) {
// callback();
// };
// Передається посилання на функцію, а її виклик.
// fn(hotel.showThis);
// Стрілочні функції
// Стрілочні функції не мають свого this. На відміну від звичайних функцій, змінити
// значення цієї всередині стрілки після її оголошення не можна.


// function hello() {
//     console.log("hello", this);
// };

// hello();

// const user = {
//     name: "Nata",
//     city: "Odessa",
//     sayHello: hello,
// };

// user.sayHello();

// function abc() {
//     console.log("This function");
//     console.log(this);
// };

// document.querySelector('p').onclick = abc;

// function changeColor() {
//     console.log(this);
//     this.style.backgroundColor = "blue";
// };

// document.querySelector("div").onclick = changeColor;

// function changeColor() {
//     this.style.backgroundColor = "green";
// };

// let user = document.querySelectorAll('div');
// user.forEach(function(element) {
//     element.onclick = changeColor;
// });

// стрілочна функція і this

// const showList = () => {
//     console.log(this);
// };
// showList();

// let list = {
//     names: ['Anna', 'Olga', 'Nata'],
//     showList: showList,
// };

// list.showList(); // у стрілочної функції немає this

// вбудовані методи bind

// Методи функцій call, apply, bind
// Присвоєння функції як методу об'єкта може здатися гарною ідеєю. Але чи варто
// зберігати такі методи? Дублювання вже існуючих функцій як методів об'єкта
// займатиме ресурси, не приносячи жодних помітних вигод.
// Запам'ятати правило використання call досить легко: метод call викличе функцію
// fnпередавши її це посилання на об'єкт obj, а також аргументи arg1, arg2 і т.д.
// const userInfo = {
// name: "name",
// age: 98,
// logInfo: function (job) {
// console.group(`${name} info:`);
// console.log(`Name is : ${this.name}`);
// console.log(`Age is : ${this.age}`);
// console.log(`Job is : ${job}`);
// console.groupEnd();
// },
// };
// const Vano = {
// name: "Ivan",
// age: 45,
// };
// userInfo.logInfo.call(Vano,"developer");

// Метод apply повний аналог методу call крім того, що синтаксис виклику
// аргументів вимагає не перерахування, а масив.
// const showUserInfo = {
// name: name,
// logInfo: function (job, city) {
// console.group(`${name} info:`);
// console.log(`Name is : ${this.name}`);
// console.log(`Age is : ${this.age}`);
// console.log(`Job is : ${job}`);
// console.log(`City is : ${city}`);
// console.groupEnd();
// },
// };
// const Vano = {
// name: "Ivan",
// };
// showUserInfo.logInfo.apply(Vano, ["developer","Lviv"]);

// Метод bind створює копію функції fn з прив'язаним контекстом obj та
// аргументами arg1, arg2 тощо, після чого повертає її як результат своєї роботи. В
// результаті ми отримуємо копію функції з прив'язаним контекстом, яку можна
// передати куди завгодно і викликати будь-коли.
// Найчастіше метод bind використовується для прив'язки контексту передачі
// методів об'єкта як функцій зворотного виклику. Візьмемо проблемний приклад із
// попередньої секції. Завдання прив'язки контесту ми можемо вирішити
// використовуючи метод bind, передавши функцією зворотного виклику копію
// методу з прив'язаним контекстом.

// function hello() {
//     console.log(this);
// };

// const user = {
//     name: 'Mango',
//     age: 30,
//     hello: hello,
//     sayHelloWindow: hello.bind(window),
//     info: function(city) {
//         console.log(`Name is ${this.name}`);
//         console.log(`Age is ${this.age}`);
//         console.log(`City is ${city}`);
//     },
// };

// user.hello();
// user.sayHelloWindow();
// user.info();

// const Apple = {
//     name: 'Apple',
//     age: 25,
// };

// const Kiwi = {
//     name: 'Kiwi',
//     age: 35,
// };

// user.info.bind(Apple)("Kyiv");
// user.info.bind(Kiwi, "Odessa")();
// const kiwiInfo = user.info.bind(Kiwi, "Odessa");
// kiwiInfo();

// вбудовані методи call

// const userInfo = {
//     name: "name",
//     age: 50,
//     logInfo: function(job) {
//         console.group(`${name} info`);
//         console.log(`Name is ${this.name}`);
//         console.log(`Age is ${this.age}`);
//         console.log(`Job is ${job}`);
//         console.groupEnd();
//     },
// };

// const Natalia = {
//     name: "Nata",
//     age: 39,
// };

// userInfo.logInfo.call(Natalia, 'developer');

// вбудовані методи apply

// const showUserInfo = {
//     name: "name",
//     age: 40,
//     logInfo: function(job, city) {
//         console.group(`${name} info`);
//         console.log(`Name is ${this.name}`);
//         console.log(`Age is ${this.age}`);
//         console.log(`Job is ${job}`);
//         console.log(`City is ${city}`);
//         console.groupEnd();
//     },
// };

// const Nata = {
//     name: "Nata",
//     age: 39,
// };

// showUserInfo.logInfo.call(Nata, 'developer', 'Lviv');
// showUserInfo.logInfo.apply(Nata, ['developer', 'Kyiv']);

// task 1

// const message = function(name, stars) {
//     console.log(`${name}, Welcome to ${this.hotel}, stars ${stars}`);
// };

// const Bukovel = {hotel: 'Bukovel'};
// const Margo = {hotel: 'Margo'};

// message.call(Bukovel, 'Nata', 5);
// message.call(Margo, 'Nata', 5);

// message.apply(Bukovel, ['Nata', 5]);
// message.apply(Margo, ['Nata', 5]);

// message.bind(Bukovel, 'Nata', 5)();
// message.bind(Margo, 'Nata', 5)();

// task 2

const cart = {
    showItems() {
        console.log("This is", this.items);
    },
};

const woman = {
    items: ["shoes, jewelry, jacket"],
};

const man = {
    items: ["shoes, audio, jacket"],
};

const kid = {
    items: ["just, bucket, towel"],
};

document.querySelector("#wom").addEventListener("click", cart.showItems.bind(woman));

document.querySelector("#man").addEventListener("click", cart.showItems.bind(man));

document.querySelector("#kid").addEventListener("click", cart.showItems.bind(kid));

// task 3

const infoCar = {
    name: "BMW",
    model: "X5",
    color: "black",
    showInfo: function() {
        console.log("Car: " + this.name + " model: " + this.model + " color: " + this.color);
    },
};

infoCar.showInfo();

newCar = {
    name: "Opel",
    model: "Astra",
    color: "white",
};

infoCar.showInfo.bind(newCar)();
infoCar.showInfo.call(newCar);
infoCar.showInfo.apply(newCar);
