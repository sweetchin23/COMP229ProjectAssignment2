import Dentist from '../models/dentist.model.js';
import extend from 'lodash/extend.js';
import errorHandler from './error.controller.js';

const create = async (req, res) => {
  const dentist = new Dentist(req.body);
  try {
    await dentist.save();
    return res.status(200).json({ message: "Successfully added dentist!" });
  } catch (err) {
    if (err.code === 11000) {
      let duplicateField = Object.keys(err.keyPattern)[0];  // Identifies the field that caused the duplicate error
      return res.status(400).json({ error: `Duplicate entry for ${duplicateField}. Please use a different value.`, duplicate: true });
    }
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};


const list = async (_req, res) => {
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
