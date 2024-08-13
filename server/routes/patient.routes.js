// import express from 'express'
// import patientCtrl from '../controllers/patient.controller.js'
// import authCtrl from '../controllers/auth.controller.js'

// const router = express.Router()
// router.route('/api/patients').post(patientCtrl.create)
// router.route('/api/patients').get(patientCtrl.list)
// router.route('/api/patients/:patientId')
//   .get(authCtrl.requireSignin, patientCtrl.read)
//   .put(authCtrl.requireSignin, authCtrl.hasAuthorization, patientCtrl.update)
//   .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, patientCtrl.remove)
// router.param('patientId', patientCtrl.patientByID)
// router.route('/api/patients/:patientId').get(patientCtrl.read)
// router.route('/api/patients/:patientId').put(patientCtrl.update)
// router.route('/api/patients/:patientId').delete(patientCtrl.remove)

// export default router

//================================================================================

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
