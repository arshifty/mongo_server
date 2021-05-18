const mongoose = require('mongoose');

const teacherSchema = mongoose.Schema({
    name: {
        type: String
    },
    cls: {
        type: String
    }
});

module.exports = mongoose.model('teacher', teacherSchema);