/**
 * Created by Sakari.Ruoho on 14/04/2015.
 */
var http = require('http');
var fs  = require('fs');
var path = require('path');
var mime = require('mime');
var PathResolver = require('../common/path-resolver')('mime');
var cache = {};

function send404(response) {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('Error 404: resource not found.');
    response.end();
}

function sendFile(response, filePath, fileContents) {
    response.writeHead(
        200,
        {"content-type": mime.lookup(path.basename(filePath))}
    );
    response.end(fileContents);
}

function serveStatic(response, cache, absPath) {
    if (cache[absPath]) {
        sendFile(response, absPath, cache[absPath]);
    } else {
        fs.exists(absPath, function(exists) {
            if (exists) {
                fs.readFile(absPath, function(err, data) {
                    if (err) {
                        console.log("erooro");
                        send404(response);
                    } else {
                        cache[absPath] = data;
                        sendFile(response, absPath, data);
                    }
                });
            } else {
                send404(response);
            }
        });
    }
}

var server = http.createServer(function(request, response) {
    var filePath = false;
    var dir = __dirname;

    if (request.url == '/') {
        filePath = dir + '/../../html/index.html';
    } else {
        filePath = PathResolver.resolve(request.url) + '/../styles/public' + request.url;
    }

    //var absPath = './' + filePath; //TODO: not really absolute fix it for security
    console.log("another request: " + filePath);
    serveStatic(response, cache, filePath);
});

var HTTPServer = module.exports = function(port, host) {
    this.port = port;
    this.host = host;
};

HTTPServer.prototype.start = function() {
    var _port = this.port || 8080;
    server.listen(_port, function() {
        console.log("HTTP Server listening on port", _port);
    });
};

function getMimePath(mime) {
    return "foo";
}




