var planetsJSON = require('../planets.json');

//Home
exports.home = function(req, res){
    var planets = planetsJSON.planets;
    res.render('home', {
        title: 'Our Solar System',
        planets: planets
    });
};

//Single Page
exports.planetSingle = function(req, res){
    var planets = planetsJSON.planets;
    var planetNbr = req.params.planets_numbers;

    if( planetNbr >= 1 && planetNbr <= 8){
        var planet = planets[planetNbr - 1];
        var title = planet.planet_name;

        res.render('planet_single', {
            planets : planets,
            planet : planet,
            title : title
        });
    } else {
        res.render('error', {
            planets : planets,
            title : "404 Error"
        });
    }
};


//Error
exports.error = function(req, res){
    var planets = planetsJSON.planets;
    res.render('error', {
        planets : planets,
        title : "404 Error"
    });
};