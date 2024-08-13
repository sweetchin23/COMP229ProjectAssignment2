// import express from 'express'
// import dentistCtrl from '../controllers/dentist.controller.js'
// import authCtrl from '../controllers/auth.controller.js'

// const router = express.Router()
// router.route('/api/dentists').post(dentistCtrl.create)
// router.route('/api/dentists').get(dentistCtrl.list)
// router.route('/api/dentists/:dentistId')
//   .get(authCtrl.requireSignin, dentistCtrl.read)
//   .put(authCtrl.requireSignin, authCtrl.hasAuthorization, dentistCtrl.update)
//   .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, dentistCtrl.remove)
// router.param('dentistId', dentistCtrl.dentistByID)
// router.route('/api/dentists/:dentistId').get(dentistCtrl.read)
// router.route('/api/dentists/:dentistId').put(dentistCtrl.update)
// router.route('/api/dentists/:dentistId').delete(dentistCtrl.remove)

// export default router

import express from 'express';
import dentistCtrl from '../controllers/dentist.controller.js';
import authCtrl from '../controllers/auth.controller.js';

const router = express.Router();
router.route('/api/dentists')
  .post(dentistCtrl.create)
  .get(dentistCtrl.list);

router.route('/api/dentists/:dentistId')
  .get(authCtrl.requireSignin, dentistCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, dentistCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, dentistCtrl.remove);

router.param('dentistId', dentistCtrl.dentistByID);

export default router;
