// DOM - об'єктна модель документа (Document Object Model).

let elem = document.getElementById('elem');
elem.style.background = 'green';

let elements = document.querySelectorAll('ul>li:last-child');
for(element of elements) {
    console.log(element);
};

let elementLi = document.querySelector('li');
console.log(elementLi);

// Зверху: documentElement і body
// Найвищі вузли дерева доступні безпосередньо як властивості document:
// <html> = document.documentElement
// Найвищий вузол документа – document.documentElement. Це вузол DOM тегу
// <html>.
// <body> = document.body
// Для доступу до DOM вузлу <body> часто використовують елемент –
// document.body.
// <head> = document.head
// Тег <head> доступний як document.head.
// Дочірні елементи: childNodes, firstChild, lastChild
// Відтепер ми будемо використовувати два терміни:
// Дочірні вузли (або діти) – елементи, які є безпосередніми дітьми. Іншими
// словами, вони вкладені саме в цей вузол. Наприклад,
// <head> і <body> є
// дочірніми елементами <html>.
// Нащадки – всі елементи, які вкладені в даний, включаючи дітей, їхніх дітей
// тощо.
// Вузли HTML-дерева мають ієрархічне відношення один до одного. Терміни
// ancestor (предок), descendant (нащадок), parent (батько), child (дитина) і sibling
// (сусід) використовуються для опису відносин.
// У дереві вузлів верхній вузол називається кореневим (root node).
// Кожен вузол, окрім root node, має лише одного з батьків.
// У вузла може бути скільки завгодно дітей.
// Сусіди - це вузли із спільним батьком.
// Дочірні елементи (діти) – елементи, які лежать безпосередньо всередині цього.
// Нащадки – всі елементи, які лежать усередині цього, разом із їхніми дітьми, дітьми
// їхніх дітей тощо. Тобто все піддерево.
// Ви можете використовувати такі властивості для навігації між вузлами.
// elem.parentNode - вибере батька elem.
// elem.childNodes - псевдомасив зберігає всі дочірні елементи, включаючи текстові.
// elem.children - псевдо-масив зберігає лише дочірні вузли-елементи, тобто
// відповідні тегам.
// elem.firstChild – вибере перший дочірній елемент усередині elem, включаючи
// текстові вузли.
// elem.firstElementChild – вибере перший дочірній вузол-елемент усередині elem.
// elem.lastChild – вибере останній дочірній елемент усередині elem, включаючи
// текстові вузли.
// elem.lastElementChild - вибере останній дочірній вузол-елемент усередині elem.
// elem.previousSibling - вибере елемент "зліва" від elem (його попереднього сусіда)
// elem.previousElementSibling - вибере вузол-елемент "зліва" від elem (його
// попереднього сусіда)
// elem.nextSibling - вибере елемент "праворуч" від elem (його наступного сусіда)
// elem.nextElementSibling - вибере вузол-елемент "праворуч" від elem (його
// попереднього сусіда)


// Методи і властивості для роботи з DOM

// querySelectorAll

// querySelector

// getElementsBy*


let elementDiv = document.getElementsByTagName('div');
console.log(elementDiv);

// Властивості
// Під час побудови DOM-дерева багато стандартних HTML-атрибутів стають
// властивостями вузлів. Подивимося на кілька властивостей, що часто
// використовуються.
// hidden – контролює видимість елемента.
// value - містить поточний текстовий контент елементів input, select, textarea.
// checked - зберігає стан чекбоксу чи радіокнопки.
// name - зберігає значення, вказане в HTML-атрибуті name.
// src – шлях до зображення тега <img>.

let textHidden = document.getElementById('textHidden');
console.log(textHidden);
textHidden.hidden = true;

let messageText = document.getElementById('message');
console.log(messageText.value);

let textLorem = document.querySelector('.text-lorem');
console.log(textLorem.textContent);

let textHello = document.querySelector('.text-hello');
console.log(textHello.textContent);
textHello.textContent = 'Hello, Oleg!';
console.log(textHello.textContent);

let btn = document.querySelector('.button');
btn.style.backgroundColor = 'red';

let textContent = document.querySelector('#p_text');
console.log(textContent.classList);
console.log(textContent.classList.contains('red'));
textContent.classList.remove('red');
console.log(textContent.classList.contains('red'));
textContent.classList.add('green');
console.log(textContent.classList.contains('green'));
console.log(textContent.classList);

let image = document.querySelector('.image');
console.log(image.hasAttribute('src'));
console.log(image.getAttribute('src'));



// Об'єкт містить методи для роботи з класами елемента.
// elem.classList.contains(cls) - повертає true або false, залежно від того, чи є елемент
// класу cls
// elem.classList.add(cls) - додає клас cls до списку класів елемента
// elem.classList.remove(cls) - видаляє клас cls зі списку класів елемента
// elem.classList.replace(oldClass, newClass) - замінює існуючий клас на вказаний
// elem.classList.toggle(cls) - якщо класу cls немає, додає його, якщо є, видаляє
// DOM-елементам відповідають HTML-теги, які мають текстові атрибути. Доступ до
// атрибутів здійснюється за допомогою стандартних методів. Ці методи працюють
// із значенням, що знаходиться в HTML.
// elem.hasAttribute(name) - перевіряє наявність аттрибута, повертає true чи false
// elem.getAttribute(name) - отримує значення атрибуту та повертає його
// elem.setAttribute(name, value) - встановлює атрибут
// elem.removeAttribute(name) - видаляє атрибут
// elem.attributes - властивість, що повертає колекцію всіх атрибутів елемента

const item = document.createElement('a');
item.href = '#';
item.classList.add('btn');
item.textContent = '3';

const nav = document.querySelector('.nav');
nav.appendChild(item);

const heading = document.createElement('h1');
heading.textContent = 'Bye!';

const contanier = document.querySelector('.contanier');
contanier.insertBefore(heading, nav);

// nav.removeChild(item);

item.remove();

const textClone = document.querySelector('.text-clone');
const parent = document.querySelector('.parent');
const clone = textClone.cloneNode(true);
parent.appendChild(clone);

const wrapper = document.querySelector('.wrapper');
const newText = `<p>Not, The end</p>`;
wrapper.innerHTML = newText;
contanier.innerHTML += newText;

const list = document.querySelector('#list');
list.insertAdjacentHTML("beforebegin", "<p>beforebegin</p>");
list.insertAdjacentHTML('afterbegin', '<li>afterbegin</li>');
list.insertAdjacentHTML('beforeend', '<li>beforeend</li>');
list.insertAdjacentHTML('afterend', '<p>afterend</p>');
