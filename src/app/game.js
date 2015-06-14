/**
 * Created by Finnishandy on 08/06/2015.
 *
 * Game is an abstraction to a series of deals. Basically same properties, but also provides a history and more general interface.
 */
define(['deal', 'dealer'], function(Deal, Dealer) {
    var Game = function() {
        var pub = {}, priv = {};
        priv.players = [];
        priv.dealer = new Dealer('computer');

        pub.addPlayer = function(player) {
            priv.players.push(player);
            return pub;
        };

        pub.setPlayers = function(players) {
            priv.players = players;
            return pub;
        };

        pub.getPlayers = function() {
            return priv.players;
        };

        pub.getPlayer = function(nick) {
            return pub.getPlayerByNick(nick);
        };

        pub.getPlayerByNick = function(nick) {
            var _player;
            priv.players.forEach(function(player) {
                if (player.getNick() === nick) _player = player;
            });
            return _player;
        };

        pub.getDealer = function() {
            return priv.dealer;
        };

        pub.newDeal = function() {
            var deal = new Deal();
            deal.setPlayers(priv.players);
            deal.setDealer(priv.dealer);
            return deal;
        };

        return pub;
    };

    return Game;
});