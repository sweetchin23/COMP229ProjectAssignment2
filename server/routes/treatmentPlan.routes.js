  import express from 'express';
  import treatmentPlanCtrl from '../controllers/treatmentPlan.controller.js';

  const router = express.Router();

  router.route('/api/treatmentplans')
    .post(treatmentPlanCtrl.create)
    .get(treatmentPlanCtrl.list);

  router.route('/api/treatmentplans/:treatmentPlanId')
    .get(treatmentPlanCtrl.read)
    .put(treatmentPlanCtrl.update)
    .delete(treatmentPlanCtrl.remove);

  router.param('treatmentPlanId', treatmentPlanCtrl.treatmentPlanByID);

  export default router;
