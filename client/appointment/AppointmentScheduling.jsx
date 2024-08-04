// // src/components/AppointmentManagement.js

// import React, { useState, useEffect } from 'react';
// import {
//   TextField,
//   Button,
//   Grid,
//   Card,
//   CardContent,
//   CardHeader,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
//   makeStyles
// } from '@material-ui/core';
// import { Delete, Edit } from '@material-ui/icons';
// import { createAppointment, listAppointments, removeAppointment, updateAppointment } from '../appointment/api-appointment';

// const useStyles = makeStyles((theme) => ({
//   card: {
//     maxWidth: 800,
//     margin: 'auto',
//     marginTop: theme.spacing(5),
//     padding: theme.spacing(3),
//   },
//   title: {
//     color: theme.palette.primary.main,
//     marginBottom: theme.spacing(2),
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: theme.spacing(2),
//   },
//   table: {
//     minWidth: 650,
//     marginTop: theme.spacing(5),
//   },
// }));

// const AppointmentManagement = () => {
//   const classes = useStyles();
//   const [appointments, setAppointments] = useState([]);
//   const [appointment, setAppointment] = useState({
//     appointmentID: '',
//     patientID: '',
//     dentistID: '',
//     appointmentDate: '',
//     appointmentTime: '',
//     treatmentType: '',
//     status: ''
//   });

//   useEffect(() => {
//     fetchAppointments();
//   }, []);

//   const fetchAppointments = async () => {
//     try {
//       const data = await listAppointments();
//       setAppointments(data);
//     } catch (error) {
//       console.error('Error fetching appointments:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAppointment({
//       ...appointment,
//       [name]: value
//     });
//   };

//   const handleAddAppointment = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await createAppointment(appointment);
//       if (response && !response.error) {
//         fetchAppointments();
//         setAppointment({
//           appointmentID: '',
//           patientID: '',
//           dentistID: '',
//           appointmentDate: '',
//           appointmentTime: '',
//           treatmentType: '',
//           status: ''
//         });
//       } else {
//         console.error('Error adding appointment:', response.error);
//       }
//     } catch (error) {
//       console.error('Error adding appointment:', error);
//     }
//   };

//   const handleDeleteAppointment = async (id) => {
//     try {
//       const response = await removeAppointment({ appointmentId: id });
//       if (response && !response.error) {
//         fetchAppointments();
//       } else {
//         console.error('Error deleting appointment:', response.error);
//       }
//     } catch (error) {
//       console.error('Error deleting appointment:', error);
//     }
//   };

//   const handleEditAppointment = (appointment) => {
//     setAppointment({
//       appointmentID: appointment.appointmentID,
//       patientID: appointment.patientID,
//       dentistID: appointment.dentistID,
//       appointmentDate: appointment.appointmentDate,
//       appointmentTime: appointment.appointmentTime,
//       treatmentType: appointment.treatmentType,
//       status: appointment.status
//     });
//   };

//   return (
//     <div>
//       <Card className={classes.card}>
//         <CardHeader className={classes.title} title="Appointment Management" />
//         <CardContent>
//           <form onSubmit={handleAddAppointment} className={classes.form}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="Appointment ID"
//                   name="appointmentID"
//                   value={appointment.appointmentID}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="Patient ID"
//                   name="patientID"
//                   value={appointment.patientID}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="Dentist ID"
//                   name="dentistID"
//                   value={appointment.dentistID}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="Appointment Date"
//                   name="appointmentDate"
//                   type="date"
//                   value={appointment.appointmentDate}
//                   onChange={handleChange}
//                   InputLabelProps={{
//                     shrink: true,
//                   }}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="Appointment Time"
//                   name="appointmentTime"
//                   type="time"
//                   value={appointment.appointmentTime}
//                   onChange={handleChange}
//                   InputLabelProps={{
//                     shrink: true,
//                   }}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="Treatment Type"
//                   name="treatmentType"
//                   value={appointment.treatmentType}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Status"
//                   name="status"
//                   value={appointment.status}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   color="primary"
//                   fullWidth
//                 >
//                   Add Appointment
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//         </CardContent>
//       </Card>
//       <TableContainer component={Paper} className={classes.table}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Appointment ID</TableCell>
//               <TableCell>Patient ID</TableCell>
//               <TableCell>Dentist ID</TableCell>
//               <TableCell>Appointment Date</TableCell>
//               <TableCell>Appointment Time</TableCell>
//               <TableCell>Treatment Type</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell align="right">Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {appointments.map((appointment) => (
//               <TableRow key={appointment._id}>
//                 <TableCell>{appointment.appointmentID}</TableCell>
//                 <TableCell>{appointment.patientID}</TableCell>
//                 <TableCell>{appointment.dentistID}</TableCell>
//                 <TableCell>{appointment.appointmentDate}</TableCell>
//                 <TableCell>{appointment.appointmentTime}</TableCell>
//                 <TableCell>{appointment.treatmentType}</TableCell>
//                 <TableCell>{appointment.status}</TableCell>
//                 <TableCell align="right">
//                   <IconButton onClick={() => handleEditAppointment(appointment)}>
//                     <Edit />
//                   </IconButton>
//                   <IconButton onClick={() => handleDeleteAppointment(appointment._id)}>
//                     <Delete />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default AppointmentManagement;


