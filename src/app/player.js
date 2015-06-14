/**
 * Created by Finnishandy on 08/06/2015.
 */
define(['card', 'blackjack'], function(Card, BlackJack) {

    function Player(nick) {
        this.nick = nick;
        this.hand = [];
        this.testHand = undefined; //for testing purposes, real play hands are not exposed.
    };

    Player.prototype = new BlackJack();

    Player.prototype.constructor = Player;

    return Player;
});