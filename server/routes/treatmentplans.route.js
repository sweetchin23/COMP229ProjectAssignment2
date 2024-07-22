const express = require('express');
const router = express.Router();
const treatmentPlanController = require('../controllers/treatmentplans.controller.js');

router.post('api/treatmentplans', treatmentPlanController.createTreatmentPlan);
router.get('api/treatmentplans', treatmentPlanController.getTreatmentPlans);
router.get('api/treatmentplans:id', treatmentPlanController.getTreatmentPlanById);
router.put('api/treatmentplans:id', treatmentPlanController.updateTreatmentPlan);
router.delete('api/treatmentplans:id', treatmentPlanController.deleteTreatmentPlan);

module.exports = router;
