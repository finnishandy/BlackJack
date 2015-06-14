/**
 * Created by Finnishandy on 10/06/2015.
 */
define(function() {

    var SUITS = ['heart','spade','diam','club'];
    var NAMES = [undefined, 'ace','two','three','four', 'five', 'six', 'seven', 'eight', 'nine','ten','jack', 'queen', 'king'];
    var RANKS = [undefined, 'A','2','3','4', '5', '6', '7', '8', '9','10','J', 'Q', 'K'];

    var Card = function(order) {

        var pub = {}, priv = {};

        priv.number = (order % 13 !== 0) ? order % 13 : 13;
        priv.suit = parseInt((order - 1)/ 13);

        pub.toString = function() {
            return pub.getName() + " of " + pub.getSuit();
        };

        pub.getSuit = function() {
            return SUITS[priv.suit] + 's';
        };

        pub.getNumber = function() {
            return priv.number;
        };

        pub.getValue = function() {
            return (priv.number > 10) ? 10 : priv.number;
        };

        pub.getName = function() {
            return NAMES[priv.number];
        };

        pub.getJson = function(hide) {
            var cardNum = pub.getNumber();
            return {suit: pub.getSuit(), rank: RANKS[cardNum], hide: hide}
        }



        return pub;
    };

    return Card;
});
