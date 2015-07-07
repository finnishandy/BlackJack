define(['host'], function(Host) {

    describe('a host', function() {

        var host;

        beforeEach(function() {
            host = new Host('Superstar Games Inc');

        });



        it('should be responsible for minumum amount of games when after init', function() {
            host.initialize();
            expect(host.gameCount()).toBeGreaterThan(1);
        });

        it('should provide a list of games', function() {
            expect(host.getGames().length).toBeDefined();
        });


        it('should have history of games', function() {
            var gameNo = host.addGame(new Game());
            expect(host.getGame(gameNo).getHistory()).toBeDefined();
        });

        it('should have minimum amount of empty tables', function() {

        });

    });




});
