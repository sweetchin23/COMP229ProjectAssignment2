// // // // controllers/invoice.controller.js

// // // import Invoice from '../models/invoice.model.js';
// // // import extend from 'lodash/extend.js';
// // // import errorHandler from './error.controller.js';

// // // const create = async (req, res) => {
// // //   try {
// // //     const invoice = new Invoice(req.body);
// // //     await invoice.save();
// // //     return res.status(201).json({ message: "Successfully added invoice!" });
// // //   } catch (err) {
// // //     console.error(err); // Log the error for debugging
// // //     return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
// // //   }
// // // };

// // // const list = async (req, res) => {
// // //   try {
// // //     let invoices = await Invoice.find().select('amount paymentStatus dateIssued _appointmentID _patientID');
// // //     res.json(invoices);
// // //   } catch (err) {
// // //     return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
// // //   }
// // // };

// // // const invoiceByID = async (req, res, next, id) => {
// // //   try {
// // //     let invoice = await Invoice.findById(id);
// // //     if (!invoice) return res.status(400).json({ error: "Invoice not found" });
// // //     req.profile = invoice;
// // //     next();
// // //   } catch (err) {
// // //     return res.status(400).json({ error: "Could not retrieve invoice" });
// // //   }
// // // };

// // // const read = (req, res) => {
// // //   return res.json(req.profile);
// // // };

// // // const update = async (req, res) => {
// // //   try {
// // //     let invoice = req.profile;
// // //     invoice = extend(invoice, req.body);
// // //     invoice.updated = Date.now();
// // //     await invoice.save();
// // //     res.json(invoice);
// // //   } catch (err) {
// // //     return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
// // //   }
// // // };

// // // const remove = async (req, res) => {
// // //   try {
// // //     let invoice = req.profile;
// // //     let deletedInvoice = await invoice.deleteOne();
// // //     res.json(deletedInvoice);
// // //   } catch (err) {
// // //     return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
// // //   }
// // // };

// // // export default { create, invoiceByID, read, list, remove, update };


// // import Invoice from '../models/invoice.model.js';
// // import extend from 'lodash/extend.js';
// // import errorHandler from './error.controller.js';

// // const create = async (req, res) => {
// //   const invoice = new Invoice(req.body);
// //   try {
// //     await invoice.save();
// //     return res.status(200).json({ message: "Successfully added invoice!" });
// //   } catch (err) {
// //     return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
// //   }
// // };

// // const list = async (req, res) => {
// //   try {
// //     let invoices = await Invoice.find().select('amount paymentStatus dateIssued _appointmentID _patientID');
// //     res.json(invoices);
// //   } catch (err) {
// //     return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
// //   }
// // };

// // const invoiceByID = async (req, res, next, id) => {
// //   try {
// //     let invoice = await Invoice.findById(id);
// //     if (!invoice) return res.status(400).json({ error: "Invoice not found" });
// //     req.profile = invoice;
// //     next();
// //   } catch (err) {
// //     return res.status(400).json({ error: "Could not retrieve invoice" });
// //   }
// // };

// // const read = (req, res) => {
// //   return res.json(req.profile);
// // };

// // const update = async (req, res) => {
// //   try {
// //     let invoice = req.profile;
// //     invoice = extend(invoice, req.body);
// //     invoice.updated = Date.now();
// //     await invoice.save();
// //     res.json(invoice);
// //   } catch (err) {
// //     return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
// //   }
// // };

// // const remove = async (req, res) => {
// //   try {
// //     let invoice = req.profile;
// //     let deletedInvoice = await invoice.deleteOne();
// //     res.json(deletedInvoice);
// //   } catch (err) {
// //     return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
// //   }
// // };

// // export default { create, invoiceByID, read, list, remove, update };

// import Invoice from '../models/invoice.model.js';
// import extend from 'lodash/extend.js';
// import errorHandler from './error.controller.js';

// const create = async (req, res) => {
//   try {
//     const invoice = new Invoice(req.body);
//     await invoice.save();
//     return res.status(201).json({ message: "Successfully added invoice!" });
//   } catch (err) {
//     return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
//   }
// };

// const list = async (req, res) => {
//   try {
//     let invoices = await Invoice.find().select('invoiceID amount paymentStatus dateIssued _appointmentID _patientID');
//     res.json(invoices);
//   } catch (err) {
//     return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
//   }
// };

// const invoiceByID = async (req, res, next, id) => {
//   try {
//     let invoice = await Invoice.findById(id);
//     if (!invoice)
//       return res.status('400').json({
//         error: "Invoice not found"
//       });
//     req.profile = invoice;
//     next();
//   } catch (err) {
//     return res.status(400).json({
//       error: "Could not retrieve invoice"
//     });
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
//     return res.status(400).json({
//       error: errorHandler.getErrorMessage(err)
//     });
//   }
// };

// const remove = async (req, res) => {
//   try {
//     let invoice = req.profile;
//     let deletedInvoice = await invoice.remove();
//     res.json(deletedInvoice);
//   } catch (err) {
//     return res.status(400).json({
//       error: errorHandler.getErrorMessage(err)
//     });
//   }
// };

// export default {
//   create,
//   list,
//   invoiceByID,
//   read,
//   update,
//   remove
// };


import Invoice from '../models/invoice.model.js'; // Import the Invoice model
import extend from 'lodash/extend.js';
import errorHandler from './error.controller.js';

const create = async (req, res) => {
  const invoice = new Invoice(req.body); // Create a new invoice from request body
  try {
    await invoice.save(); // Save the invoice to the database
    return res.status(200).json({ message: "Successfully added invoice!" });
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const list = async (_req, res) => {
  try {
    let invoices = await Invoice.find(); // Retrieve all invoices from the database
    res.json(invoices);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const invoiceByID = async (req, res, next, id) => {
  try {
    let invoice = await Invoice.findById(id); // Find an invoice by its ID
    if (!invoice) return res.status(400).json({ error: "Invoice not found" });
    req.profile = invoice; // Attach the invoice to the request object
    next();
  } catch (err) {
    return res.status(400).json({ error: "Could not retrieve invoice" });
  }
};

const read = (req, res) => {
  return res.json(req.profile); // Return the invoice data attached to the request object
};

const update = async (req, res) => {
  try {
    let invoice = req.profile; // Get the invoice from the request object
    invoice = extend(invoice, req.body); // Extend the existing invoice with new data
    invoice.updated = Date.now(); // Update the 'updated' field to the current date
    await invoice.save(); // Save the updated invoice
    res.json(invoice); // Return the updated invoice
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const remove = async (req, res) => {
  try {
    let invoice = req.profile; // Get the invoice from the request object
    let deletedInvoice = await invoice.deleteOne(); // Delete the invoice
    res.json(deletedInvoice); // Return the deleted invoice data
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

export default { create, invoiceByID, read, list, remove, update };
