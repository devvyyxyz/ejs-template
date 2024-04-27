var express = require('express');
var app = express();

// setup the main directory
app.use(express.static(__dirname + '/views'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
// use res.redirect to redirect to another link




// pages
app.get('/', function(req, res) {
  res.render('pages/index');
});


// hyperlinks
app.get('/discord', function(req, res) {
  res.redirect('https://discord.gg/TvFPYJRdgt');
});

// 404 page
app.get('*', function(req, res) {
  res.status(404).render('pages/404');
});

app.listen(8080);
console.log('Server is listening on port 8080');
