/**
 * Created by Finnishandy on 04/07/2015.
 */
function WSEventHandler(socket, client) {
    this.client = client;
    this.socket = socket;
    var that = this;
    this.client.on("SUBSCRIBE", function(table){
        console.log(JSON.stringify(table));
        that.client.join('table1');
        that.socket.to('table1').emit('message', { some: 'data' });
    });
}


//WSEventHandler.prototype = {
//    resolve: function(identifier) {
//        var _type = this.resolverType;
//        switch (_type) {
//            case 'mime':
//                return resolveFromMime(identifier);
//            default:
//                return 'foo';
//
//        }
//    }
//};


module.exports = function(socket, client) {
    return new WSEventHandler(socket, client);
};
