/**
 * Created by Finnishandy on 02/07/2015.
 */
var WSServer    = require('./src/server/ws-server');
var HTTPServer  = require('./src/server/http-server');
var config      = require('./src/config/server-config');

var wsServer = new WSServer(config.ws.port);
var httpServer = new HTTPServer();

global.appRoot = __dirname;

wsServer.start();
httpServer.start();