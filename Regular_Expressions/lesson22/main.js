
//2
console.log("// Task %d //",2);

let str = 'sss site.ru zzz site.com kkk';

let res = str.replace(/[0-9a-z]+\.[0-9a-z]{2,}/g, "http://$&");

console.log(res);