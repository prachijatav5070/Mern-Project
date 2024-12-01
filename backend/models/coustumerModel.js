const mongoose = require("mongoose");

const coustSchema = new mongoose.Schema({
    where: String,
    checkOut: Date,
    checkIn: Date,
    room: Number,
    guest: Number
});

module.exports = mongoose.model("Customer",coustSchema);
