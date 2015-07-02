/**
 * Created by Sakari.Ruoho on 14/04/2015.
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
    // we've got a client connection
    socket.on("message", function(data){
        console.log(JSON.stringify(data));

    });
    //console.log("handle client");
    //socket.emit("message", {user: "nodesource", text: "Hello, world!"});
};



io.on("connection", handleClient);


