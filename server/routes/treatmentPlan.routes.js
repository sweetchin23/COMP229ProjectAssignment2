import express from 'express'
import treatmentPlanCtrl from '../controllers/treatmentPlan.controller.js'
import authCtrl from '../controllers/auth.controller.js'

const router = express.Router()
router.route('/api/treatmentplans').post(treatmentPlanCtrl.create)
router.route('/api/treatmentplans').get(treatmentPlanCtrl.list)
router.route('/api/treatmentplans/:treatmentPlanId')
  .get(authCtrl.requireSignin, treatmentPlanCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, treatmentPlanCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, treatmentPlanCtrl.remove)
router.param('treatmentPlanId', treatmentPlanCtrl.treatmentPlanByID)
router.route('/api/treatmentplans/:treatmentplanId').get(treatmentPlanCtrl.read)
router.route('/api/treatmentplans/:treatmentplanId').put(treatmentPlanCtrl.update)
router.route('/api/treatmentplans/:treatmentplanId').delete(treatmentPlanCtrl.remove)

export default router