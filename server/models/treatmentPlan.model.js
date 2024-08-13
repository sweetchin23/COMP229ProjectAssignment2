import mongoose from 'mongoose';

const TreatmentPlanSchema = new mongoose.Schema({
  patientID: {
    type: String,  // Assuming patientID is a string as per the image
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  followups: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now,
  },
  treatmentDetails1: {
    type: String,
    required: true,
  },
  treatmentPlanID: {
    type: String,  // Assuming treatmentplanID is also a string as per the image
    required: true,
  },
});

export default mongoose.model('TreatmentPlan', TreatmentPlanSchema);
