const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    index,
    show,
    new: newFlight,
    create,
    delete: deleteFlight
}

function index(req, res) {
    Flight.find({}, function (err, flights) {
        console.log(flights)
        res.render('flights/index', {
            flights
        });
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        Ticket.find({ flight: flight._id }, function (err, tickets) {
            res.render('flights/show', { title: 'Flight Details', flight, tickets });
        });
    });
}

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    req.body.flightNo = req.body.flightNo.trim();
    const flight = new Flight(req.body);
    flight.save(function (err) {
        //respond to the request, in this case redirect
        if (err) {
            console.log(err)
            return res.redirect('/flights')
        }
        res.redirect('/flights');
    })
}


function deleteFlight(req, res) {
	Flight.findByIdAndRemove(req.params.id, function(err, flight) {
		res.redirect('/');
	});
}