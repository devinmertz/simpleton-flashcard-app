var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var port = process.env.PORT || 9000;

var config = require('./config');
var authRoutes = require('./routes/authRoutes');
var wordlistRoutes = require('./routes/wordListRoutes');

// mongoose.connect(config.database);

app.use(express.static('../frontend/app'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', expressJwt({secret: config.secret}));
app.use('/api/wordlist/', wordlistRoutes);

app.listen(port, function() {
    console.log('Reached Port ' + port);
});