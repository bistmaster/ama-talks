let express = require('express');
let app = express();
let path = require('path');

app.use(express.static('views'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views/');

// app.use('/js', express.static(__dirname + '/js'));
// app.use('/css', express.static(__dirname + '/css'));


app.route('/').get(function onRequest(req, res) {
	res.render('index.ejs');
});

app.listen(8080, function() {
	console.log('Express is Running and Listening on port 5000');
});


