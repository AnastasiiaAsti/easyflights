const Flight = require('../models/flight');

module.exports = {
    create
};

function create(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        //push subdoc into Mongoose arrays
        flight.destinations.push(req.body)
        //save any changes to the parent doc
        flight.save(function (err) {
            //respond to the request, in this case redirect
            res.redirect(`/flights/${flight._id}`)
        })
    })
}