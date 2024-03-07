// 1 task
// Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду,
// починаючи від from і закінчуючи to.
// Зробіть два варіанти рішення.
// Використовуючи setInterval.
// Використовуючи вкладений setTimeout

// Варіант 1: Використовуючи setInterval
function printNumbersInterval(from, to) {
    let current = from;

    let timerId = setInterval(function() {
        console.log(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

// Варіант 2: Використовуючи вкладений setTimeout
function printNumbersTimeout(from, to) {
    function print(current) {
        console.log(current);
        if (current < to) {
            setTimeout(function() {
                print(current + 1);
            }, 1000);
        }
    }

    print(from);
}

// Приклад використання:
console.log("Варіант 1 (setInterval):");
printNumbersInterval(1, 5);

console.log("Варіант 2 (setTimeout):");
printNumbersTimeout(1, 5);

// 2 task
// Вбудована функція setTimeout використовує колбек-функції. Створіть
// альтернативу яка базується на промісах.
// Функція delay(ms) повинна повертати проміс, який перейде в стан resolved через
// ms мілісекунд, так щоб ми могли додати до нього .then:
// function delay(ms) {
// ваш код
// }delay(3000).then(() => alert('виконалось через 3 секунди'));
 
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('виконалось через 3 секунди'));