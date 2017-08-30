var express = require('express');
var sass = require('node-sass-middleware');
var app = express();

app.use(sass({
    src: __dirname + '/src/scss/',
    dest: __dirname + '/public/css',
    debug: true,
    outputStyle: 'compressed',
    prefix: '/css'
}));

//External Path
app.use(express.static(__dirname + "/public"));

//enable ejs
app.set('view engine', 'ejs');

//Routes
var routes = require('./routes');

//**********

//Home
app.get('/', routes.home);

//Single Page - of all planets
app.get('/planets/:planets_numbers?', routes.planetSingle);

//Error
app.get('*', routes.error);

//Server
app.listen(3000, function(){
    console.log("Server is listening")
})

//server heroku or cloud
//app.listen(process.env.PORT || 3000);