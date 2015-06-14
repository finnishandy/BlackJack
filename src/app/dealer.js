/**
 * Created by Finnishandy on 08/06/2015.
 */
define(['blackjack'], function(BlackJack) {


    function Dealer(nick) {
        this.nick = nick;
        this.hand = [];
        this.testHand = undefined; //for testing purposes, real play hands are not exposed.
    };

    Dealer.prototype = new BlackJack();
    Dealer.prototype.willTakeMoreCards = function() {
        return (this.getTotal(true) < this.DEALER_THRESHOLD);
    };
    Dealer.prototype.constructor = Dealer;











    return Dealer;
});