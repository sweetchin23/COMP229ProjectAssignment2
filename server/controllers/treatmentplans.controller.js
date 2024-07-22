const TreatmentPlan = require('../models/treatmentplans.model.js');

// Create a new treatment plan
exports.createTreatmentPlan = async (req, res) => {
  try {
    const treatmentPlan = new TreatmentPlan(req.body);
    await treatmentPlan.save();
    res.status(201).send(treatmentPlan);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Get all treatment plans
exports.getTreatmentPlans = async (req, res) => {
  try {
    const treatmentPlans = await TreatmentPlan.find();
    res.status(200).send(treatmentPlans);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Get a treatment plan by ID
exports.getTreatmentPlanById = async (req, res) => {
  try {
    const treatmentPlan = await TreatmentPlan.findById(req.params.id);
    if (!treatmentPlan) return res.status(404).send();
    res.status(200).send(treatmentPlan);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Update a treatment plan by ID
exports.updateTreatmentPlan = async (req, res) => {
  try {
    const treatmentPlan = await TreatmentPlan.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!treatmentPlan) return res.status(404).send();
    res.status(200).send(treatmentPlan);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Delete a treatment plan by ID
exports.deleteTreatmentPlan = async (req, res) => {
  try {
    const treatmentPlan = await TreatmentPlan.findByIdAndDelete(req.params.id);
    if (!treatmentPlan) return res.status(404).send();
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
};
