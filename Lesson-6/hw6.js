// hw 1

// Створити телефонну книгу
// створити початковий клас Abonent, де зберігатимуться ім*я і номер
// створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні

class Abonent {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    };

    setName(name) {
        this.name = name;
    };

    setNumber(number) {
        this.number = number;
    };

    getName() {
        return `"Name : ${this.name}", Phone number : ${this.number}`;
    };
};

const user1 = new Abonent("Vasyl", 123456789);
const user2 = new Abonent("Petya", 987654321);
const user3 = new Abonent("Kolya", 123456789);

console.log(user1.getName());
console.log(user2.getName());
console.log(user3.getName());
