const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const session = require('express-session');
const app = express();


app.use(bodyParser.json());
app.use(express.static('public'));

app.use(session({
	secret: 'login',
	name: 'user-login',
	saveUninitialized: 'false',
	resave: 'true'
}));

nunjucks.configure('src/templates', {
  autoescape: true,
  express: app
});

module.exports = app;