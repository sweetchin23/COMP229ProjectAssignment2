import React, { useState } from 'react';

const AppointmentManagement = () => {
  const [appointmentID, setAppointmentID] = useState('');
  const [dentistID, setDentistID] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [treatmentType, setTreatmentType] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const appointment = { appointmentID, dentistID, appointmentDate, appointmentTime, treatmentType, status };

    const response = await fetch('/api/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(appointment),
    });

    const data = await response.json();
    if (data.success) {
      // Handle success (e.g., clear form, show success message)
    } else {
      alert('Failed to add appointment');
    }
  };

  return (
    <div>
      <h2>Appointment Management</h2>
      <form id="appointmentForm" onSubmit={handleSubmit}>
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
          <label htmlFor="dentistID">Dentist ID:</label>
          <input
            type="text"
            id="dentistID"
            value={dentistID}
            onChange={(e) => setDentistID(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="appointmentDate">Appointment Date:</label>
          <input
            type="date"
            id="appointmentDate"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="appointmentTime">Appointment Time:</label>
          <input
            type="time"
            id="appointmentTime"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="treatmentType">Treatment Type:</label>
          <input
            type="text"
            id="treatmentType"
            value={treatmentType}
            onChange={(e) => setTreatmentType(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <input
            type="text"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentManagement;
