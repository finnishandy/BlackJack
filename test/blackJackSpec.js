define(['player', 'game', 'card'], function(Player, Game, Card) {

    var TEST_FIXTURE = { 'sakari' : [1,5,10]}

    describe('a player', function() {



        var player, game, deal;

        beforeEach(function() {
            game = new Game();
            player = new Player("sakari")
            game.addPlayer(player);
            deal = game.newDeal();
            //deal.startRound();
        });

        it('should should be able to attend a game', function() {
            var p = game.getPlayer('sakari');
            expect(p.getNick()).toEqual('sakari');
        });

        it('should should be able to attend a deal', function() {
            var dealer = deal.getDealer();
            expect(dealer).toBeDefined();
        });

        it('should be able to drop a player if maxed out', function() {
            //deal.setFixture(TEST_FIXTURE);
            //expect(deal.dealCards().getPlayer('sakari')).toThrowError();

        });

        it('should be able to draw more cards if total is less than 21', function() {
            player.testHand = [1, 7];
            player.hit(new Card(12));
            expect(player.getTotal(true)).toEqual(18);

        });



    });

});
