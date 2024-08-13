import express from 'express'
import invoiceCtrl from '../controllers/invoice.controller.js'
import authCtrl from '../controllers/auth.controller.js'

const router = express.Router()
router.route('/api/invoices').post(invoiceCtrl.create)
router.route('/api/invoices').get(invoiceCtrl.list)
router.route('/api/invoices/:invoiceId')
  .get(authCtrl.requireSignin, invoiceCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, invoiceCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, invoiceCtrl.remove)
router.param('invoiceId', invoiceCtrl.invoiceByID)
router.route('/api/invoices/:invoiceId').get(invoiceCtrl.read)
router.route('/api/invoices/:invoiceId').put(invoiceCtrl.update)
router.route('/api/invoices/:invoiceId').delete(invoiceCtrl.remove)

export default router
