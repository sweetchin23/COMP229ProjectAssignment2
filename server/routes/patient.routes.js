const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patient.controller.js');

router.post('/api/patients', patientController.createPatient);
router.get('/api/patients', patientController.getPatients);
router.get('/api/patients/:id', patientController.getPatientById);
router.put('/api/patients/:id', patientController.updatePatient);
router.delete('/api/patients/:id', patientController.deletePatient);

module.exports = router;
