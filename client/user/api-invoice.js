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
    } catch (err) {
      console.log(err);
    }
  };
  
  const listInvoices = async (signal) => {
    try {
      let response = await fetch('/api/invoices/', {
        method: 'GET',
        signal: signal,
      });
      return await response.json();
    } catch (err) {
      console.log(err);
    }
  };
  
  const readInvoice = async (params, signal) => {
    try {
      let response = await fetch('/api/invoices/' + params.invoiceId, {
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
  
  const updateInvoice = async (params, invoice) => {
    try {
      let response = await fetch('/api/invoices/' + params.invoiceId, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(invoice)
      });
      return await response.json();
    } catch (err) {
      console.log(err);
    }
  };
  
  const removeInvoice = async (params) => {
    try {
      let response = await fetch('/api/invoices/' + params.invoiceId, {
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
  
  export { createInvoice, listInvoices, readInvoice, updateInvoice, removeInvoice };
  