const app = require('./src/app.js');
require('./src/views/user.js');

app.listen(4001, function() {
  console.log('Example app listening on port 4001!');
});
