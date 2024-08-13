const createInvoice = async (invoice) => { 
  try {
      let response = await fetch('/api/invoices/', { 
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json' 
          },
          body: JSON.stringify(invoice) 
      });
      return await response.json();
  } catch(err) {
      console.log(err);
  }
}

const listInvoices = async (signal) => { 
  try {
      let response = await fetch('/api/invoices/', { 
          method: 'GET',
          signal: signal, 
      });
      return await response.json();
  } catch(err) {
      console.log(err);
  }
}

const readInvoice = async (params, credentials, signal) => { 
  try {
      let response = await fetch('/api/invoices/' + params.invoiceId, { 
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

const updateInvoice = async (params, credentials, invoice) => { 
  try {
      let response = await fetch('/api/invoices/' + params.invoiceId, { 
          method: 'PUT',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + credentials.t 
          },
          body: JSON.stringify(invoice) 
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

const deleteInvoice = async (params, credentials) => { 
  try {
      let response = await fetch('/api/invoices/' + params.invoiceId, { 
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

export { createInvoice, listInvoices, readInvoice, updateInvoice, deleteInvoice };
