const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    phone: String,
    age: String,
    email: { type: String, required: true, unique: true },
    pin: String,
    city: String,
    sub_area: String,
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
