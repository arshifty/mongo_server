const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    name: {
        type: String
    },
    contact: {
        type: String
    },
    address: {
        type: String
    }
});

module.exports = mongoose.model('customer', customerSchema);