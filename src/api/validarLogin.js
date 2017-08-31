const app = require('../app.js');
const fs = require('fs');
const underscore = require('underscore');
const users = JSON.parse(fs.readFileSync('users-info.json', 'utf8'));
var userInfo;

app.post('/api/validar', function(req, res, next){
	userInfo = underscore.findWhere(users, {username: req.body.username});
	if(userInfo){
		if(userInfo.password === req.body.password){
			req.session.username = req.body.username;
			req.session.name = userInfo.name;
			req.session.save();
			return res.sendStatus(200);
		}
	} return res.sendStatus(400);
});

app.get('/api/logout', function(req, res){
	req.session.username = null;
	req.session.save();
	res.sendStatus(200);
});