const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:/miniApp1");


const userSchema = mongoose.Schema({
    username: String,
    name: String,
    password: String,
    age: Number,
    email: String
});

module.exports = mongoose.model('user', userSchema);