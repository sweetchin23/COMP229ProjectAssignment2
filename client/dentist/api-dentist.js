const getAuthHeaders = () => {
  const token = localStorage.getItem('jwtToken'); // Assuming the token is stored in localStorage
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };
};

const createDentist = async (dentist, token) => {
  try {
    let response = await fetch('/api/dentists/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(dentist)
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const listDentists = async (signal) => {
  try {
    let response = await fetch('/api/dentists/', {
      method: 'GET',
      signal: signal,
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const readDentist = async (params, token, signal) => {
  try {
    let response = await fetch('/api/dentists/' + params.dentistId, {
      method: 'GET',
      signal: signal,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const updateDentist = async (params, token, dentist) => {
  try {
    let response = await fetch('/api/dentists/' + params.dentistId, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(dentist)
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const removeDentist = async (params, token) => {
  try {
    let response = await fetch('/api/dentists/' + params.dentistId, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export { createDentist, listDentists, readDentist, updateDentist, removeDentist };
