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

function changeColor() {
    console.log(this);
    this.style.backgroundColor = "blue";
}

document.querySelector("div").onclick = changeColor;