const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        default: 'n/a',
        enum: ['American', 'Southwestern', 'United'],
    },
    airport: {
        type: String,
        enum: ['DEN', 'AUS', 'DFW', 'LAX', 'SAN'],
        default: 'DEN',
    },
    flightNo: {
        type: Number,
        default: 'n/a',
        minlength: 10,
        maxlength: 9999
    },
    departs: {
        type: Date,
        required: true,
        default: function () {
            return new Date().getFullYear();
        }
    }
})

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);