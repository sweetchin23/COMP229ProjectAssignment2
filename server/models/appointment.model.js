const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  appointmentID: {
    type: String,
    required: 'Appointment ID is required'
  },
  dentistID: {
    type: String,
    required: 'Dentist ID is required'
  },
  appointmentDate: {
    type: Date,
    required: 'Appointment date is required'
  },
  appointmentTime: {
    type: Date,
    required: 'Appointment time is required'
  },
  treatmentType: {
    type: String,
    required: 'Treatment type is required'
  },
  status: {
    type: String,
    required: 'Status is required'
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

module.exports = mongoose.model('Appointment', AppointmentSchema);
