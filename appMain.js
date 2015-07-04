/**
 * Created by Finnishandy on 02/07/2015.
 */
var WSServer    = require('./src/server/ws-server');
var HTTPServer  = require('./src/server/http-server');

var wsServer = new WSServer(8000);
var httpServer = new HTTPServer();

global.appRoot = __dirname;

wsServer.start();
httpServer.start();