// import Appointment from '../models/appointment.model.js';
// import extend from 'lodash/extend.js';
// import errorHandler from './error.controller.js';

// const create = async (req, res) => {
//   try {
//     const appointment = new Appointment(req.body);
//     await appointment.save();
//     return res.status(201).json({ message: "Successfully created appointment!" });
//   } catch (err) {
//     return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
//   }
// };

// const list = async (req, res) => {
//   try {
//     let appointments = await Appointment.find().select('appointmentID patientID dentistID appointmentDate appointmentTime treatmentType status');
//     res.json(appointments);
//   } catch (err) {
//     return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
//   }
// };

// const appointmentByID = async (req, res, next, id) => {
//   try {
//     let appointment = await Appointment.findById(id);
//     if (!appointment) return res.status(400).json({ error: "Appointment not found" });
//     req.profile = appointment;
//     next();
//   } catch (err) {
//     return res.status(400).json({ error: "Could not retrieve appointment" });
//   }
// };

// const read = (req, res) => {
//   return res.json(req.profile);
// };

// const update = async (req, res) => {
//   try {
//     let appointment = req.profile;
//     appointment = extend(appointment, req.body);
//     appointment.updated = Date.now();
//     await appointment.save();
//     res.json(appointment);
//   } catch (err) {
//     return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
//   }
// };

// const remove = async (req, res) => {
//   try {
//     let appointment = req.profile;
//     let deletedAppointment = await appointment.deleteOne();
//     res.json(deletedAppointment);
//   } catch (err) {
//     return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
//   }
// };

// export default { create, appointmentByID, read, list, remove, update };


import Appointment from '../models/appointment.model.js';
import extend from 'lodash/extend.js';
import errorHandler from './error.controller.js';

const create = async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    return res.status(201).json({ message: "Successfully created appointment!" });
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const list = async (req, res) => {
  try {
    let appointments = await Appointment.find().select('appointmentID patientID dentistID appointmentDate appointmentTime treatmentType status');
    res.json(appointments);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const appointmentByID = async (req, res, next, id) => {
  try {
    let appointment = await Appointment.findById(id);
    if (!appointment) return res.status(400).json({ error: "Appointment not found" });
    req.profile = appointment;
    next();
  } catch (err) {
    return res.status(400).json({ error: "Could not retrieve appointment" });
  }
};

const read = (req, res) => {
  return res.json(req.profile);
};

const update = async (req, res) => {
  try {
    let appointment = req.profile;
    appointment = extend(appointment, req.body);
    appointment.updated = Date.now();
    await appointment.save();
    res.json(appointment);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const remove = async (req, res) => {
  try {
    let appointment = req.profile;
    let deletedAppointment = await appointment.deleteOne();
    res.json(deletedAppointment);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

export default { create, appointmentByID, read, list, remove, update };
