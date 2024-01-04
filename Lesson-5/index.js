// замикання

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

// // this

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

const showUserInfo = {
    name: "name",
    age: 40,
    logInfo: function(job, city) {
        console.group(`${name} info`);
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`City is ${city}`);
        console.groupEnd();
    },
};

const Nata = {
    name: "Nata",
    age: 39,
};

showUserInfo.logInfo.call(Nata, 'developer', 'Lviv');
showUserInfo.logInfo.apply(Nata, ['developer', 'Kyiv']);