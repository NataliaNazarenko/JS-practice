// hw task 1
// Напишіть код, щоб вибрати елемент з атрибутом data-widget-name з документа
// та прочитати його значення.
// <!DOCTYPE html>
// <html>
// <body>
// <div data-widget-name="menu">Виберіть жанр</div>
// <script>/* ваш код */</script>
// </body>
// </html>

const data = document.querySelector('[data-widget-name]');
console.log(data);
const attributes = data.getAttribute('data-widget-name');
console.log(attributes);
const text = data.textContent;
console.log(text);