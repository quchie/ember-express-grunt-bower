/**
 * Module dependencies.
 */

var express = require('express')
    , http = require('http')
    , path = require('path');

var app = express();
// all environments
app.set('port', process.env.PORT || 3000);

app.use(express.favicon());
app.use(express.logger('dev'));

app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.session({ secret: 'i am not telling you' }));

app.use(express.methodOverride());
app.use(app.router);



// development only
if ('production' == app.get('env')) {
    app.use(express.static(path.resolve(__dirname, '../dist')));
} else {
	app.use(express.static(path.resolve(__dirname, '../.tmp')));
    app.use(express.static(path.resolve(__dirname, '../app')));
    app.use(express.errorHandler());
}

http.createServer(app).listen(app.get('port'), function () {
	
    console.log("Express server listening on port %d in %s mode", app.get('port'), app.get('env'));
});


module.exports = app;