
//2
console.log("// Task %d //",2);

console.log(/^ht+ps?:\/\//.test('http://vk.com')); 
console.log(/^ht+ps?:\/\//.test('https://youtube.com')); 

//4
console.log("// Task %d //",4);

console.log(/jpe?g$/.test('jpg'));
console.log(/jpe?g$/.test('jpeg')); 

//6
console.log("// Task %d //",6);

console.log(/^\d{1,12}$/.test('123456789012'));

//8
console.log("// Task %d //",8);

console.log(/^(0?[1-9]|[12][0-9]|3[01])\.(0?[1-9]|1[012])\.\d{4}$/.test('4.12.2020'));

//10
console.log("// Task %d //",10);

console.log(/^[0-9a-z\._-]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i.test('zhigailov42@gmail.com'));