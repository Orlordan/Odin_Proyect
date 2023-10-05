console.log(23 +97)
console.log ((4 + 6 + 9)/ 77)
let max = 57;
let actual = max - 13;
let porcentage = actual / max;
console.log(porcentage)
/* Troubleshooting */
function troubleshooting() {
	const a = 1;
	const b = 1;
	let result;
	result = a + b;
	return result;
}
console.log(troubleshooting())

/* uppercase */
var str = "comer";
function capitalize (str){
    let capitalized = str[0].toUpperCase() + str.substring(1);
    console.log(capitalized)
    return capitalized
}
console.log(capitalize(str))
console.log(str.length)
function lastLetter (str){
    let part = str.substring(str.length-1);
    console.log(part)
    return part
}       
console.log(lastLetter(str))
