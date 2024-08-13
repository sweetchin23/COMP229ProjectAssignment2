// import Dentist from '../models/dentist.model.js';

// const create = async (req, res) => {
//   try {
//     const dentist = new Dentist(req.body);
//     await dentist.save();
//     res.status(201).json(dentist);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// const list = async (req, res) => {
//   try {
//     const dentists = await Dentist.find();
//     res.status(200).json(dentists);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// const read = async (req, res) => {
//   try {
//     const dentist = await Dentist.findById(req.params.dentistId);
//     if (!dentist) return res.status(404).json({ error: 'Dentist not found' });
//     res.status(200).json(dentist);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// const update = async (req, res) => {
//   try {
//     const dentist = await Dentist.findByIdAndUpdate(req.params.dentistId, req.body, { new: true, runValidators: true });
//     if (!dentist) return res.status(404).json({ error: 'Dentist not found' });
//     res.status(200).json(dentist);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// const remove = async (req, res) => {
//   try {
//     const dentist = await Dentist.findByIdAndDelete(req.params.dentistId);
//     if (!dentist) return res.status(404).json({ error: 'Dentist not found' });
//     res.status(204).json({ message: 'Dentist deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// const dentistByID = async (req, res, next, id) => {
//   try {
//     const dentist = await Dentist.findById(id);
//     if (!dentist) return res.status(404).json({ error: 'Dentist not found' });
//     req.dentist = dentist;
//     next();
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// export default { create, list, read, update, remove, dentistByID };


import Dentist from '../models/dentist.model.js';
import extend from 'lodash/extend.js';
import errorHandler from './error.controller.js';

const create = async (req, res) => {
  const dentist = new Dentist(req.body);
  try {
    await dentist.save();
    return res.status(200).json({ message: "Successfully added dentist!" });
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

// Get all dentists
exports.getDentists = async (req, res) => {
  try {
    let dentists = await Dentist.find();
    res.json(dentists);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const dentistByID = async (req, res, next, id) => {
  try {
    let dentist = await Dentist.findById(id);
    if (!dentist) return res.status(400).json({ error: "Dentist not found" });
    req.profile = dentist;
    next();
  } catch (err) {
    return res.status(400).json({ error: "Could not retrieve dentist" });
  }
};

const read = (req, res) => {
  return res.json(req.profile);
};

const update = async (req, res) => {
  try {
    let dentist = req.profile;
    dentist = extend(dentist, req.body);
    dentist.updated = Date.now();
    await dentist.save();
    res.json(dentist);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const remove = async (req, res) => {
  try {
    let dentist = req.profile;
    let deletedDentist = await dentist.deleteOne();
    res.json(deletedDentist);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

export default { create, dentistByID, read, list, remove, update };
