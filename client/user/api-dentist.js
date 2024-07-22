const createDentist = async (dentist) => {
  try {
    let response = await fetch('/api/dentists/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
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

const readDentist = async (params, signal) => {
  try {
    let response = await fetch('/api/dentists/' + params.dentistId, {
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

const updateDentist = async (params, dentist) => {
  try {
    let response = await fetch('/api/dentists/' + params.dentistId, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dentist)
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const removeDentist = async (params) => {
  try {
    let response = await fetch('/api/dentists/' + params.dentistId, {
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

export { createDentist, listDentists, readDentist, updateDentist, removeDentist };
