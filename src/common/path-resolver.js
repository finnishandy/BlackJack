/**
 * Created by Finnishandy on 02/07/2015.
 */
var mime = require('mime');

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
}

module.exports = function(resolverType) {
    return new PathResolver(resolverType);
}

function resolveFromMime(identifier) {
    var _mime = mime.lookup(identifier);
    switch (_mime) {
        case 'text/css':
            return 'styles/';
        case 'application/javascript':
            return 'src/';
        default:
            throw new Error('undefined mime type');
    }
}