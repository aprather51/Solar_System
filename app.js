var express = require('express');
var app = express();

//enable ejs
app.set('view engine', 'ejs');

//External Path
app.use(express.static(__dirname + "/public"));

//Routes


//Home
app.get('/', function(req, res){
    res.render('home', {
        nbr: '1',
        name: 'Mercury',
        desc: 'The 1st planet revloves 88 days around sun...',
        list: ['Apple', 'Banana', 'Orange']
    });
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