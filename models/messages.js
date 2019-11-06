var mongoose = require('mongoose');

var messagesSchema = mongoose.Schema({

    title: String,
    content: String,
    date_exp: Date,
    read: Boolean,
    sender: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },

})

module.exports = mongoose.model('messages', messagesSchema)