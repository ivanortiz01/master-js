'use strict'

window.addEventListener('load', function () {
    var formulario = document.querySelector("#formpeliculas");
    formulario.addEventListener('submit', function () {
        var titulo = document.querySelector("#addpelicula").value;
        if (titulo.length > 0) {
            localStorage.setItem(titulo, titulo);
            window.location.href = "#";
        }
    });

    var formularioDel = document.querySelector("#formBorraPeliculas");
    formularioDel.addEventListener('submit', function () {
        var titulo = document.querySelector("#delpelicula").value;
        if (titulo.length > 0) {
            localStorage.removeItem(titulo);
            window.location.href = "#";
        }
    });

    var ul = document.querySelector("#peliculaslist");
    for (var i in this.localStorage) {
        if (typeof this.localStorage[i] == "string") {
            var li = document.createElement("li");
            li.append(this.localStorage[i]);
            ul.append(li);
        }
    }
});