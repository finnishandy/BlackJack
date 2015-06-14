/**
 * Created by Finnishandy on 10/06/2015.
 */
define(function() {

    var Deck = function(name) {

        var pub = {}, priv = {}, array;
        var SIZE_ARRAY = {'BLACK_JACK': 52};



        var getDeck = function() {
            var deck = [];
            for (i = 0; i < 52; i++) {
                deck[i] = i + 1;
            }
            return deck;
        };


        // http://jsfromhell.com/array/shuffle
        pub.shuffle = function() {
            var deck = getDeck();
            for(var j, x, i = deck.length - 1; i; j = Math.floor(Math.random() * i), x = deck[--i], deck[i] = deck[j], deck[j] = x);
            return deck;
        };

        return pub;
    }

    return Deck;
});
