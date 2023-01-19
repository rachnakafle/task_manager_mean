const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    _listId:{
        type:mongoose.Types.ObjectId,
        require:true
    }
})

const Task = mongoose.model('List', ListSchema);

module.exports = { Task }