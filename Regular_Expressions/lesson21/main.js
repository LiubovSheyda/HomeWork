
//1
console.log("// Task %d //",1);

let str = '12 34 56 78';

let res = str.replace(/(([1-9])([1-9]))/g, '$3$2');
console.log(res);