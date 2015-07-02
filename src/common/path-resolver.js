/**
 * Created by Finnishandy on 02/07/2015.
 */
var mime = require('mime');

function PathResolver(resolverType) {
    this.resolverType = resolverType;
}

PathResolver.prototype = {
    resolve: function() {
        return 'foo';
    }
}

module.exports = function(resolverType) {
    return new PathResolver(resolverType);
}
