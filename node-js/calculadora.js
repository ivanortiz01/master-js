'use strict'

console.log("Hola mundo con nodejs");

var params = process.argv.slice(2);
console.log(params);

var numero1 = parseFloat(params[0]);
var numero2 = parseFloat(params[1]);
console.log("numero 1: " + numero1);
console.log("numero 2: " + numero2);

var plantilla = `
Suma es: ${numero1 + numero2}
Resta es: ${numero1 - numero2}
Multiplicación es: ${numero1 * numero2}
División es: ${numero1 / numero2}
`;
console.log(plantilla);