// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');    // call express
var app        = express();         // define our app using express
var bodyParser = require('body-parser');
console.log(__dirname);

// Doctor Appoitment System Service
var dasRouter = require('./routes/DASRouter');


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var port = process.env.PORT || 8090;    // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();        // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8090/das)
router.get('/', function(req, res) {
  res.json({ message: 'Welcome to Web Server'}); 
});


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /das
app.use('/das',dasRouter);
app.use('/', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Web Application started ' + port);

