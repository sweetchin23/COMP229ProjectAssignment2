// const getAuthHeaders = () => {
//   const token = localStorage.getItem('jwtToken'); // Assuming the token is stored in localStorage
//   return {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${token}`
//   };
// };

// // api-patient.js
// const createPatient = async (patient) => {
//   try {
//     let response = await fetch('/api/patients/by', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(patient),
//     });
//     return await response.json();
//   } catch (err) {
//     console.log(err);
//   }
// };

// const readPatient = async (params, signal) => {
//   try {
//     let response = await fetch('/api/patients/' + params.patientId, {
//       method: 'GET',
//       signal: signal,
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       },
//     });
//     return await response.json();
//   } catch (err) {
//     console.log(err);
//   }
// };

// const updatePatient = async (params, patient) => {
//   try {
//     let response = await fetch('/api/patients/' + params.patientId, {
//       method: 'PUT',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(patient),
//     });
//     return await response.json();
//   } catch (err) {
//     console.log(err);
//   }
// };

// const deletePatient = async (patientId) => {
//   try {
//     let response = await fetch('/api/patients/' + patientId, {
//       method: 'DELETE',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       },
//     });
//     return await response.json();
//   } catch (err) {
//     console.log(err);
//   }
// };

// const listPatients = async () => {
//   try {
//     let response = await fetch('/api/patients', {
//       method: 'GET',
//       headers: {
//         'Accept': 'application/json',
//       },
//     });
//     return await response.json();
//   } catch (err) {
//     console.log(err);
//   }
// };

// export { createPatient, readPatient, updatePatient, deletePatient, listPatients };

// const createPatient = async (patient) => { 
//   try {
//       let response = await fetch('/api/patients/', { 
//           method: 'POST',
//           headers: {
//               'Accept': 'application/json',
//               'Content-Type': 'application/json' 
//           },
//           body: JSON.stringify(patient) 
//       });
//       return await response.json();
//   } catch(err) {
//       console.log(err);
//   }
// }

// const listPatients = async (signal) => { 
//   try {
//       let response = await fetch('/api/patients/', { 
//           method: 'GET',
//           signal: signal, 
//       });
//       return await response.json();
//   } catch(err) {
//       console.log(err);
//   }
// }

// const readPatient = async (params, credentials, signal) => { 
//   try {
//       let response = await fetch('/api/patients/' + params.patientId, { 
//           method: 'GET',
//           signal: signal, 
//           headers: {
//               'Accept': 'application/json',
//               'Content-Type': 'application/json',
//               'Authorization': 'Bearer ' + credentials.t 
//           }
//       });
//       return await response.json();
//   } catch(err) {
//       console.log(err);
//   }
// }

// const updatePatient = async (params, credentials, patient) => { 
//   try {
//       let response = await fetch('/api/patients/' + params.patientId, { 
//           method: 'PUT',
//           headers: {
//               'Accept': 'application/json',
//               'Content-Type': 'application/json',
//               'Authorization': 'Bearer ' + credentials.t 
//           },
//           body: JSON.stringify(patient) 
//       });
//       return await response.json();
//   } catch(err) {
//       console.log(err);
//   }
// }

// const deletePatient = async (params, credentials) => { 
//   try {
//       let response = await fetch('/api/patients/' + params.patientId, { 
//           method: 'DELETE',
//           headers: {
//               'Accept': 'application/json',
//               'Content-Type': 'application/json',
//               'Authorization': 'Bearer ' + credentials.t 
//           }
//       });
//       return await response.json();
//   } catch(err) {
//       console.log(err);
//   }
// }

// export { createPatient, listPatients, readPatient, updatePatient, deletePatient };



//===========================

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
    } catch(err) {
        console.log(err);
    }
  }
  
  const listPatients = async (signal) => { 
    try {
        let response = await fetch('/api/patients/', { 
            method: 'GET',
            signal: signal, 
        });
        return await response.json();
    } catch(err) {
        console.log(err);
    }
  }
  
  const readPatient = async (params, credentials, signal) => { 
    try {
        let response = await fetch('/api/patients/' + params.patientId, { 
            method: 'GET',
            signal: signal, 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t 
            }
        });
        return await response.json();
    } catch(err) {
        console.log(err);
    }
  }
  
// const updatePatient = async (params, credentials, patient) => { 
//   try {
//       let response = await fetch('/api/patients/' + params.patientId, { 
//           method: 'PUT',
//           headers: {
//               'Accept': 'application/json',
//               'Content-Type': 'application/json',
//               'Authorization': 'Bearer ' + credentials.t 
//           },
//           body: JSON.stringify(patient) 
//       });
//       if (response.status === 401) {
//           console.error("Unauthorized: Redirecting to login...");
//           // Optionally redirect to login or handle unauthorized access
//           return;
//       }
//       if (!response.ok) {
//           // Throw error if the response is not ok (like 400 or 500)
//           throw new Error('Failed to update the patient.');
//       }
//       return await response.json();
//   } catch(err) {
//       console.log('Error in updatePatient:', err.message);
//   }
// }
  
const updatePatient = async (params, credentials, patient) => { 
    try {
        let response = await fetch('/api/patients/' + params.patientId, { 
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t 
            },
            body: JSON.stringify(patient) 
        });
        if (response.status === 401) {
            console.error("Unauthorized: Redirecting to login...");
            // Optionally redirect to login or handle unauthorized access
            return;
        }
        if (!response.ok) {
            // Throw error if the response is not ok (like 400 or 500)
            throw new Error('Failed to update the patient.');
        }
        return await response.json();
    } catch(err) {
        console.log('Error in updatePatient:', err.message);
    }
  }
  

  const deletePatient = async (params, credentials) => { 
    try {
        let response = await fetch('/api/patients/' + params.patientId, { 
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t 
            }
        });
        if (response.status === 401) {
            console.error("Unauthorized: Redirecting to login...");
            // Optionally redirect to login or handle unauthorized access
        }
        return await response.json();
    } catch(err) {
        console.log(err);
    }
  }
  
  export { createPatient, listPatients, readPatient, updatePatient, deletePatient };
  

