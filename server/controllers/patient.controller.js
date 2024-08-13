// import Patient from '../models/patient.model.js';
// import extend from 'lodash/extend.js';
// import errorHandler from './error.controller.js';

// const create = async (req, res) => {
//   const patient = new Patient(req.body);
//   try {
//     await patient.save();
//     return res.status(200).json({ message: "Successfully added patient!" });
//   } catch (err) {
//     return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
//   }
// };

// const list = async (req, res) => {
//   try {
//     let patients = await Patient.find();
//     res.json(patients);
//   } catch (err) {
//     return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
//   }
// };

// const patientByID = async (req, res, next, id) => {
//   try {
//     let patient = await Patient.findById(id);
//     if (!patient) return res.status('400').json({ error: "Patient not found" });
//     req.profile = patient;
//     next();
//   } catch (err) {
//     return res.status('400').json({ error: "Could not retrieve patient" });
//   }
// };

// const read = (req, res) => {
//   return res.json(req.profile);
// };

// const update = async (req, res) => {
//   try {
//     let patient = req.profile;
//     patient = extend(patient, req.body);
//     patient.updated = Date.now();
//     await patient.save();
//     res.json(patient);
//   } catch (err) {
//     return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
//   }
// };

// const remove = async (req, res) => {
//   try {
//     let patient = req.profile;
//     let deletedPatient = await patient.deleteOne();
//     res.json(deletedPatient);
//   } catch (err) {
//     return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
//   }
// };

// export default { create, patientByID, read, list, remove, update };

// import Patient from '../models/patient.model.js';
// import extend from 'lodash/extend.js';
// import errorHandler from './error.controller.js';

// const create = async (req, res) => {
//   const patient = new Patient(req.body);
//   try {
//     await patient.save();
//     return res.status(200).json({ message: "Successfully added patient!" });
//   } catch (err) {
//     return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
//   }
// };

// const list = async (req, res) => {
//   try {
//     let patients = await Patient.find();
//     res.json(patients);
//   } catch (err) {
//     return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
//   }
// };

// const patientByID = async (req, res, next, id) => {
//   try {
//     let patient = await Patient.findById(id);
//     if (!patient) return res.status(400).json({ error: "Patient not found" });
//     req.profile = patient;
//     next();
//   } catch (err) {
//     return res.status(400).json({ error: "Could not retrieve patient" });
//   }
// };

// const read = (req, res) => {
//   return res.json(req.profile);
// };

// const update = async (req, res) => {
//   try {
//     let patient = req.profile;
//     patient = extend(patient, req.body);
//     patient.updated = Date.now();
//     await patient.save();
//     res.json(patient);
//   } catch (err) {
//     return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
//   }
// };

// const remove = async (req, res) => {
//   try {
//     let patient = req.profile;
//     let deletedPatient = await patient.deleteOne();
//     res.json(deletedPatient);
//   } catch (err) {
//     return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
//   }
// };

// export default { create, patientByID, read, list, remove, update };


//==============================================================

import Patient from '../models/patient.model.js';
import extend from 'lodash/extend.js';
import errorHandler from './error.controller.js';

const create = async (req, res) => {
  const patient = new Patient(req.body);
  try {
    await patient.save();
    return res.status(200).json({ message: "Successfully added patient!" });
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const list = async (req, res) => {
  try {
    let patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const patientByID = async (req, res, next, id) => {
  try {
    let patient = await Patient.findById(id);
    if (!patient) return res.status(400).json({ error: "Patient not found" });
    req.profile = patient;
    next();
  } catch (err) {
    return res.status(400).json({ error: "Could not retrieve patient" });
  }
};

const read = (req, res) => {
  return res.json(req.profile);
};

const update = async (req, res) => {
  try {
    let patient = req.profile;
    patient = extend(patient, req.body);
    patient.updated = Date.now();
    await patient.save();
    res.json(patient);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const remove = async (req, res) => {
  try {
    let patient = req.profile;
    let deletedPatient = await patient.deleteOne();
    res.json(deletedPatient);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

export default { create, patientByID, read, list, remove, update };
