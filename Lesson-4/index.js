// функції

function showMessageHello() {
    console.log('Hello!');
};

showMessageHello();

function showMessage(name, city) {
    console.log(`Hello, my name is ${name}. I'm from ${city}.`);
};

showMessage("Nata", "Kyiv");

const sayHi = function() {
    console.log("Hi");
};

sayHi();

const userName = "Margo!";
const sayHello = function() {
    let message = "Hello ";
    console.log(message + userName);
};

sayHello();

function sum(a, b) {
    return a + b;
};

let result = sum(7, 5);
console.log(result);

// аргументи and rest

const addArguments = function() {
    const arg = Array.from(arguments);

    console.log(arguments);
    console.log(arg);
};

addArguments(1, 2, 3);
addArguments(4, 8, 7, 65, 100);

const addName = function(...arg1) {
  
    console.log(arg1);
};

addName(89, 52, 73);

// callback

function ask(question, yes, no) {
    if(confirm(question)) {
        yes();
    } else {
        no();
    };
};

function showOk() {
    console.log("You say ok!");
};

function showCancel() {
    console.log("You say no!");
};

ask("Yes or no?", showOk, showCancel);


