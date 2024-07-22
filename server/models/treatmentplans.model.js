const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const treatmentPlanSchema = new Schema({
  treatmentPlanID: String,
  patientID: String,
  treatmentDetails: String,
  dateCreated: Date,
  recommendedFollowUps: String,
});

module.exports = mongoose.model('TreatmentPlan', treatmentPlanSchema);
