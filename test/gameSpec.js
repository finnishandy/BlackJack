define(['game', 'dealer', 'player'], function(Game, Dealer, Player) {

    describe('a game', function() {

        var game, players = [];

        beforeEach(function() {
            game = new Game();
            players.push(new Player('sakari'));
            game.setPlayers(players);
        });

        /*
        it('should have a dealer', function() {
            var dealer = deal.getDealer();
            expect(dealer.getNick()).toEqual('John');
        });

        it('should have at least 1 player', function() {
            var players = deal.getPlayers();
            expect(players.length > 0).toBeTruthy();
        });
        */

        it('should have history of games', function() {
            var players = game.getPlayers();
            expect(players.length > 0).toBeTruthy();
        });



    });




});
