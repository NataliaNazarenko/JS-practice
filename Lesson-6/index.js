// Процедурне програмування — набір не пов'язаних функцій і змінних для
// зберігання та обробки інформації. 

const summa = 20000;
const month = 12;
const p = 1000;

const credit = (summa, date, p) => {
    return summa + p * date;
};

console.log(credit(summa, month, p));

// Об'єктно-Орієнтоване Програмування (ООП) - один з методів програмування,
// який розглядає програму як множину «об'єктів», що взаємодіють між собою.
// ООП представляє програмне забезпечення як сукупність взаємних об'єктів, а не
// просто набір команд чи функцій як у традиційному програмуванні.

const sumCredit = {
    summa: 20000,
    month: 12,
    p: 1000,
    result() {
        return this.summa + this.p * this.month;
    },
};

console.log(sumCredit.result());

// Клас - спосіб опису сутності, що визначає стан і поведінку, що залежить від цього
// стану, а також правила для взаємодії з цією сутністю (контракт).

// class Bank {
//     static type = 'Privat';
//     constructor(options) {
//         this.summa = options.summa;
//         this.month = options.month;
//         this.p = options.p;
//     };

//     credit() {
//         return console.log("I am Privat");
//     };
// };

// const userBank = new Bank({
//     summa: 50000,
//     month: 24,
//     p: 1500,
// });

// userBank.credit();
// console.log(userBank.type); //undefined
// console.log(Bank.type);

// class newBank extends Bank {
//     constructor(options) {
//       super(options);
//       this.card = options.card;
//    };

//    credit() {
//     super.credit();
//     return console.log("I am Aval");
//    };
// };

// const userNewBank = new newBank({
//     summa: 150000,
//     month: 36,
//     p: 2500,
//     card: true,
// });

// console.log(userNewBank.card);
// console.log(userNewBank.credit());

// get and set 

class User {
    constructor(props) {
        this.name = props.name;
    };

    firstName = '';
    lastName = '';
    age = '';
    city = '';

    set name(newName) {
        const newRow = newName.split(" ");
        this.firstName = newRow[0];
        this.lastName = newRow[1];
    };

    get name() {
        return `First name : ${this.firstName} , Last name : ${this.lastName}`;
    };
};

const newUserNata = new User({
    name: 'Natalia Nazarenko',
});

const newUserDasha = new User({
    name: 'Dasha Heppy',
});

console.log(newUserNata);
console.log(newUserDasha);

// prototype

const pr = [1, 2, 3];
console.log(pr);

const r = {
    x: 1,
    y: 2,
};

const t = Object.create(r);
console.log(t);
console.log(t.x);

// приклад 1

// const Manager = function(name, sale) {
//     this.name = name;
//     this.sale = sale;

    // this.sales = function() {
    //     this.sale +=1;
    // };
// };

// const anna = new Manager("Anna", 2);
// const mango = new Manager("Mango", 5);

// console.log(anna.sale);
// anna.sales();
// console.log(anna.sale);

// Manager.prototype.sales = function() {
//     this.sale +=1
// };

// console.log(anna.sale);
// anna.sales();
// console.log(anna.sale);

// console.dir(Manager);

// приклад 2

// class CoffeMachine {
//     _water = 0;
//     #waterLimit = 500;

//     constructor(power) {
//         this.power = power;
//     };

//     set waterAmount(value) {
//         if(value < 0) {
//             value = 0;
//         };
//         this._water = value;
//     };
// };

// let coffeMaghine = new CoffeMachine(1500);

// console.log(coffeMaghine);
// coffeMaghine.waterAmount = 20;
// console.log(coffeMaghine);


// Об'єкт

// const user = {
//     name: "John",
//}
