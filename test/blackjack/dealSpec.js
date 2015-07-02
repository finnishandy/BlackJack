define(['deal', 'dealer', 'player'], function(Deal, Dealer, Player) {

    describe('a deal', function() {

        var deal, dealer, players = [];

        beforeEach(function() {
            dealer = new Dealer('John');
            players.push(new Player('Jane'));
            deal = new Deal();
            deal.setDealer(dealer);
            deal.setPlayers(players);
        });

        it('should have a dealer', function() {
            var dealer = deal.getDealer();
            expect(dealer).toBeDefined();
        });

        it('should have at least 1 player', function() {
            var players = deal.getPlayers();
            expect(players.length > 0).toBeTruthy();
        });

    });

    describe('dealer in a deal', function() {

        var deal, dealer, players = [];

        beforeEach(function() {
            dealer = new Dealer('John');
            players.push(new Player('Jane'));
            deal = new Deal();
            deal.setDealer(dealer)
            deal.setPlayers(players);
        });


        it('should take more if total of hand is less than threshold', function() {
            var dealer = deal.getDealer();
            dealer.testHand = [7];
            expect(dealer.willTakeMoreCards()).toEqual(true);
        });

        it('should have at least 1 player', function() {
            var players = deal.getPlayers();
            expect(players.length > 0).toBeTruthy();
        });

        it('should not take more if total of hand is more than threshold', function() {
            var dealer = deal.getDealer();
            dealer.testHand = [12, 7];
            expect(dealer.willTakeMoreCards()).toEqual(false);
        });

        it('should give two cards to everyone at the beginning of a deal', function() {
            deal.startRound();
            expect(deal.getPlayer('Jane').getHand().length).toEqual(2);
            expect(deal.getDealer().getHand().length).toEqual(2);
        });

        afterEach(function() {
            players = [];
        })

    });

    describe('rules in a deal', function() {

        var deal, dealer, players = [];

        beforeEach(function() {
            dealer = new Dealer('John');
            players.push(new Player('Jane'));
            deal = new Deal();
            deal.setDealer(dealer);
            deal.setPlayers(players);
        });


        it('should count hand correctly', function() {
            players[0].testHand = [5,6,13];
            expect(players[0].getTotal(true)).toEqual(21);
            players[0].testHand = [5,6,1];
            expect(players[0].getTotal(true)).toEqual(12);
        });

        it('should count hand correctly when aces present', function() {
            players[0].testHand = [1,6,13];
            expect(players[0].getTotal(true)).toEqual(17);
            players[0].testHand = [1,13];
            expect(players[0].getTotal(true)).toEqual(21);
        });

        it('should bust a player when total is over 21', function() {
            var before = deal.getPlayers().length;
            players[0].testHand = [1,6,13,5];
            players[0].hit();
            //deal.endRound();
            expect(players[0].isBusted()).toBeTruthy();
        });

        afterEach(function() {
            players = [];
        });

    });

});
