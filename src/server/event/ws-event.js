/**
 * Created by Finnishandy on 04/07/2015.
 */
var util = require('util');

function WSEventHandler() {}

WSEventHandler.prototype = {
    attach: function(socket, client) {
        client.on("SUBSCRIBE", function(table){
            console.log(JSON.stringify(table));
            client.join('table1');
            socket.to('table1').emit('message', { some: 'data' });
        });
    }
};

module.exports = function() {
    return new WSEventHandler();
};
