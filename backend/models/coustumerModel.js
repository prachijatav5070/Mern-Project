const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    where: String,
    checkOut: {
        type: Date,
        required: true,
        get: (val) => val.toISOString().split('T')[0]  // Custom getter to return only the date part
    },
    checkIn: {
        type: Date,
        required: true,
        get: (val) => val.toISOString().split('T')[0]  // Custom getter to return only the date part
    },
    room: Number,
    guest: Number
});

// Apply the getter function for dates
customerSchema.set('toJSON', { getters: true });

module.exports = mongoose.model("Customer", customerSchema);
