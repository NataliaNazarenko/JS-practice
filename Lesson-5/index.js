// замикання

function createNewSum(n) {
    return function() {
        console.log(10 * n);
    }
};

const calc = createNewSum(23);
calc();

function createNewNumber(n) {
    return function(num) {
        return n + num;
    };
};

const addFive = createNewNumber(10);
console.log(addFive(20));

function createURL(domain) {
    return function(url) {
        return `https://${url}.${domain}`;
    };
};

const conUrl = createURL("com");
console.log(conUrl("google"));