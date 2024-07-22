const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoice.controller.js');

router.post('/api/invoices', invoiceController.createInvoice);
router.get('/api/invoices', invoiceController.getInvoices);
router.get('/api/invoices/:id', invoiceController.getInvoiceById);
router.put('/api/invoices/:id', invoiceController.updateInvoice);
router.delete('/api/invoices/:id', invoiceController.deleteInvoice);

module.exports = router;
