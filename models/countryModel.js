const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerDetailsSchema = new Schema({
    role: {
        type: String,
        required: true
    },
    battingStyle: {
        type: String,
        required: true
    },
    bowlingStyle: {
        type: String,
        required: true
    }
});

const PlayerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    details: PlayerDetailsSchema
});

const CountrySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    flag: {
        type: String
    },
    players: [PlayerSchema]
});

module.exports = mongoose.model('Country', CountrySchema);