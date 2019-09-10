var socket = io.connect('http://172.20.3.191:6677', { 'forceNew': true });

socket.on('messages', function(messages) {
    console.log(messages);
    render(messages);
});

function render(data) {
    var html = data.map(function(message, index) {
        return (`
            <div class="message">
                <strong>${message.nickname}</strong> dice: 
                <p>${message.text}</p>
            </div>
        `)
    }).join(' ');

    var div = document.getElementById("mensajes");
    div.innerHTML = html;
    div.scrollTop = div.scrollHeight;
}

function addMessage(event) {
    var message = {
        nickname: document.getElementById("nickname").value,
        text: document.getElementById("text").value
    }

    document.getElementById("nickname").style.display = "none";

    socket.emit("add-message", message);

    return false;
}