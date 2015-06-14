/**
 * Created by Finnishandy on 08/06/2015.
 */
define(['card', 'blackjack'], function(Card, BlackJack) {

    var BlackJack = function(nick) {
        this.nick = nick;
        this.hand = [];

    };

    BlackJack.prototype = {

        BLACK_JACK: 21,
        DEALER_THRESHOLD: 17,

        getNick : function(){
            return this.nick;
        },

        hand: function () {
            return this.hand;
        },

        getHand: function () {
            return this.hand;
        },

        handToJson: function(hidefirstcard) {
            var json = {};
            json.cards = [];
            this.hand.forEach(function(card, index) {
                var cj = new Card(card);
                json.cards.push(cj.getJson(((index === 0) && hidefirstcard)));
            });
            return json;
        },

        isBusted: function() {
            var total = this.getTotal(true);
            return (total > this.BLACK_JACK);
        },

        // Draw should be agnostic so we can test
        hit: function (card) {
            this.hand.push(card);
        },

        stand: function () {

        },

        getTotal: function(optimal) {
            var hand = this.testHand || this.hand, total = {};
            total.low = total.high = 0;
            hand.forEach(function(card) {
                card = (card > 10) ? 10 : card;
                total.low += card;
                total.high += (card === 1) ? 11 : card;
            });
            return (optimal) ? this.getOptimal(total) : total;
        },
        getOptimal: function(totals) {
            var lower = totals.low, higher = totals.high;

            if (lower !== higher) { // there's aces
                if (higher > 21) {
                    return lower;
                } else if ( (21 - higher) < (21 - lower)) {
                    return higher;
                } else {
                    return lower;
                }

            } else {
                return higher; // does not matter, both are the same
            }
        }
    };

    return BlackJack;
});