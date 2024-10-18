// Student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    enrollment_number: String,
    details: {
        age: Number,
        department: String,
        university: String,
        email: String,
        phone: String
    }
});

const students = mongoose.model('Student', studentSchema);

module.exports = students;
