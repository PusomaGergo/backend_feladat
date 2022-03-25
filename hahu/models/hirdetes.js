const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hirdetesSchema = new Schema({
    _id: Number,
    kategoria: {
        type: Number,
         default: 1
    },
    cim: {
        type: String,
        unique: true,
        required: true,
        maxlength: 100
    },
    leiras: {
        type: String,
        maxlength: 3000
    },
    hirdetesDatuma: {
        type: Date,
        default: Date.now
    },
    serulesMentes: Boolean,
    arFt: {
        type: Number,
        required: true
    },
    kepUrl: {
        type: String,
        maxlength: 300
    }

});

module.exports = mongoose.model('hirdetes', hirdetesSchema, 'hirdetesek');