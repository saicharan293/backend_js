const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:/miniApp1");


const userSchema = mongoose.Schema({
    username: String,
    name: String,
    password: String,
    hashedPassword: String,
    age: Number,
    email: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId, ref: "post"
        }
    ]
});

module.exports = mongoose.model('user', userSchema);