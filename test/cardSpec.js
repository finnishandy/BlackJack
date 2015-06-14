define(['card'], function(Card) {

    describe('a card', function() {

        var card;

        beforeEach(function() {
            card = new Card(15);
        });

        it('should return string representation of a suite', function() {
            expect(card.getSuit()).toEqual("spades");
        });

        it('should return numeric representation of a value', function() {
            expect(card.getNumber()).toEqual(2);
        });


        it('should return semantic representation of a card', function() {
            expect(card.toString()).toEqual("two of spades");
        });

        it('should return json representation of a card', function() {
            expect(card.getJson()).toEqual({suit: 'spades', rank: '2'});
        });

        it('should return correct suit', function() {
            var kingOfSpades = new Card(26);
            expect(kingOfSpades.getSuit()).toEqual('spades');
            var aceOfDiamonds = new Card(27);
            expect(aceOfDiamonds.getSuit()).toEqual('diamonds');
            var kingOfHearts = new Card(13);
            expect(kingOfHearts.getSuit()).toEqual('hearts');
            var aceOfHearts = new Card(1);
            expect(aceOfHearts.getSuit()).toEqual('hearts');
            var kingOfDiamonds = new Card(39);
            expect(kingOfDiamonds.getSuit()).toEqual('diamonds');
            var aceOfClubs = new Card(40);
            expect(aceOfClubs.getSuit()).toEqual('clubs');
            var kingOfClubs = new Card(52);
            expect(kingOfClubs.getSuit()).toEqual('clubs');
        });


        it('should return json representation of a card', function() {
            var kingOfSpades = new Card(26);
            expect(kingOfSpades.getJson()).toEqual({suit: 'spades', rank: 'K'});
        });

    });
});
