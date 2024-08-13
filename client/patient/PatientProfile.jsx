/* eslint-disable react/prop-types */
// import React, { useState, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import auth from '../lib/auth-helper.js';
// import { readPatient } from './api-patient.js';
// import { useLocation, Navigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

// const useStyles = makeStyles(theme => ({
//   root: theme.mixins.gutters({
//     maxWidth: 600,
//     margin: 'auto',
//     padding: theme.spacing(3),
//     marginTop: theme.spacing(5)
//   }),
//   title: {
//     marginTop: theme.spacing(3),
//     color: theme.palette.protectedTitle
//   }
// }));

// export default function PatientProfile() {
//   const location = useLocation();
//   const classes = useStyles();
//   const [patient, setPatient] = useState({});
//   const [redirectToSignin, setRedirectToSignin] = useState(false);
//   const jwt = auth.isAuthenticated();
//   const { patientId } = useParams();

// //   useEffect(() => {
// //     const abortController = new AbortController();
// //     const signal = abortController.signal;
// //     readPatient({
// //       patientId: patientId
// //     }, { t: jwt.token }, signal).then((data) => {
// //       if (data && data.error) {
// //         setRedirectToSignin(true);
// //       } else {
// //         setPatient(data);
// //       }
// //     });
// //     return function cleanup() {
// //       abortController.abort();
// //     };
// //   }, [patientId]);

// //   if (redirectToSignin) {
// //     return <Navigate to="/signin" state={{ from: location.pathname }} replace />;
// //   }

// //   return (
//     <Paper className={classes.root} elevation={4}>
//       <Typography variant="h6" className={classes.title}>
//         Patient Profile
//       </Typography>
//       <List dense>
//         <ListItem>
//           <ListItemText primary="First Name" secondary={patient.firstName} />
//         </ListItem>
//         <Divider />
//         <ListItem>
//           <ListItemText primary="Last Name" secondary={patient.lastName} />
//         </ListItem>
//         <Divider />
//         <ListItem>
//           <ListItemText primary="Date of Birth" secondary={(new Date(patient.dateOfBirth)).toDateString()} />
//         </ListItem>
//         <Divider />
//         <ListItem>
//           <ListItemText primary="Gender" secondary={patient.gender} />
//         </ListItem>
//         <Divider />
//         <ListItem>
//           <ListItemText primary="Phone" secondary={patient.phone} />
//         </ListItem>
//         <Divider />
//         <ListItem>
//           <ListItemText primary="Email" secondary={patient.email} />
//         </ListItem>
//         <Divider />
//         <ListItem>
//           <ListItemText primary="Address" secondary={patient.address} />
//         </ListItem>
//         <Divider />
//         <ListItem>
//           <ListItemText primary="Medical History" secondary={patient.medicalHistory} />
//         </ListItem>
//         <Divider />
//         <ListItem>
//           <ListItemText primary="Patient ID" secondary={patient.patientID} />
//         </ListItem>
//       </List>
//     </Paper>
// //  );
// }


import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import auth from '../lib/auth-helper.js';
import { readPatient } from './api-patient.js';
import { useLocation, Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 600,
    margin: 'auto',
    padding: theme.spacing(3),
    marginTop: theme.spacing(5),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
  },
  title: {
    marginTop: theme.spacing(3),
    color: theme.palette.protectedTitle
  }
}));

export default function PatientProfile() {
  const location = useLocation();
  const classes = useStyles();
  const [patient, setPatient] = useState({});
  const [redirectToSignin, setRedirectToSignin] = useState(false);
  const jwt = auth.isAuthenticated();
  const { patientId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    if (!jwt || !jwt.token) {
      // No token available, redirect to sign-in page
      setRedirectToSignin(false);
      return;
    }

    readPatient({ patientId: patientId }, { t: jwt.token }, signal).then((data) => {
      if (data && data.error) {
        // If there's an error, assume the token is invalid and redirect
        setRedirectToSignin(false);
      } else {
        setPatient(data);
      }
    });

    return function cleanup() {
      abortController.abort();
    };
  }, [patientId, jwt]);

  if (redirectToSignin) {
    return <Navigate to="/signin" state={{ from: location.pathname }} replace />;
  }

  return (
    <Paper className={classes.root} elevation={4}>
      <Typography variant="h6" className={classes.title}>
        Patient Profile
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText primary="First Name" secondary={patient.firstName} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Last Name" secondary={patient.lastName} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Date of Birth" secondary={new Date(patient.dateOfBirth).toDateString()} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Gender" secondary={patient.gender} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Phone" secondary={patient.phone} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Email" secondary={patient.email} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Address" secondary={patient.address} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Medical History" secondary={patient.medicalHistory} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Patient ID" secondary={patient.patientID} />
        </ListItem>
      </List>
    </Paper>
  );
}
