var express = require('express');
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

app.use(express.static('client'));

app.get("/hola-mundo", function(req, res) {
    res.status(200).send({
        message: "Hola mundo desde una ruta"
    })
});

var messages = [{
    id: 1,
    text: 'Bienvenido al chat...',
    nickname: 'Bot'
}];

io.on('connection', function(connect) {
    console.log("Nodo conectado: " + connect.handshake.address);

    connect.emit('messages', messages);

    connect.on("add-message", function(message) {
        messages.push(message);
        io.emit('messages', messages);
    });
});

var port = 6677;
server.listen(port, function() {
    console.log("Servidor iniciado en http://localhost:" + port);
});