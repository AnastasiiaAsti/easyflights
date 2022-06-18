const Flight = require('../models/flight')

module.exports = {
    new: newMovie,
    create,
    index
}

function newMovie(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    req.body.flightNo = req.body.flightNo.trim();
    res.redirect('/movies');
}

function index(req, res) {
    Flight.find({}, function (err, flights) {
        //console.log(movies)
        res.render('flights/index', {
            flights
        })
    })
}