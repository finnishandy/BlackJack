/**
 * Test service with:
 * curl -v -H "Content-Type: application/json" -XPOST --data "{}" localhost:3000/api/deal
 * @type {*|exports|module.exports}
 */

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.get('/api/deal', function(req, res, next) {
   var deal = new Deal({
       username: req.body.username,
       body: req.body.body
    });
    console.log(deal);
    res.json(201, deal);
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