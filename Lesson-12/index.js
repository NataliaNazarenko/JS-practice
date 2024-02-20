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