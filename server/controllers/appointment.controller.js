const Appointment = require('../models/appointment.model.js');

// Create a new appointment
exports.createAppointment = async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).send(appointment);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Get all appointments
exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).send(appointments);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Get an appointment by ID
exports.getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) return res.status(404).send();
    res.status(200).send(appointment);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Update an appointment by ID
exports.updateAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!appointment) return res.status(404).send();
    res.status(200).send(appointment);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Delete an appointment by ID
exports.deleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);
    if (!appointment) return res.status(404).send();
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
};
