//setTimeout
setTimeout(() => {
    // code to be executed after a certain delay
}, 1000);

console.log(1);
setTimeout(() => {
    console.log(2), 2000
   
});

console.log(3);
console.log(4);
console.log(5);

const hello = () => {
    console.log('Hello');
};

const timeout = setTimeout(hello, 1000);
clearTimeout(timeout);

// setInterval
setInterval(() => {
    // code to be executed repeatedly
});

const world = () => {
    console.log('World');
};

const setInt = setInterval(world, 1000);
clearInterval(setInt);

const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');

let time = null;

startBtn.addEventListener('click', () => {
    time = setInterval(() => {
        console.log('Hello');
    }, 1000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(time);
    console.log('stop');
});

const a = {
    classic() {
        setTimeout(function() {
            console.log(`${this} classic in object`);
        });
    },
    arrow() {
        setTimeout(() => {
            console.log(`${this} arrow in object`);
        });
    },
};

a.classic();
a.arrow();

const data = new Date();
console.log(data);

const newData = new Date(2022, 0, 1, 0, 0, 0, 0);
console.log(newData);

const myData = new Date('2022-01-01');
console.log(myData);

const unixData = new Date(1200000);
console.log(unixData);

const newUnixData = Date.now();
console.log(newUnixData);

const newDate = new Date();
console.log(newDate.getTime());
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getMilliseconds());

const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
};

const ukr = newDate.toLocaleString('uk', options);
console.log(ukr);