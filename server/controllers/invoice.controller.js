// // controllers/invoice.controller.js

// import Invoice from '../models/invoice.model.js';
// import extend from 'lodash/extend.js';
// import errorHandler from './error.controller.js';

// const create = async (req, res) => {
//   try {
//     const invoice = new Invoice(req.body);
//     await invoice.save();
//     return res.status(201).json({ message: "Successfully added invoice!" });
//   } catch (err) {
//     console.error(err); // Log the error for debugging
//     return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
//   }
// };

// const list = async (req, res) => {
//   try {
//     let invoices = await Invoice.find().select('amount paymentStatus dateIssued _appointmentID _patientID');
//     res.json(invoices);
//   } catch (err) {
//     return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
//   }
// };

// const invoiceByID = async (req, res, next, id) => {
//   try {
//     let invoice = await Invoice.findById(id);
//     if (!invoice) return res.status(400).json({ error: "Invoice not found" });
//     req.profile = invoice;
//     next();
//   } catch (err) {
//     return res.status(400).json({ error: "Could not retrieve invoice" });
//   }
// };

// const read = (req, res) => {
//   return res.json(req.profile);
// };

// const update = async (req, res) => {
//   try {
//     let invoice = req.profile;
//     invoice = extend(invoice, req.body);
//     invoice.updated = Date.now();
//     await invoice.save();
//     res.json(invoice);
//   } catch (err) {
//     return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
//   }
// };

// const remove = async (req, res) => {
//   try {
//     let invoice = req.profile;
//     let deletedInvoice = await invoice.deleteOne();
//     res.json(deletedInvoice);
//   } catch (err) {
//     return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
//   }
// };

// export default { create, invoiceByID, read, list, remove, update };


import Invoice from '../models/invoice.model.js';
import extend from 'lodash/extend.js';
import errorHandler from './error.controller.js';

const create = async (req, res) => {
  const invoice = new Invoice(req.body);
  try {
    await invoice.save();
    return res.status(200).json({ message: "Successfully added invoice!" });
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const list = async (req, res) => {
  try {
    let invoices = await Invoice.find().select('amount paymentStatus dateIssued _appointmentID _patientID');
    res.json(invoices);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const invoiceByID = async (req, res, next, id) => {
  try {
    let invoice = await Invoice.findById(id);
    if (!invoice) return res.status(400).json({ error: "Invoice not found" });
    req.profile = invoice;
    next();
  } catch (err) {
    return res.status(400).json({ error: "Could not retrieve invoice" });
  }
};

const read = (req, res) => {
  return res.json(req.profile);
};

const update = async (req, res) => {
  try {
    let invoice = req.profile;
    invoice = extend(invoice, req.body);
    invoice.updated = Date.now();
    await invoice.save();
    res.json(invoice);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const remove = async (req, res) => {
  try {
    let invoice = req.profile;
    let deletedInvoice = await invoice.deleteOne();
    res.json(deletedInvoice);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

export default { create, invoiceByID, read, list, remove, update };
