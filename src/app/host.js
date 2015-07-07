/**
 * Created by Finnishandy on 08/06/2015.
 *
 * Host is a grouping interface for multiple games. For example you could provide a host for all the Blackjack games or
 * Texas Hold 'em.
 */
define(['game'], function(Game) {

    var Host = function(name) {
        var pub = {}, priv = {};
        priv.games = [];
        priv.gameNo = 0;
        priv.name = name;

        pub.initialize = function() {
            pub.addGame(new Game);
            pub.addGame(new Game);
        }

        pub.addGame = function(game) {
            priv.games[++priv.gameNo] = game;
            return pub;
        };

        pub.getGame = function(gameNo) {
            return priv.games[gameNo];
        };

        pub.getGames = function() {
            return priv.games;
        };

        pub.gameCount = function() {
            return priv.games.length;
        }


        return pub;
    };

    return Host;
});