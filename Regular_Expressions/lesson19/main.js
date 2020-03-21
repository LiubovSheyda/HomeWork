
//2
console.log("// Task %d //",2);

let str = 'a1b c34d x567z';
let end = str.match(/\-?\d+/g);

let sum = 0;
for (var i = end.length - 1; i >= 0; i--) {
	sum += +end[i];
}

console.log(sum);





