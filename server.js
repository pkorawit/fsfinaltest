// call the packages we need
var express = require('express');        // call express
var app = express();   
var cors = require('cors');              // define our app using express
var bodyParser = require('body-parser');
var posts = require('./post.js');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('frontend'));

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.get('/posts', posts.getAllPosts);
router.get('/posts/:userid', posts.getPostsByUser);
router.post('/posts', posts.InsertNewPosts);


// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', cors(), router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);