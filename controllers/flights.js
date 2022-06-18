const Flight = require('../models/flight')

module.exports = {
    new: newMovie,
    create
}

function newMovie(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    req.body.flightNo = req.body.flightNo.trim();
    res.redirect('/movies');
}
