var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var dealers = require('./routes/dealer.router.js');
var orders = require('./routes/order.router.js');
var products = require('./routes/product.router.js');
var port = process.env.PORT || 5000;

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('server/public'));

//express routes
app.use('/dealers', dealers);
app.use('/orders', orders);
app.use('/products', products);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.listen(port, function () {
    console.log('Listening on port: ', port);
});