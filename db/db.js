/**
 * Created by Finnishandy on 15/06/2015.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blackjack', function() {
    console.log('blackjack db connected');
});
module.exports = mongoose;