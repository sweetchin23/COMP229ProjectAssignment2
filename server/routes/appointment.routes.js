const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointment.controller.js');

router.post('/api/appointments', appointmentController.createAppointment);
router.get('/api/appointments', appointmentController.getAppointments);
router.get('/api/appointments/:id', appointmentController.getAppointmentById);
router.put('/api/appointments/:id', appointmentController.updateAppointment);
router.delete('/api/appointments/:id', appointmentController.deleteAppointment);

module.exports = router;
