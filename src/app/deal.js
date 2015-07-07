/**
 * Created by Finnishandy on 08/06/2015.
 */
define(['deck'], function(Deck) {

    function Deal() {
        this.players = [];
        this.dealer = {};
        this.deck = new Deck().shuffle();
    }


    Deal.prototype = {

        BLACK_JACK: 21,
        DEALER_THRESHOLD: 17,

        startRound: function() {
            var that = this;
            for (var i = 1; i <= 2; i++) {
                this.players.forEach(function (player) {
                    player.hit(that.next());
                });
                var d = this.getDealer();
                d.hit(that.next());
            }
        },

        setPlayers: function(players) {
            this.players = players;
        },

        addPlayer: function(player) {
            this.players.push(player);
        },

        getPlayer: function(nick) {
            return this.getPlayerByNick(nick);
        },

        getPlayerByNick : function(nick) {
            var _player;
            this.players.forEach(function(player) {
                if (player.getNick() === nick) _player = player;
            });
            return _player;
        },
        setDealer: function(dealer) {
            this.dealer = dealer;
        },

        getDealer: function() {
            return this.dealer;
        },

        getPlayers: function() {
            return this.players;
        },

        dealCards: function() {
            this.players.forEach(function(player) {
                player.hand().push(next());
            });
        },

        next: function() {
            return this.deck.shift();
        }

    };

    return Deal;

});