// src/components/AppointmentManagement.js

// client/appointment/AppointmentScheduling.jsx

import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  makeStyles
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { createAppointment, listAppointments, removeAppointment, updateAppointment } from './api-appointment'; // Corrected import path

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 800,
    margin: 'auto',
    marginTop: theme.spacing(5),
    padding: theme.spacing(3),
  },
  title: {
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  table: {
    minWidth: 650,
    marginTop: theme.spacing(5),
  },
}));

const AppointmentScheduling = () => {
  const classes = useStyles();
  const [appointments, setAppointments] = useState([]);
  const [appointment, setAppointment] = useState({
    appointmentID: '',
    patientID: '',
    dentistID: '',
    appointmentDate: '',
    appointmentTime: '',
    treatmentType: '',
    status: ''
  });

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const data = await listAppointments();
      setAppointments(data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment({
      ...appointment,
      [name]: value
    });
  };

  const handleAddAppointment = async (e) => {
    e.preventDefault();
    try {
      const response = await createAppointment(appointment);
      if (response && !response.error) {
        fetchAppointments();
        setAppointment({
          appointmentID: '',
          patientID: '',
          dentistID: '',
          appointmentDate: '',
          appointmentTime: '',
          treatmentType: '',
          status: ''
        });
      } else {
        console.error('Error adding appointment:', response.error);
      }
    } catch (error) {
      console.error('Error adding appointment:', error);
    }
  };

  const handleDeleteAppointment = async (id) => {
    try {
      const response = await removeAppointment({ appointmentId: id });
      if (response && !response.error) {
        fetchAppointments();
      } else {
        console.error('Error deleting appointment:', response.error);
      }
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };

  const handleEditAppointment = (appointment) => {
    setAppointment({
      appointmentID: appointment.appointmentID,
      patientID: appointment.patientID,
      dentistID: appointment.dentistID,
      appointmentDate: appointment.appointmentDate,
      appointmentTime: appointment.appointmentTime,
      treatmentType: appointment.treatmentType,
      status: appointment.status
    });
  };

  const handleUpdateAppointment = async () => {
    try {
      const response = await updateAppointment({ appointmentId: appointment._id }, appointment);
      if (response && !response.error) {
        fetchAppointments();
        setAppointment({
          appointmentID: '',
          patientID: '',
          dentistID: '',
          appointmentDate: '',
          appointmentTime: '',
          treatmentType: '',
          status: ''
        });
      } else {
        console.error('Error updating appointment:', response.error);
      }
    } catch (error) {
      console.error('Error updating appointment:', error);
    }
  };

  return (
    <div>
      <Card className={classes.card}>
        <CardHeader className={classes.title} title="Appointment Scheduling" />
        <CardContent>
          <form onSubmit={handleAddAppointment} className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Appointment ID"
                  name="appointmentID"
                  value={appointment.appointmentID}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Patient ID"
                  name="patientID"
                  value={appointment.patientID}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Dentist ID"
                  name="dentistID"
                  value={appointment.dentistID}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Appointment Date"
                  name="appointmentDate"
                  type="date"
                  value={appointment.appointmentDate}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Appointment Time"
                  name="appointmentTime"
                  type="time"
                  value={appointment.appointmentTime}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Treatment Type"
                  name="treatmentType"
                  value={appointment.treatmentType}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Status"
                  name="status"
                  value={appointment.status}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Add Appointment
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
      <TableContainer component={Paper} className={classes.table}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Appointment ID</TableCell>
              <TableCell>Patient ID</TableCell>
              <TableCell>Dentist ID</TableCell>
              <TableCell>Appointment Date</TableCell>
              <TableCell>Appointment Time</TableCell>
              <TableCell>Treatment Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment._id}>
                <TableCell>{appointment.appointmentID}</TableCell>
                <TableCell>{appointment.patientID}</TableCell>
                <TableCell>{appointment.dentistID}</TableCell>
                <TableCell>{appointment.appointmentDate}</TableCell>
                <TableCell>{appointment.appointmentTime}</TableCell>
                <TableCell>{appointment.treatmentType}</TableCell>
                <TableCell>{appointment.status}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleEditAppointment(appointment)}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteAppointment(appointment._id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AppointmentScheduling;
