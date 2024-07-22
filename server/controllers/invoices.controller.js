const Invoice = require('../models/invoice.model.js');

// Create a new invoice
exports.createInvoice = async (req, res) => {
  try {
    const invoice = new Invoice(req.body);
    await invoice.save();
    res.status(201).send(invoice);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Get all invoices
exports.getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.status(200).send(invoices);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Get an invoice by ID
exports.getInvoiceById = async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id);
    if (!invoice) return res.status(404).send();
    res.status(200).send(invoice);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Update an invoice by ID
exports.updateInvoice = async (req, res) => {
  try {
    const invoice = await Invoice.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!invoice) return res.status(404).send();
    res.status(200).send(invoice);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Delete an invoice by ID
exports.deleteInvoice = async (req, res) => {
  try {
    const invoice = await Invoice.findByIdAndDelete(req.params.id);
    if (!invoice) return res.status(404).send();
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
};
