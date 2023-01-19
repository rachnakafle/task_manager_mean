const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    }
})

const List = mongoose.model('List', ListSchema);

module.exports = { List }