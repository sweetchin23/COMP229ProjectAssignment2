// // models/patient.model.js
// import mongoose from 'mongoose';

// const PatientSchema = new mongoose.Schema({
//   firstName: {
//     type: String,
//     required: true
//   },
//   lastName: {
//     type: String,
//     required: true
//   },
//   dateOfBirth: {
//     type: Date,
//     required: true
//   },
//   gender: {
//     type: String,
//     required: true
//   },
//   phone: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   address: {
//     type: String,
//     required: true
//   },
//   medicalHistory: {
//     type: String,
//     required: true
//   },
//   patientID: {
//     type: String,
//     required: true
//   },
//   created: {
//     type: Date,
//     default: Date.now
//   },
//   updated: {
//     type: Date,
//     default: Date.now
//   }
// });

// export default mongoose.model('Patient', PatientSchema);

//=======================================================================

import mongoose from 'mongoose';

const PatientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  medicalHistory: {
    type: String,
    required: true
  },
  patientID: {
    type: String,
    required: true,
    unique: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Patient', PatientSchema);
