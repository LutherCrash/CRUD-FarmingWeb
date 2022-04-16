const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser')

//Crea una app de express
const app = express();

//donde cargar los archivos estaticos
app.use(express.static('public'));

//Habilitar pug
app.set('view engine', 'pug')

//Añadir la carpeta de vistas
app.set('views', path.join(__dirname, './views'));

// habilitar bodyParser para leer datos del formulario
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes())

//le decimos en que puerto va escuchar
app.listen(3000);