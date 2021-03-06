var express = require('express');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index', { title: 'Photogram' });
})

app.get('/signup', function (req, res) {
  res.render('index', { title: 'Photogram - Signup' });
})

app.get('/signin', function (req, res) {
  res.render('index', { title: 'Photogram - Signin' });
})

app.listen(3000, function (err) {
  if (err) return console.log('Hubo un error'), process.exit(1);

  console.log('Photogram escuchando en el puerto 3000');
})