'user strict'

// Use API Rest https://jsonplaceholder.typicode.com/ | https://reqres.in/ with FETCH

var divUsuarios = document.querySelector("#usuarios");
var divJanet = document.querySelector("#janet");
var usuarios = [];

getUsuarios()
    .then(function (data) { return data.json() })
    .then(users => {
        listadoUsuarios(users.data);

        return getJanet();
    })
    .then(data => data.json())
    .then(janet => {
        mostrarJanet(janet.data);

        return getInfo();
    })
    .then(data => {
        document.querySelector("#profesor").innerHTML = data;
    })
    .catch(error => {
        console.error(error);
    });

function getUsuarios() {
    return fetch('https://reqres.in/api/users');
}

function getJanet() {
    return fetch('https://reqres.in/api/users/2');
}

function getInfo() {
    var profesor = {
        nombre: "Victor",
        apellidos: "Robles",
        url: "http://mipagina.com"
    };

    return new Promise((resolve, reject) => {
        var profesorString = JSON.stringify(profesor);
        if (typeof profesorString != "string") {
            return reject('Error');
        }
        
        return resolve(profesorString);
    });
}

function listadoUsuarios(usuarios) {
    usuarios.map((user, i) => {
        let nombre = document.createElement("h2");
        nombre.innerHTML = i + " - " + user.first_name + " " + user.last_name;
        divUsuarios.appendChild(nombre);
    });

    divUsuarios.querySelector(".loading").style.display = "none";
}

function mostrarJanet(user) {
    let nombre = document.createElement("h4");
    nombre.innerHTML = user.first_name + " " + user.last_name;

    let avatar = document.createElement("img");
    avatar.src = user.avatar;
    avatar.width = "100";

    divJanet.appendChild(nombre);
    divJanet.appendChild(avatar);

    divJanet.querySelector(".loading").style.display = "none";
}
