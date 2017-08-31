var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…
  var x = 2;

  if (x * 2 == 4) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});

promise.then(function(result) {
	console.log(result);
}, function(err){
	console.log(err);
});
