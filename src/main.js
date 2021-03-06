requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/',

    paths: {
        'jquery': 'lib/jquery-2.1.3',
        'underscore': 'lib/underscore',
        'pubsub': 'lib/pubsub',
        'jasmine-jquery': 'lib/jasmine-jquery',
        'socketio': 'lib/socket.io',
        'promise': 'lib/Promise',
        'handlebars': 'lib/handlebars-v3.0.3',
        'deal' : 'app/deal',
        'dealer': 'app/dealer',
        'player': 'app/player',
        'game': 'app/game',
        'deck': 'app/deck',
        'card': 'app/card',
        'host': 'app/host',
        'blackjack' : 'app/blackjack'
    },

    shim: {
        'socketio': {
            exports: 'io'
        },
        'underscore': {
            exports: '_'
        },
        'jasmine-jquery': {
            deps: ['jquery']
        }
    }
});


require(['pubsub','socketio','jquery','handlebars'], function(PubSub, io, $, Handlebars) {

//require(['handlebars', 'jquery', 'card', 'deal', 'dealer', 'player'], function (Handlebars, $, Card, Deal, Dealer, Player) {





    PubSub.subscribe('message', function(msg, data) {
        console.log(msg + ":" + JSON.stringify(data));
        //socket.emit("STAND", socket.id);
        //socket.emit("JOIN", 'table1');
        //io.to("table1").emit(data);
    } );

    var socket = io.connect("http://127.0.0.1:8000/blackjack");
    //var socket = io('/my-namespace');
    socket.on("connect", function () {
        console.log("Connected!");
        PubSub.publish("message", arguments);
        //socket.join('table1');
    });

    socket.on("welcome", function (games) {
        /*
        console.log(games);
        var source   = $("#lobby-template").html();
        var template = Handlebars.compile(source);
        var tables    = template(games);
        $('#lobby').append(tables);
        */
        PubSub.publish("welcome", arguments);
        //#socket.join('table1');
    });
    socket.on("message", function (message) {
        //console.log("message" + JSON.stringify(message));
        PubSub.publish("message", arguments);
    });

    $("#stand").click(function(e){
        e.preventDefault();
        socket.emit("STAND", "foo");
        //PubSub.publish( 'STAND', 'hello world!' );
    });
    /*
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
    */
});
