'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// carga archivo rutas
var projectRoutes = require('./routes/project');

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurar cabeceras y cors
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

// rutas

app.get("/test", (req, res) => {
    res.status(200).send(
        "<h1>Pagina de inico</h1>"
    )
})

app.post("/test/:id", (req, res) => {
    console.log(req.body.nombre);
    console.log(req.query.web);
    console.log(req.params.id);

    res.status(200).send({
        message: "Hola mundo desde mi api nodejs"
    })
})

// app.use('/', projectRoutes);
app.use('/api', projectRoutes);

// exportar
module.exports = app;