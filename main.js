/**
 * Created by Finnishandy on 02/07/2015.
 */
var WSServer    = require('./src/server/ws-server');
var HTTPServer  = require('./src/server/http-server');

var wsServer = new WSServer(6666);
var httpServer = new HTTPServer();

wsServer.start();
httpServer.start();