const text = "Codeable";

for (let char of text) {
  console.log(char);
}
const numeros = [];

while (numeros.length <= 5) {
  const aleatorio = Math.round(Math.random() * 100);
  numeros.push(aleatorio);
}

console.log(numeros);


const names = ["Juan", "Alejandro", "Tom", "Maria"];
function filterNames(names) {
	const result = [];

  for (filtered of names) {
		if (filtered.length < 5) {
			result.push(filtered);
		}   
	}

	return result;
}
console.log(filterNames(names));