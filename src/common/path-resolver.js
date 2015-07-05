/**
 * Created by Finnishandy on 02/07/2015.
 */
"use strict";

var mime = require('mime');
var path = require('path');

function PathResolver(resolverType) {
    this.resolverType = resolverType;
}

PathResolver.prototype = {
    resolve: function(identifier) {
        var _type = this.resolverType;
        switch (_type) {
            case 'mime':
                return resolveFromMime(identifier);
            default:
                return 'foo';

        }
    }
};

module.exports = function(resolverType) {
    return new PathResolver(resolverType);
};

/** One should ensure that there's no access below defined 'type root' directories **/
function resolveFromMime(url) {
    var _mime = mime.lookup(url);
    var _dir = path.dirname(removeRelativePath(url));
    var _filename = path.basename(url);
    var typeRoot = undefined;
    switch (_mime) {
        case 'text/css':
            typeRoot = '/styles';
            break;
        case 'application/javascript':
            typeRoot = '/src';
            break;
        case 'image/x-icon':
            typeRoot = '/images';
            break;
        case 'application/octet-stream':
            typeRoot = '/images';
            break;
        default:
            //throw new Error('undefined mime type'); // error will cause the server to crash, unless handled
            return undefined;
    }
    return path.normalize(typeRoot + "/" + _dir + "/" + _filename); // Normalize as it's hard to predict the forward slashes..
}

function removeRelativePath(url) {
    var _idx = url.lastIndexOf('./');
    return (_idx === -1) ? url : url.substring(_idx + 2, url.length);
}