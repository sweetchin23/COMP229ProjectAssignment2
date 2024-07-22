const createPatient = async (patient) => {
  try {
    let response = await fetch('/api/patients/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(patient)
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const listPatients = async (signal) => {
  try {
    let response = await fetch('/api/patients/', {
      method: 'GET',
      signal: signal,
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
        'Content-Type': 'application/json'
      }
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
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(patient)
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const removePatient = async (params) => {
  try {
    let response = await fetch('/api/patients/' + params.patientId, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export { createPatient, listPatients, readPatient, updatePatient, removePatient };
