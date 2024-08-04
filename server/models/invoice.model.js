import mongoose from 'mongoose';

const InvoiceSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true
  },
  paymentStatus: {
    type: String,
    required: true
  },
  dateIssued: {
    type: Date,
    required: true
  },
  _appointmentID: {
    type: mongoose.Schema.ObjectId,
    ref: 'Appointment',
    required: true
  },
  _patientID: {
    type: mongoose.Schema.ObjectId,
    ref: 'Patient',
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

export default mongoose.model('Invoice', InvoiceSchema);
