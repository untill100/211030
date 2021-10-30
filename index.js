const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// SERVER
const server = http.createServer(app);

// SET
app.set('port', process.env.PORT || 8080);

// USE
app.use(function(req, res, next) {
    bodyParser.urlencoded({ limit: '50mb', extended: true });
    bodyParser.json({ limit: '50mb' });

    app.use('/public/', express.static(path.join(__dirname, 'public')));
    app.use('/build/', express.static(path.join(__dirname, 'node_modules/three/build')));
    app.use('/jsm/', express.static(path.join(__dirname, 'node_modules/three/examples/jsm')));

    next();
});

// VIEW
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// ROUTER
app.get('/', function(req, res) {
    res.render('index');
});

// LISTEN
server.listen(app.get('port'), function() {
    console.log("connected 8080");
});