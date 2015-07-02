define(['deck'], function(Deck) {

    describe('a deck', function() {



        beforeEach(function() {
            deck = new Deck(52).shuffle();
        });

        it('should be able to shuffle', function() {
            expect(deck.length).toEqual(52);
        });

    });
});
