import express from 'express';
import invoiceCtrl from '../controllers/invoice.controller.js';
import authCtrl from '../controllers/auth.controller.js';

const router = express.Router();

router.route('/api/invoices')
  .post(authCtrl.requireSignin, invoiceCtrl.create)
  .get(authCtrl.requireSignin, invoiceCtrl.list);

router.route('/api/invoices/:invoiceId')
  .get(authCtrl.requireSignin, invoiceCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, invoiceCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, invoiceCtrl.remove);

router.param('invoiceId', invoiceCtrl.invoiceByID);

export default router;
