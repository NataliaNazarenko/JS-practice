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

class Bank {
    static type = 'bank';
    constructor(options) {
        this.summa = options.summa;
        this.month = options.month;
        this.p = options.p;
    };

    credit() {
        return console.log(this.summa + this.p * this.month);
    };
};

const userBank = new Bank({
    summa: 50000,
    month: 24,
    p: 1500,
});

userBank.credit();
console.log(userBank.type); //undefined
console.log(Bank.type);
