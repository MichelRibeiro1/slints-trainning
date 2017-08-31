const app = require('../app.js');
require('../api/validarLogin.js');

app.get('/login', function(req, res){
	res.render('index.html', {username: req.session.username, name: req.session.name});
});