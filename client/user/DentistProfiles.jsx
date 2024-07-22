import React, { useState } from 'react';

const DentistManagement = () => {
  const [dentistID, setDentistID] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [workingHours, setWorkingHours] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dentist = { dentistID, firstName, lastName, specialization, phone, email, workingHours };

    const response = await fetch('/api/dentists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dentist),
    });

    const data = await response.json();
    if (data.success) {
      // Handle success (e.g., clear form, show success message)
    } else {
      alert('Failed to add dentist');
    }
  };

  return (
    <div>
      <h2>Dentist Management</h2>
      <form id="dentistForm" onSubmit={handleSubmit}>
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
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="specialization">Specialization:</label>
          <input
            type="text"
            id="specialization"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="workingHours">Working Hours:</label>
          <input
            type="text"
            id="workingHours"
            value={workingHours}
            onChange={(e) => setWorkingHours(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Dentist</button>
      </form>
    </div>
  );
};

export default DentistManagement;
