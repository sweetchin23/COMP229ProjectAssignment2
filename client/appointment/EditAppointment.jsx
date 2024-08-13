// import React, { useState, useEffect } from 'react';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';
// import Icon from '@material-ui/core/Icon';
// import { makeStyles } from '@material-ui/core/styles';
// import auth from '../lib/auth-helper.js';
// import { readAppointment, updateAppointment } from './api-appointment'; // Update with the correct path
// import { Navigate, useParams } from 'react-router-dom';

// const useStyles = makeStyles(theme => ({
//   card: {
//     maxWidth: 600,
//     margin: 'auto',
//     textAlign: 'center',
//     marginTop: theme.spacing(5),
//     paddingBottom: theme.spacing(2)
//   },
//   title: {
//     margin: theme.spacing(2),
//     color: theme.palette.protectedTitle
//   },
//   error: {
//     verticalAlign: 'middle'
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 300
//   },
//   submit: {
//     margin: 'auto',
//     marginBottom: theme.spacing(2)
//   }
// }));

// export default function EditAppointment() {
//   const classes = useStyles();
//   const { appointmentId } = useParams();
//   const [values, setValues] = useState({
//     patientID: '',
//     dentistID: '',
//     appointmentDate: '',
//     status: '',
//     open: false,
//     error: '',
//     NavigateToProfile: false
//   });
//   const jwt = auth.isAuthenticated();

//   useEffect(() => {
//     const abortController = new AbortController();
//     const signal = abortController.signal;
//     readAppointment({ appointmentId: appointmentId }, signal).then((data) => {
//       if (data && data.error) {
//         setValues({ ...values, error: data.error });
//       } else {
//         setValues({
//           ...values,
//           patientID: data.patientID,
//           dentistID: data.dentistID,
//           appointmentDate: data.appointmentDate,
//           status: data.status
//         });
//       }
//     });
//     return function cleanup() {
//       abortController.abort();
//     };
//   }, [appointmentId]);

//   const clickSubmit = () => {
//     const appointment = {
//       patientID: values.patientID || undefined,
//       dentistID: values.dentistID || undefined,
//       appointmentDate: values.appointmentDate || undefined,
//       status: values.status || undefined
//     };
//     updateAppointment({ appointmentId: appointmentId }, appointment).then((data) => {
//       if (data && data.error) {
//         setValues({ ...values, error: data.error });
//       } else {
//         setValues({ ...values, NavigateToProfile: true });
//       }
//     });
//   };

//   const handleChange = name => event => {
//     setValues({ ...values, [name]: event.target.value });
//   };

//   if (values.NavigateToProfile) {
//     return (<Navigate to={'/appointment/' + values.appointmentId} />);
//   }

//   return (
//     <Card className={classes.card}>
//       <CardContent>
//         <Typography variant="h6" className={classes.title}>
//           Edit Appointment
//         </Typography>
//         <TextField id="patientID" label="Patient ID" className={classes.textField} value={values.patientID} onChange={handleChange('patientID')} margin="normal" /><br />
//         <TextField id="dentistID" label="Dentist ID" className={classes.textField} value={values.dentistID} onChange={handleChange('dentistID')} margin="normal" /><br />
//         <TextField id="appointmentDate" type="date" label="Appointment Date" className={classes.textField} value={values.appointmentDate} onChange={handleChange('appointmentDate')} margin="normal" /><br />
//         <TextField id="status" label="Status" className={classes.textField} value={values.status} onChange={handleChange('status')} margin="normal" /><br />
//         {values.error && (<Typography component="p" color="error">
//           <Icon color="error" className={classes.error}>error</Icon>
//           {values.error}
//         </Typography>)}
//       </CardContent>
//       <CardActions>
//         <Button color="primary" variant="contained" onClick={clickSubmit} className={classes.submit}>Submit</Button>
//       </CardActions>
//     </Card>
//   );
// }
