'use strict'

var sumar = 0;
var contador = 0;

do {
    var numero = parseInt(prompt('Introduce numero hasta ingresar uno negativo:'));
    if (isNaN(numero)) {
        numero = 0;
    } else if (numero >= 0) {
        sumar += numero;
        contador++;
    }

    console.log("Suma Temporal: " + sumar);
    console.log("Contador Temporal: " + contador);

} while (numero >= 0);

alert('La suma de todos los numeros es: ' + sumar);
alert('La media de todos los numeros es: ' + (sumar/contador));