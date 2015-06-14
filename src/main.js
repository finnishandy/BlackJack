requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/BlackJack/src',

    paths: {
        'jquery': '../lib/jquery-2.1.3',
        'underscore': '../lib/underscore',
        'pubsub': '../lib/pubsub',
        'jasmine-jquery': '../lib/jasmine-jquery',
        'promise': '../lib/Promise',
        'handlebars': '../lib/handlebars-v3.0.3',
        'deal' : 'app/deal',
        'dealer': 'app/dealer',
        'player': 'app/player',
        'game': 'app/game',
        'deck': 'app/deck',
        'card': 'app/card',
        'blackjack' : 'app/blackjack'
    },

    shim: {
        'underscore': {
            exports: '_'
        },
        'jasmine-jquery': {
            deps: ['jquery']
        }
    }
});




require(['handlebars', 'jquery', 'card', 'deal', 'dealer', 'player'], function (Handlebars, $, Card, Deal, Dealer, Player) {

    Handlebars.registerHelper('toLowerCase', function(str) {
        return str.toLowerCase();
    });

    var deal = new Deal();
    var dealer = new Dealer('computer');
    deal.setDealer(dealer);
    var player = new Player('sakari');
    deal.addPlayer(player);
    deal.startRound();
    console.log(player.handToJson());
    var card = new Card(26);
    var card2 = new Card(1);

    var source   = $("#card-template").html();

    var template = Handlebars.compile(source);
    var dealerContext = dealer.handToJson(true);
    console.log("dealer: " + JSON.stringify(dealerContext));
    var dealerHtml    = template(dealerContext);
    var playerContext = player.handToJson();
    var playerHtml    = template(playerContext);

    $("div.dealer>ul.table").append(dealerHtml);
    $("div.player>ul.table").append(playerHtml);

    $("#stand").click(function(){
        var dealerContext = dealer.handToJson(false);
        var dealerHtml    = template(dealerContext);
        $("div.dealer>ul.table").empty().append(dealerHtml);
    });
});
