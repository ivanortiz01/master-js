'use strict'

/*
1. pedir 6 numero por pantalla, almacenar en array
2. mostrar todos elementos array en el cuerpo de pagina y consola
3. ordenar array y mostrarlo
4. invertir su orden y mostrarlo
5. mostrar cuantos elementos tiene array
6. buscar de un valor introducido por el usuario, indicar si existe en array y posicion
*/

var numeros = new Array(6);
for (var i = 0; i < numeros.length; i++) {
    numeros[i] = parseInt(prompt('Ingrese numero ' + (i+1), 0));
}

mostrarArray(numeros);
console.log(numeros);

numeros.sort((a,b) => {
    return a-b;
});

mostrarArray(numeros, "Ordenada");
console.log(numeros);

numeros.reverse();

mostrarArray(numeros, "Revertida");
console.log(numeros);

document.write("<h1>Array tiene " + numeros.length + " elementos</h1>");

var busqueda = parseInt(prompt('Buscar un numero', 0));
var posicion = numeros.findIndex(numero => numero == busqueda);
if(posicion && posicion != -1) {
    document.write("<h1>ENCONTRADO</h1>")
    document.write("<h1>Posicion de busqueda: " + posicion + "</h1>")
} else {
    document.write("<h1>NO ENCONTRADO</h1>")
}


function mostrarArray(array, mensaje = "") {
    document.write("<h1>Contenido del array " + mensaje + "</h1>");
    document.write("<i>indice - elemento</i><br/>");
    document.write("<ul>");
    array.forEach((element, index) => {
        document.write("<li>" + index + " - " + element + "</li>");
    });
    document.write("</ul>");
}