/**
 * Created by Finnishandy on 05/07/2015.
 */
var config = {}

config.ws = {};
config.web = {};

config.ws.host = 'localhost';
config.ws.port = 8000;
config.web.port = process.env.WEB_PORT || 8080;

module.exports = config;