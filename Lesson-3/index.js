// області видимості

// const s = 10;
// console.log(s);  //global

// if (true) {
//     const d = 5;
//     console.log(d);  //block
// };

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

// let arr = ["Apple", "Orange", "Banana"];

// arr[2] = "Lemon";
// arr[3] = "Cherry";
// console.log(arr[1]);
// console.log(arr);
// console.log(arr.length);

// arr.push('Tomato');
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift('Kiwi');
// console.log(arr);

// for (let i = 0; i < arr.length; i+=1) {
//     const element = arr[i];
//     console.log(element);
// };

// for (let item of arr) {
//     const items = item;
//     console.log(items);
// };

// for (let key in arr) {
//     console.log(arr[key]);
//     console.log(key);
// };

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];

// console.log(matrix[0][2]);

// методи присвоєння - прості за значенням, складні за посиланням

// let a = 5;
// let b = a;

// a = 10;

// console.log(b);
// console.log(a);

// const arr = [1, 2, 3];
// const arr2 = arr;
// arr.push(4);
// console.log(arr);
// console.log(arr2);

// методи масиву

let array = ['a', 'b', 'c', 'd', 'f'];

// array.splice(3, 1);
// array.splice(1, 2);
// console.log(array);

// console.log(array.slice(1, 3));
// console.log(array.slice(1, 2));
// console.log(array.slice(1, 4));

let arr = [1, 2, 3, 4, 5];

// console.log(array.concat(arr));

// console.log(arr.indexOf(4));
// console.log(array.indexOf('c'));
// console.log(array.indexOf('b', 3));
// console.log(array.indexOf('b', 1));
// console.log(array.indexOf('b'));

// console.log(array.lastIndexOf('d', 4));
// console.log(array.lastIndexOf('d', 1));

console.log(array.includes('c'));
console.log(arr.includes(7));

const fruts = [
    {id: 0, name: 'apple'},
    {id: 1, name: 'orange'},
    {id: 2, name: 'kiwi'},
    {id: 3, name: 'banana'},
    {id: 4, name: 'mango'},
    {id: 5, name: 'cherry'},
];

console.log(fruts.find(frut => frut.id === 2));
console.log(fruts.filter(frut => frut.id > 2));

let result = fruts.map(frut => frut.name.length);
console.log(result);

let name = 'Olga, Anna, Nata, Margo, Oleh';
let arr2 = name.split(', ');
console.log(arr2);

let newString = arr2.join(', ');
console.log(newString);

