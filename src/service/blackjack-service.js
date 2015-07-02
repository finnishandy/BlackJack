/**
 * Test service with:
 * curl -v -H "Content-Type: application/json" -XGET --data "{}" localhost:3000/api/deal
 * @type {*|exports|module.exports}
 */

var express = require('express');
var bodyParser = require('body-parser');
var Deal = require('../db/models/deal');

var app = express();
app.use(bodyParser.json());

app.get('/api/deal', function(req, res, next) {
   var deal = new Deal({
       players: req.body.players,
       body: req.body.body
    });
    console.log(deal);
    res.status(201).json(deal);
    /*
    deal.save(function(err,post)  {
        if (err) {return next(err);}
        res.json(201, post);
    });
    */
});

app.listen(3000, function() {
    console.log('listening on', 3000);
});