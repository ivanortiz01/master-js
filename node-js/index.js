'use strict'

var mongoIp = "";
var mongoose = require("mongoose");
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://" + mongoIp + ":27017/portafolio")
        .then(() => {
            console.log("Conectado a MongoDB con Exito");

            //Creacion servidor
            app.listen(port, () => {
                console.log("Servidor corriendo correctamente en url: localhost:3700")
            });
        })
        .catch((err) => {
            console.log("ERRROR De Conexión: " + err)
        })