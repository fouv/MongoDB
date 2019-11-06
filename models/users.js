var mongoose = require('mongoose');

var usersSchema = mongoose.Schema({

    firstName: String,
    lastName: String,
    email: String,
    password: String,
    age: Number,
    status: String,
    gender: String,
    date_insert: Date,

})

module.exports = mongoose.model('users', usersSchema)