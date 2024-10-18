const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
    name: String,
    enrollment_number: String,
    activity: { type: String }, 
    action: { type: String },
    details:{
        age: Number,
        department: String,
        university: String,
        email: String,
        phone: String
    },

}, { timestamps: true }); 

const EntryDetails = mongoose.model('Entry', entrySchema); 

module.exports = EntryDetails;
