var express = require('express'),
	app = express(),
	fs = require('fs');

app.listen(8080);

app.configure(function(){
	app.set('view engine', 'ejs');
	app.set('views', __dirname+'/views');
	app.use(express.bodyParser());
});

app.get('/', function(req, res){
	res.render('xhr');
});

app.get('/2', function(req, res){
	res.render('xhr2');
});

app.post('/xhr', function(req, res){
	var imagen = req.files.imagen;
	var newPath = __dirname+'/imagenes/'+imagen.name;
	fs.readFile(imagen.path, function(err, data){
		fs.writeFile(newPath, data, function(){
			res.send('La imagen <b>'+imagen.name+'</b> fue subida con exito por <b>'+req.body.nombre+'</b>!');
		});
	});
});