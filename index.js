const express = require('express');
const app = express();

// Serve static assets from the public directory
app.use(express.static(__dirname + '/public'));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Render the home page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// Redirect to Discord
app.get('/discord', function(req, res) {
  res.redirect('https://discord.gg/TvFPYJRdgt');
});

// Handle 404s
app.get('*', function(req, res) {
  res.status(404).render('pages/404');
});

const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log(`Server is listening on port ${port}`);
});
