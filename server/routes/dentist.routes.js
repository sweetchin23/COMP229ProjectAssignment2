const express = require('express');
const router = express.Router();
const dentistController = require('../controllers/dentist.controller.js');

router.post('/api/dentists', dentistController.createDentist);
router.get('/api/dentists', dentistController.getDentists);
router.get('/api/dentists/:id', dentistController.getDentistById);
router.put('/api/dentists/:id', dentistController.updateDentist);
router.delete('/api/dentists/:id', dentistController.deleteDentist);

module.exports = router;
