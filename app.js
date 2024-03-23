const express = require('express');
const app = express();
const mysql = require('mysql');

app.set('view engine', 'ejs');
app.use(express.static('public'));


// Rotas
const indexRouters = require('./routes/index');
const buscarRouters = require('./routes/buscar');

const port = 3000;

app.use('/buscar', buscarRouters);
app.use('/', indexRouters);

app.listen(port);
console.log('Site iniciado...');