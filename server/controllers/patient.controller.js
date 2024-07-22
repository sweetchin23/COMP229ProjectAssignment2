const Patient = require('../models/patient.model.js');

// Create a new patient
exports.createPatient = async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).send(patient);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Get all patients
exports.getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).send(patients);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Get a patient by ID
exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).send();
    res.status(200).send(patient);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Update a patient by ID
exports.updatePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!patient) return res.status(404).send();
    res.status(200).send(patient);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Delete a patient by ID
exports.deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndDelete(req.params.id);
    if (!patient) return res.status(404).send();
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
};
