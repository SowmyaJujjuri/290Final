var path = require('path');
var port = process.env.PORT || 3000;


app.use(express.static('public'));

app.listen(port, function(err){
	if(err){
		throw err;
	}
	console.log("Server listening on port ", port);
});
