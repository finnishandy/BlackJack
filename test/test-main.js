var tests = [];
for (var file in window.__karma__.files) {
    if (/Spec\.js$/.test(file)) {
        tests.push(file);
    }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/src',

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
        'host': 'app/host',
        'blackjack' : 'app/blackjack'
    },

    shim: {
        'underscore': {
            exports: '_'
        },
        'jasmine-jquery': {
            deps: ['jquery']
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});

