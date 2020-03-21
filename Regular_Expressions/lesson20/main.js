
//2
console.log("// Task %d //",2);

let str = '31.12.2025';

let res = str.match(/^(0?[1-9]|[12][0-9]|3[01])\.(0?[1-9]|1[012])\.(\d{4})$/)

console.log(res[1]); 
console.log(res[2]); 
console.log(res[3]); 