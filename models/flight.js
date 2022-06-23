const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        emun: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: Date,
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        required: true
    },
    airport: {
        type: String,
        enum: ['DEN', 'AUS', 'DFW', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        minlength: 10,
        maxlength: 9999
    },
    departs: {
        type: Date,
        required: true,
        default: function () {
            return new Date().getFullYear();
        }
    },
    destinations: [destinationSchema]
})

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);