const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: 'First name is required'
  },
  lastName: {
    type: String,
    trim: true,
    required: 'Last name is required'
  },
  dateOfBirth: {
    type: Date,
    required: 'Date of birth is required'
  },
  gender: {
    type: String,
    required: 'Gender is required'
  },
  phone: {
    type: String,
    required: 'Phone number is required'
  },
  email: {
    type: String,
    trim: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    required: 'Email is required'
  },
  address: {
    type: String,
    required: 'Address is required'
  },
  medicalHistory: {
    type: String,
    required: 'Medical history is required'
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Patient', PatientSchema);
