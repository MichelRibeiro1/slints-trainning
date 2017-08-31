$("#btn-login").click(function(){
	const form = {
		username: document.getElementById("user").value,
		password: document.getElementById("password").value
	}
	console.log(form);
	axios.post('/api/validar', form)
	.then(function(response){
		console.log("Verified User");
		window.location.replace('/login');
	})
	.catch(function(error){
		console.log("user do not exist");
		alert("Usuario e/ou senha incorreto");
	});
});
$("#btn-logout").click(function(){
	axios.get('/api/logout')
		.then(function(response){
			console.log("User left");
			window.location.replace('/login');
		});
});