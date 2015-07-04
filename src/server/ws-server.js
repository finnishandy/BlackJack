/**
 * Created by Sakari.Ruoho on 14/04/2015.
 * http://www.joezimjs.com/javascript/plugging-into-socket-io-advanced/
 */
var http = require('http');

var server = http.createServer(function(request, response) {});

var WSServer = module.exports = function(port, host) {
    this.port = port;
    this.host = host;
};


WSServer.prototype.start = function() {
    var _port = this.port;
    server.listen(_port, function() {
        console.log("Websocket server listening on port", _port);
    });
};


//module.exports = WSServer;

var io = require("socket.io")(server);

var handleClient = function (socket) {
    //socket.join('table1');

    //socket.set('room', 'table1', function() {
    //    console.log('saved table1');
    //});
    //console.log('user joined table1');
    //socket.broadcast.to('table1').emit('message', { some: 'data' });
    //setInterval(function(){
    //    //io.sockets.in('global').emit('roomChanged', { chicken: 'tasty' });
    //    socket.to('table1').emit('message', { some: 'data' });
    //}, 1000);

    // we've got a client connection
    socket.on("STAND", function(data){
        console.log(JSON.stringify(data));

    });

    socket.on("SUBSCRIBE", function(table){
        console.log(JSON.stringify(table));
        socket.join('table1');
        nsp.to('table1').emit('message', { some: 'data' });
    });
    //console.log("handle client");
    //socket.emit("message", {user: "nodesource", text: "Hello, world!"});
};

var nsp = io
    .of('/blackjack')
    .on('connection', handleClient)
    .emit('welcome', 'everyone!');





//io.on("connection", handleClient);


