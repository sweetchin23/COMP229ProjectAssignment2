const mongoose = require('mongoose');

const DentistSchema = new mongoose.Schema({
  dentistID: {
    type: String,
    required: 'Dentist ID is required'
  },
  firstName: {
    type: String,
    required: 'First name is required'
  },
  lastName: {
    type: String,
    required: 'Last name is required'
  },
  specialization: {
    type: String,
    required: 'Specialization is required'
  },
  phone: {
    type: String,
    required: 'Phone number is required'
  },
  email: {
    type: String,
    required: 'Email is required',
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  workingHours: {
    type: String,
    required: 'Working hours are required'
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

module.exports = mongoose.model('Dentist', DentistSchema);
