import mongoose from 'mongoose';

const TreatmentPlanSchema = new mongoose.Schema({
  treatmentDetails: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  recommendedFollowUps: String,
  patientID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  treatmentPlanID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  }
});

export default mongoose.model('TreatmentPlan', TreatmentPlanSchema);
