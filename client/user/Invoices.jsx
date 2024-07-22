import React, { useState } from 'react';

const InvoiceManagement = () => {
  const [invoiceID, setInvoiceID] = useState('');
  const [patientID, setPatientID] = useState('');
  const [appointmentID, setAppointmentID] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');
  const [dateIssued, setDateIssued] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const invoice = { invoiceID, patientID, appointmentID, amount, paymentStatus, dateIssued };

    const response = await fetch('/api/invoices', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(invoice),
    });

    const data = await response.json();
    if (data.success) {
      // Handle success (e.g., clear form, show success message)
    } else {
      alert('Failed to add invoice');
    }
  };

  return (
    <div>
      <h2>Invoice Management</h2>
      <form id="invoiceForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="invoiceID">Invoice ID:</label>
          <input
            type="text"
            id="invoiceID"
            value={invoiceID}
            onChange={(e) => setInvoiceID(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="patientID">Patient ID:</label>
          <input
            type="text"
            id="patientID"
            value={patientID}
            onChange={(e) => setPatientID(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="appointmentID">Appointment ID:</label>
          <input
            type="text"
            id="appointmentID"
            value={appointmentID}
            onChange={(e) => setAppointmentID(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="paymentStatus">Payment Status:</label>
          <input
            type="text"
            id="paymentStatus"
            value={paymentStatus}
            onChange={(e) => setPaymentStatus(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="dateIssued">Date Issued:</label>
          <input
            type="date"
            id="dateIssued"
            value={dateIssued}
            onChange={(e) => setDateIssued(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Invoice</button>
      </form>
    </div>
  );
};

export default InvoiceManagement;
