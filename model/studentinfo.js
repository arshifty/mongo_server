const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    class: {
        type: Number
    },
    status: {
        type: String
    },
    position: {
        type: Number
    },
    bangla: {
        type: Number
    },
    math: {
        type: Number
    },
    marks: {
        type: Number
    },
    gpa: {
        type: Number
    },
    date: {
        type: Date
    },


});

module.exports = mongoose.model('studentinfo', PostSchema);