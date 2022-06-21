const Flight = require('../models/flight')

module.exports = {
    new: newFlight,
    create,
    index
}

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    req.body.flightNo = req.body.flightNo.trim();
    const flight = new Flight(req.body);
    res.redirect('/flights');
}

function index(req, res) {
    Flight.find({}, function (err, flights) {
        //console.log(flights)
        res.render('flights/index', {
            flights
        })
    })
}