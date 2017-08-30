//Home
exports.home = function(req, res){
    res.render('home', {
        title: 'Our Solar System',
    });
};

//Single Page
exports.planetSingle = function(req, res){
    var planets_number = req.params.planets_number;
    res.send("Planet Number =" + planets_number);
};

//Error
exports.error = function(req, res){
    res.send("404 Error - Page Not Found");
};