import express from 'express';
import dentistCtrl from '../controllers/dentist.controller.js';
import authCtrl from '../controllers/auth.controller.js';

const router = express.Router();

router.route('/api/dentists')
  .post(authCtrl.requireSignin, dentistCtrl.create)
  .get(dentistCtrl.list);

router.route('/api/dentists/:dentistId')
  .get(authCtrl.requireSignin, dentistCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, dentistCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, dentistCtrl.remove);

router.param('dentistId', dentistCtrl.dentistByID);

export default router;
