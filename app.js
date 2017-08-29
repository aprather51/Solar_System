var express = require('express');
var app = express();

//enable ejs
app.set('view engines', 'ejs');

//Routes


//Home
app.get('/', function(req, res){
    res.send('home page');
});

app.get('/planets/:planets_numbers?', function(req, res){
    var planets_numbers = req.params.planets_numbers;
    res.send("Planet Number =" + planets_numbers);
});

//Error
app.get('*', function(req, res){
    res.send("404 Error - Page Not Found");
});

//Server
app.listen(3000, function(){
    console.log("Server is listening")
})

//server heroku or cloud
//app.listen(process.env.PORT || 3000);