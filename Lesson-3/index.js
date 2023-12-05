// області видимості

const s = 10;
console.log(s);  //global

if (true) {
    const d = 5;
    console.log(d);  //block
};

// цикли

let a = 0;

while (a < 5) {
    a += 1;
    console.log(a);
};

