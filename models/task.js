var mongoose = require('mongoose');

var taskSchema = mongoose.Schema({

    name: String,
    description: String,
    category: String,
    owner: String,
    date_insert: Date,
    date_due: Date,
    date_cloture: Date,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
})

module.exports = mongoose.model('tasks', taskSchema)