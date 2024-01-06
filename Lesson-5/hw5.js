// task 1
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

const student1 = {
    nameStudent: "Nata",
    specialty: "Web Developer",
    average: 5,
    missed: 3,
};

const student2 = {
    nameStudent: "Mango",
    specialty: "Web Developer",
    average: 4,
    missed: 1,
};

const student3 = {
    nameStudent: "Polly",
    specialty: "Web Developer",
    average: 3,
    missed: 6,
};


function showInfo() {
    console.log("Student: " + this.nameStudent, "specialty: " + this.specialty, "average: " + this.average, "missed: " + this.missed);
};

showInfo.call(student1);

showInfo.apply(student2);

showInfo.bind(student3)();

// task 2
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

const info = document.querySelector("#info");
const info2 = document.querySelector("#info2");
const html = {
    info: "HTML - HyperText Markup Language. It is used to create web pages. It is the most basic building block of the web. It is used to create web pages. HTML is the combination of a markup language and a code.",
};
const css = {
    info: "Cascading Style Sheets. It is used to create a web page. It is a style sheet language. It is used to create a web page. CSS is the combination of a markup language and a code.",
};

// document.querySelector("#css").addEventListener("click", function() {
//     info2.textContent = "CSS - Cascading Style Sheets";
// });
// document.querySelector("#html").addEventListener("click", function() {
//     info.textContent = "HTML - HyperText Markup Language";
// });

function addInfo() {
    return this.info;
};
document.querySelector("#css").addEventListener("click", function() {
    const cssInfo = addInfo.bind(css);
    info2.textContent = cssInfo();
});

document.querySelector("#html").addEventListener("click", function() {
    const htmlInfo = addInfo.bind(html);
    info.textContent = htmlInfo();
});

// task 3
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

const banana = {
    name: "banana",
};

const cherry = {
    name: "cherry",
};

const orange = {
    name: "orange",
};

function showSwop(price, weight) {
    console.log("Name: " + this.name, "Price: " + price, "Weight: " + weight);
};

showSwop.call(banana, 30, 4.5);

showSwop.apply(cherry, [58, 1.3]);

showSwop.bind(orange, 89, 3.4)();