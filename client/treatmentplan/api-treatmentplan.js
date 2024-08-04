const getAuthHeaders = () => {
  const token = localStorage.getItem('jwtToken'); // Assuming the token is stored in localStorage
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };
};

const createTreatmentPlan = async (treatmentPlan) => {
    try {
      let response = await fetch('/api/treatmentplans/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(treatmentPlan)
      });
      return await response.json();
    } catch (err) {
      console.log(err);
    }
  };
  
  const listTreatmentPlans = async (signal) => {
    try {
      let response = await fetch('/api/treatmentplans/', {
        method: 'GET',
        signal: signal,
      });
      return await response.json();
    } catch (err) {
      console.log(err);
    }
  };
  
  const readTreatmentPlan = async (params, signal) => {
    try {
      let response = await fetch('/api/treatmentplans/' + params.treatmentPlanId, {
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
  
  const updateTreatmentPlan = async (params, treatmentPlan) => {
    try {
      let response = await fetch('/api/treatmentplans/' + params.treatmentPlanId, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(treatmentPlan)
      });
      return await response.json();
    } catch (err) {
      console.log(err);
    }
  };
  
  const removeTreatmentPlan = async (params) => {
    try {
      let response = await fetch('/api/treatmentplans/' + params.treatmentPlanId, {
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
  
  export { createTreatmentPlan, listTreatmentPlans, readTreatmentPlan, updateTreatmentPlan, removeTreatmentPlan };
  