const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
  invoiceID: {
    type: String,
    required: 'Invoice ID is required'
  },
  patientID: {
    type: String,
    required: 'Patient ID is required'
  },
  appointmentID: {
    type: String,
    required: 'Appointment ID is required'
  },
  amount: {
    type: Number,
    required: 'Amount is required'
  },
  paymentStatus: {
    type: String,
    required: 'Payment status is required'
  },
  dateIssued: {
    type: Date,
    default: Date.now,
    required: 'Date issued is required'
  }
});

module.exports = mongoose.model('Invoice', InvoiceSchema);
