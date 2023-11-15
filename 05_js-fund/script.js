/* ------------------------ */
function imc(peso, altura) {
    const idm = peso / altura**2
    if (idm <= 18.5) {
        return 'Bajo peso'
    } else if (idm > 18.5 && idm <=25) {
        return 'Normal'
    } else {
        return'Sobrepeso'
    }
}
console.log(90 / 2.2**2)
console.log(imc(90,2.2))

let año = 1601;
var siglo = Math.floor((año - 1)/100) + 1;
/* siglo = Number((año /100).toFixed());
 */
console.log(siglo)
console.log(typeof(siglo))
console.log(siglo)

let namesxasv = ["pepe", 'juan', 'pepelu', 'rocio'];
let lengthxx = 4;
let result = [];
console.log(namesxasv[2].length)
  for (let name of namesxasv) {
    if (name.length <= lengthxx) {
        result.push(name)
        console.log(name)
    }
  }
  console.log(result)

  let palabbra= 'hambre'
  let conv = palabbra.split('').reverse().join('')
  console.log(conv) 