// models/appointment.model.js

import mongoose from 'mongoose';

const AppointmentSchema = new mongoose.Schema({
  appointmentID: {
    type: String,
    required: 'Appointment ID is required'
  },
  dentistID: {
    type: String,
    required: true
  },
  appointmentDate: {
    type: Date,
    required: true
  },
  appointmentTime: {
    type: String, // Use String instead of Date for time
    required: true
  },
  treatmentType: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
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

export default mongoose.model('Appointment', AppointmentSchema);
