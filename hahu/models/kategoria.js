const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const kategoriaSchema = new Schema({
    _id: Number,
    name: {
        type: String,
        required: true,
        unique: true,
        maxlength: 30
    }
});

module.exports = mongoose.model('kategoria', kategoriaSchema, 'kategoriak')