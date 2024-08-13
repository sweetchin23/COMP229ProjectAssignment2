// // const getAuthHeaders = () => {
// //   const token = localStorage.getItem('jwtToken'); // Assuming the token is stored in localStorage
// //   return {
// //     'Accept': 'application/json',
// //     'Content-Type': 'application/json',
// //     'Authorization': `Bearer ${token}`
// //   };
// // };

// // const createTreatmentPlan = async (treatmentPlan) => {
// //     try {
// //       let response = await fetch('/api/treatmentplans/', {
// //         method: 'POST',
// //         headers: {
// //           'Accept': 'application/json',
// //           'Content-Type': 'application/json'
// //         },
// //         body: JSON.stringify(treatmentPlan)
// //       });
// //       return await response.json();
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };
  
// //   const listTreatmentPlans = async (signal) => {
// //     try {
// //       let response = await fetch('/api/treatmentplans/', {
// //         method: 'GET',
// //         signal: signal,
// //       });
// //       return await response.json();
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };
  
// //   const readTreatmentPlan = async (params, signal) => {
// //     try {
// //       let response = await fetch('/api/treatmentplans/' + params.treatmentPlanId, {
// //         method: 'GET',
// //         signal: signal,
// //         headers: {
// //           'Accept': 'application/json',
// //           'Content-Type': 'application/json'
// //         }
// //       });
// //       return await response.json();
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };
  
// //   const updateTreatmentPlan = async (params, treatmentPlan) => {
// //     try {
// //       let response = await fetch('/api/treatmentplans/' + params.treatmentPlanId, {
// //         method: 'PUT',
// //         headers: {
// //           'Accept': 'application/json',
// //           'Content-Type': 'application/json'
// //         },
// //         body: JSON.stringify(treatmentPlan)
// //       });
// //       return await response.json();
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };
  
// //   const removeTreatmentPlan = async (params) => {
// //     try {
// //       let response = await fetch('/api/treatmentplans/' + params.treatmentPlanId, {
// //         method: 'DELETE',
// //         headers: {
// //           'Accept': 'application/json',
// //           'Content-Type': 'application/json'
// //         }
// //       });
// //       return await response.json();
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };
  
// //   export { createTreatmentPlan, listTreatmentPlans, readTreatmentPlan, updateTreatmentPlan, removeTreatmentPlan };

// // const createTreatmentPlan = async (treatmentplan) => { 
// //   try {
// //       let response = await fetch('/api/treatmentplans/', { 
// //           method: 'POST',
// //           headers: {
// //               'Accept': 'application/json',
// //               'Content-Type': 'application/json' 
// //           },
// //           body: JSON.stringify(treatmentplan) 
// //       });
// //       return await response.json(); 
// //   } catch(err) {
// //       console.log(err); 
// //   }
// // };

// // const listTreatmentPlans = async (signal) => { 
// //   try {
// //       let response = await fetch('/api/treatmentplans/', { 
// //           method: 'GET',
// //           signal: signal, 
// //       });
// //       return await response.json(); 
// //   } catch(err) {
// //       console.log(err); 
// //   }
// // };

// // const readTreatmentPlan = async (params, credentials, signal) => { 
// //   try {
// //       let response = await fetch('/api/treatmentplans/' + params.treatmentplanId, { 
// //           method: 'GET',
// //           signal: signal, 
// //           headers: {
// //               'Accept': 'application/json',
// //               'Content-Type': 'application/json',
// //               'Authorization': 'Bearer ' + credentials.t 
// //           }
// //       });
// //       return await response.json(); 
// //   } catch(err) {
// //       console.log(err); 
// //   }
// // };

// // const updateTreatmentPlan = async (params, credentials, treatmentplan) => { 
// //   try {
// //       let response = await fetch('/api/treatmentplans/' + params.treatmentplanId, { 
// //           method: 'PUT',
// //           headers: {
// //               'Accept': 'application/json',
// //               'Content-Type': 'application/json',
// //               'Authorization': 'Bearer ' + credentials.t 
// //           },
// //           body: JSON.stringify(treatmentplan) 
// //       });
// //       return await response.json(); 
// //   } catch(err) {
// //       console.log(err); 
// //   }
// // };

// // const removeTreatmentPlan = async (params, credentials) => { 
// //   try {
// //       let response = await fetch('/api/treatmentplans/' + params.treatmentplanId, { 
// //           method: 'DELETE',
// //           headers: {
// //               'Accept': 'application/json',
// //               'Content-Type': 'application/json',
// //               'Authorization': 'Bearer ' + credentials.t 
// //           }
// //       });
// //       return await response.json(); 
// //   } catch(err) {
// //       console.log(err); 
// //   }
// // };

// // export { createTreatmentPlan, listTreatmentPlans, readTreatmentPlan, updateTreatmentPlan, removeTreatmentPlan };

// //==================================================

// const createTreatmentPlan = async (treatmentplan) => { 
//     try {
//         let response = await fetch('/api/treatmentplans/', { 
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json' 
//             },
//             body: JSON.stringify(treatmentplan) 
//         });
//         return await response.json(); 
//     } catch(err) {
//         console.log(err); 
//     }
//   };
  
//   const listTreatmentPlans = async (signal) => { 
//     try {
//         let response = await fetch('/api/treatmentplans/', { 
//             method: 'GET',
//             signal: signal, 
//         });
//         return await response.json(); 
//     } catch(err) {
//         console.log(err); 
//     }
//   };
  
//   const readTreatmentPlan = async (params, credentials, signal) => { 
//     try {
//         let response = await fetch('/api/treatmentplans/' + params.treatmentplanId, { 
//             method: 'GET',
//             signal: signal, 
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer ' + credentials.t 
//             }
//         });
//         return await response.json(); 
//     } catch(err) {
//         console.log(err); 
//     }
//   };
  
//   const updateTreatmentPlan = async (params, credentials, treatmentplan) => { 
//     try {
//         let response = await fetch('/api/treatmentplans/' + params.treatmentplanId, { 
//             method: 'PUT',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer ' + credentials.t 
//             },
//             body: JSON.stringify(treatmentplan) 
//         });
//         return await response.json(); 
//     } catch(err) {
//         console.log(err); 
//     }
//   };
  
//   const removeTreatmentPlan = async (params, credentials) => { 
//     try {
//         let response = await fetch('/api/treatmentplans/' + params.treatmentplanId, { 
//             method: 'DELETE',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer ' + credentials.t 
//             }
//         });
//         return await response.json(); 
//     } catch(err) {
//         console.log(err); 
//     }
//   };
  
//   export { createTreatmentPlan, listTreatmentPlans, readTreatmentPlan, updateTreatmentPlan, removeTreatmentPlan };
  
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
        }
        return await response.json();
    } catch(err) {
        console.log(err);
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
  

