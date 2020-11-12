'use strict'

window.addEventListener('load', function () {
    this.console.log("DOM Cargado!!!");

    var boxDashed = this.document.querySelector(".dashed");
    boxDashed.style.display = "none";

    var formulario = this.document.querySelector("#formulario");
    formulario.addEventListener('submit', function () {
        console.log("Evento submit capturado");

        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);

        console.log(nombre + ", " + apellidos + ", " + edad);

        if(nombre.trim()==null || nombre.trim().length == 0) {
            alert("El nombre no es valido.");
            document.querySelector("#error_nombre").innerHTML = "El nombre no es valido.";
            return false;
        } else {
            document.querySelector("#error_nombre").style.display = "none";
        }

        if(apellidos.trim()==null || apellidos.trim().length == 0) {
            alert("Los apellidos no son validos.");
            return false;
        }

        if(edad==null || edad <= 0 || isNaN(edad)) {
            alert("La edad no es valida.");
            return false;
        }

        // var datos_usuarios = [nombre, apellidos, edad]
        // for(var indice in datos_usuarios ){
        //     var parrafo = document.createElement("p");
        //     parrafo.append(datos_usuarios[indice]);
        //     boxDashed.append(parrafo);
        // }

        var p_nombre = document.querySelector("#p_nombre span");;
        var p_apellidos = document.querySelector("#p_apellidos span");
        var p_edad = document.querySelector("#p_edad span");

        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = nombre;
        
        boxDashed.style.display = "block";
    });
});