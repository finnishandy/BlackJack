/**
 * Created by Sakari.Ruoho on 14/04/2015.
 * http://www.joezimjs.com/javascript/plugging-into-socket-io-advanced/
 */
var http = require('http');
var eventHandler = require('./event/ws-event');

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

var io = require("socket.io")(server);

var handleClient = function (client) {
    eventHandler(nsp, client);

};

var nsp = io
    .of('/blackjack')
    .on('connection', handleClient)
    .emit('welcome', 'everyone!');




