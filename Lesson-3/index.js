// області видимості

const s = 10;
console.log(s);  //global

if (true) {
    const d = 5;
    console.log(d);  //block
};

// цикли while/do_while/for

// let a = 0;
// while (a < 5) {
//     a += 1;
//     console.log(a);
// };

// let d = 3;
// while (d) {
//     d -= 1;
//     console.log(d);
// };

// let f = 3;
// while (f) {
//     console.log(f);
//     f -= 1;
// };

// let k = 0;
// do {
// console.log(k);
// k +=2
// } while (k < 10);

// for (let b = 0; b < 8; b+=1) {
//     console.log(b);   
// };

// break && continue

// let sum = 0;
// while (true) {
//     let value = +prompt('Your number');
//     if (!value) break;
//     sum += value;
// };
// console.log(sum);

// for (let i = 0; i < 8; i+=1) {
//     if (i % 2 === 0) continue;
//     console.log(i); 
// };

// масиви

let arr = ["Apple", "Orange", "Banana"];

arr[2] = "Lemon";
arr[3] = "Cherry";
console.log(arr[1]);
console.log(arr);
console.log(arr.length);

