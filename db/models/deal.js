/**
 * Created by Finnishandy on 15/06/2015.
 */
var db = require('../db');
var Deal = db.model('Deal', {
    dealer: {type: String, required: true},
    players: [],
    hands: {}
});
module.exports = Deal;