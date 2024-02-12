import './style.css';
import isEmail from 'validator/lib/isEmail';
import isURL from 'validator/lib/isURL';
import toDate from 'validator/lib/toDate';
var moment = require('moment');


console.log(isEmail('foo@bar.com')); //=> true
console.log(isURL('hello')); //=> false
console.log(isURL('https://google.com')); //=> true
console.log(toDate('2020-01-01')); //=> 2020-01-01
console.log(toDate('foo@bar.com')); //=> null
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format("MMM Do YY"));