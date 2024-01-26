// hw 1
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.

const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  const div = document.querySelector('#text');
  div.style.display = 'none';
});

// hw 2
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.

const hideButton = document.querySelector('#hideButton');

hideButton.addEventListener('click', () => {
  hideButton.style.display = 'none';
});

// hw 3
// Створіть дерево, яке показує/приховує дочірні вузли при кліці

const tree = document.querySelector('#tree');

tree.addEventListener('click', (event) => {
    const clickedElement = event.target;

    if (clickedElement.classList.contains('parent')) {
        // Знаходимо дочірній елемент ul
        const childList = clickedElement.querySelector('ul');

        // Перевіряємо, чи клас "hidden" вже присутній
        if (childList.classList.contains('hidden')) {
            // Якщо так, видалимо його, щоб показати дочірні вузли
            childList.classList.remove('hidden');
        } else {
            // Інакше додамо клас "hidden", щоб приховати дочірні вузли
            childList.classList.add('hidden');
        }
    }
});