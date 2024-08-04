// routes/patient.routes.js
import express from 'express';
import patientCtrl from '../controllers/patient.controller.js';
import authCtrl from '../controllers/auth.controller.js';

const router = express.Router();

router.route('/api/patients')
  .post(patientCtrl.create)
  .get(patientCtrl.list);

router.route('/api/patients/:patientId')
  .get(authCtrl.requireSignin, patientCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, patientCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, patientCtrl.remove);

router.param('patientId', patientCtrl.patientByID);

export default router;
