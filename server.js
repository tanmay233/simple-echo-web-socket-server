const WebSocket = require ('ws');

const PORT = 4000;

const WsSocket = new WebSocket.Server({
    port: PORT
})

WsSocket.on('connection', function(socket) {
    console.log("A Client just connected");

    socket.on('message', function(msg){

        console.log("Received message : " + msg);

        //to send message to only one client that is connected
        // socket.send("received: " + msg);

        WsSocket.clients.forEach(function(client) {
            client.send("" + msg);
            
        });
    });
});


console.log(new Date() + 'Connected to the web socket server and is running on Port: ' + PORT);