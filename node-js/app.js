'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// carga archivo rutas
var projectRoutes = require('./routes/project');

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors

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