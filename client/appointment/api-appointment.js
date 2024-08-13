// src/api-appointment.js

const getAuthHeaders = () => {
  const token = localStorage.getItem('jwtToken'); // Assuming the token is stored in localStorage
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };
};

const createAppointment = async (appointment) => {
  try {
    let response = await fetch('/api/appointments/', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(appointment)
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const listAppointments = async (signal) => {
  try {
    let response = await fetch('/api/appointments/', {
      method: 'GET',
      signal: signal,
      headers: getAuthHeaders(),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const readAppointment = async (params, signal) => {
  try {
    let response = await fetch('/api/appointments/' + params.appointmentId, {
      method: 'GET',
      signal: signal,
      headers: getAuthHeaders()
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const updateAppointment = async (params, appointment) => {
  try {
    let response = await fetch('/api/appointments/' + params.appointmentId, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(appointment)
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const removeAppointment = async (params) => {
  try {
    let response = await fetch('/api/appointments/' + params.appointmentId, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export { createAppointment, listAppointments, readAppointment, updateAppointment, removeAppointment };
