// trabalhando com rotas com express e consign (POST E NeDB)
var  express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require ('express-validator'); //validator para express

let  app = express();

app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());

consign().include('routes').include('utils').into(app); // incluindo consign da pasta routes dentro do express app




app.listen(3000, '127.0.0.1', () => {

    console.log("server running");

});