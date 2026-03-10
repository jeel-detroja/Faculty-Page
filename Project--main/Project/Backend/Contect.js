const mongoose = require('mongoose');

const Contact = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message : { type: String, require: true }
});

const Contactus = mongoose.model('Contact',Contact);
module.exports = Contactus;