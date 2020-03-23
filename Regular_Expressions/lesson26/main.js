/*
лучше учесть в выражении, что цифры стоят в скобках /\[(\d+)\]/g
*/

//1
console.log("// Task %d //",1);

let str = 'aaa [2] bbb [3] ccc [12] ddd';

let result = str.replace(/\d/g, function(match) {
	return match*2;
});

console.log(result);
