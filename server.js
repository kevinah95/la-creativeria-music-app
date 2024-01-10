var express = require('express');
var app = express();
var morgan = require('morgan'); // log requests to the console (express4)
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

app.use(express.static('public')); // set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

app.use(methodOverride());


app.use('/bower_components', express.static(__dirname + '/public/bower_components'));
app.use('/app', express.static(__dirname + '/public/app'));
app.use(express.static(__dirname + '/public'));


// application -------------------------------------------------------------
app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname + '/public' });
});
// listen (start app with node server.js) ======================================
var server = app.listen(8080, function() {
    //var host = server.address().address
    var port = server.address().port;
    console.log("Running LCM at http://localhost:%s", port)

});