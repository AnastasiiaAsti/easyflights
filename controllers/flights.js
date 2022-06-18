const Flight = require('../models/flight')

module.exports = {
    new: newMovie,
}

function newMovie(req, res) {
    res.render('flights/new');
}