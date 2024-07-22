const Dentist = require('../models/dentist.model.js');

// Create a new dentist
exports.createDentist = async (req, res) => {
  try {
    const dentist = new Dentist(req.body);
    await dentist.save();
    res.status(201).send(dentist);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Get all dentists
exports.getDentists = async (req, res) => {
  try {
    const dentists = await Dentist.find();
    res.status(200).send(dentists);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Get a dentist by ID
exports.getDentistById = async (req, res) => {
  try {
    const dentist = await Dentist.findById(req.params.id);
    if (!dentist) return res.status(404).send();
    res.status(200).send(dentist);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Update a dentist by ID
exports.updateDentist = async (req, res) => {
  try {
    const dentist = await Dentist.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!dentist) return res.status(404).send();
    res.status(200).send(dentist);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Delete a dentist by ID
exports.deleteDentist = async (req, res) => {
  try {
    const dentist = await Dentist.findByIdAndDelete(req.params.id);
    if (!dentist) return res.status(404).send();
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
};
