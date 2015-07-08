/**
 * Created by Sakari.Ruoho on 14/04/2015.
 * http://www.joezimjs.com/javascript/plugging-into-socket-io-advanced/
 *
 * This is not proper place to do game init and what not. There should be somekind of interface
 * for behavior which could use different services, not just websockets. Use PubSub.
 */
var http = require('http');
var eventHandler = require('./event/ws-event')();

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
    eventHandler.attach(nsp, client);
    //nsp.emit('welcome', {games: ['room1', 'room2']})
};

var nsp = io
    .of('/blackjack')
    .on('connection', handleClient);





