// import TreatmentPlan from '../models/treatmentPlan.model.js';
// import extend from 'lodash/extend.js';
// import errorHandler from './error.controller.js';

// const create = async (req, res) => {
//   try {
//     const treatmentPlan = new TreatmentPlan(req.body);
//     await treatmentPlan.save();
//     return res.status(201).json({ message: "Successfully added treatment plan!" });
//   } catch (err) {
//     return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
//   }
// };

// const list = async (_req, res) => {
//   try {
//     let treatmentPlans = await TreatmentPlan.find().populate('patientID', '_id name');
//     res.json(treatmentPlans);
//   } catch (err) {
//     return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
//   }
// };

// const treatmentPlanByID = async (req, res, next, id) => {
//   try {
//     let treatmentPlan = await TreatmentPlan.findById(id).populate('patientID', '_id name');
//     if (!treatmentPlan)
//       return res.status('400').json({ error: "Treatment plan not found" });
//     req.profile = treatmentPlan;
//     next();
//   } catch (err) {
//     return res.status('400').json({ error: "Could not retrieve treatment plan" });
//   }
// };

// const read = (req, res) => {
//   return res.json(req.profile);
// };

// const update = async (req, res) => {
//   try {
//     let treatmentPlan = req.profile;
//     treatmentPlan = extend(treatmentPlan, req.body);
//     treatmentPlan.updated = Date.now();
//     await treatmentPlan.save();
//     res.json(treatmentPlan);
//   } catch (err) {
//     return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
//   }
// };

// const remove = async (req, res) => {
//   try {
//     let treatmentPlan = req.profile;
//     let deletedTreatmentPlan = await treatmentPlan.deleteOne();
//     res.json(deletedTreatmentPlan);
//   } catch (err) {
//     return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
//   }
// };

// export default { create, treatmentPlanByID, read, list, remove, update };

import TreatmentPlan from '../models/treatmentPlan.model.js'; // Import the TreatmentPlan model
import extend from 'lodash/extend.js';
import errorHandler from './error.controller.js';

const create = async (req, res) => {
  const treatmentPlan = new TreatmentPlan(req.body);
  try {
    await treatmentPlan.save();
    return res.status(200).json({ message: "Successfully added treatment plan!" });
  } catch (err) {
    console.error('Error in creating treatment plan:', err); // Log error for debugging
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const list = async (_req, res) => {
  try {
    let treatmentPlans = await TreatmentPlan.find();
    res.json(treatmentPlans);
  } catch (err) {
    console.error('Error in listing treatment plans:', err); // Log error for debugging
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const treatmentPlanByID = async (req, res, next, id) => {
  try {
    let treatmentPlan = await TreatmentPlan.findById(id);
    if (!treatmentPlan) return res.status(400).json({ error: "Treatment plan not found" });
    req.profile = treatmentPlan;
    next();
  } catch (err) {
    console.error('Error in fetching treatment plan by ID:', err); // Log error for debugging
    return res.status(400).json({ error: "Could not retrieve treatment plan" });
  }
};

const read = (req, res) => {
  return res.json(req.profile);
};

const update = async (req, res) => {
  try {
    let treatmentPlan = req.profile;
    treatmentPlan = extend(treatmentPlan, req.body);
    treatmentPlan.updated = Date.now();
    await treatmentPlan.save();
    res.json(treatmentPlan);
  } catch (err) {
    console.error('Error in updating treatment plan:', err); // Log error for debugging
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const remove = async (req, res) => {
  try {
    let treatmentPlan = req.profile;
    let deletedTreatmentPlan = await treatmentPlan.deleteOne();
    res.json(deletedTreatmentPlan);
  } catch (err) {
    console.error('Error in deleting treatment plan:', err); // Log error for debugging
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

export default { create, treatmentPlanByID, read, list, remove, update };
