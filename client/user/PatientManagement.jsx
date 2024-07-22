import React, { useState } from 'react';

const PatientManagement = () => {
  const [patients, setPatients] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const patient = { firstName, lastName, dateOfBirth, gender, phone, email, address, medicalHistory };

    const response = await fetch('/api/patients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(patient),
    });

    const data = await response.json();
    if (data.success) {
      setPatients([...patients, patient]);
      // Clear form
      setFirstName('');
      setLastName('');
      setDateOfBirth('');
      setGender('');
      setPhone('');
      setEmail('');
      setAddress('');
      setMedicalHistory('');
    } else {
      alert('Failed to add patient');
    }
  };

  return (
    <div>
      <h2>Patient Management</h2>
      <form id="patientForm" onSubmit={handleSubmit}>
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
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <input
            type="text"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
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
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="medicalHistory">Medical History:</label>
          <input
            type="text"
            id="medicalHistory"
            value={medicalHistory}
            onChange={(e) => setMedicalHistory(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Patient</button>
      </form>

      <h3>Patient List</h3>
      <ul>
        {patients.map((patient, index) => (
          <li key={index}>
            {patient.firstName} {patient.lastName} - {patient.dateOfBirth} - {patient.gender} - {patient.phone} - {patient.email} - {patient.address} - {patient.medicalHistory}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientManagement;
