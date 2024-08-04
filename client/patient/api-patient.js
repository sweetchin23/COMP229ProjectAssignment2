const getAuthHeaders = () => {
  const token = localStorage.getItem('jwtToken'); // Assuming the token is stored in localStorage
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };
};

// api-patient.js
const createPatient = async (patient) => {
  try {
    let response = await fetch('/api/patients/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(patient),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const readPatient = async (params, signal) => {
  try {
    let response = await fetch('/api/patients/' + params.patientId, {
      method: 'GET',
      signal: signal,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const updatePatient = async (params, patient) => {
  try {
    let response = await fetch('/api/patients/' + params.patientId, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(patient),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const deletePatient = async (patientId) => {
  try {
    let response = await fetch('/api/patients/' + patientId, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const listPatients = async () => {
  try {
    let response = await fetch('/api/patients', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export { createPatient, readPatient, updatePatient, deletePatient, listPatients };
