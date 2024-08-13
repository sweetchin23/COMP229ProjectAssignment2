import mongoose from 'mongoose';

const InvoiceSchema = new mongoose.Schema({
  invoiceID: {
    type: String,
    required: true
  },
  patientID: {
    type: String,
    required: true
  },
  appointmentID: {
    type: String,
    required: true
  },
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
  firstName: {
    type: String,
    required: true
  },
  lastName: {
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

export default mongoose.model('Invoice', InvoiceSchema);
