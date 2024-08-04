// src/api-invoice.js

const createInvoice = async (invoice, token) => {
  try {
    let response = await fetch('/api/invoices/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(invoice)
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error:', errorText);
    }
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const listInvoices = async (signal, token) => {
  try {
    let response = await fetch('/api/invoices/', {
      method: 'GET',
      signal: signal,
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const readInvoice = async (params, token, signal) => {
  try {
    let response = await fetch('/api/invoices/' + params.invoiceId, {
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

const updateInvoice = async (params, token, invoice) => {
  try {
    let response = await fetch('/api/invoices/' + params.invoiceId, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(invoice)
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error:', errorText);
    }
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const removeInvoice = async (params, token) => {
  try {
    let response = await fetch('/api/invoices/' + params.invoiceId, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error:', errorText);
    }
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export { createInvoice, listInvoices, readInvoice, updateInvoice, removeInvoice };
