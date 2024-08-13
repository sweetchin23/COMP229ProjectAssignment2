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
// import {
//   createPatient,
//   readPatient,
//   updatePatient,
//   deletePatient,
//   listPatients
// } from './api-patient';

// const useStyles = makeStyles((theme) => ({
//   card: {
//     maxWidth: 600,
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

// const PatientManagement = () => {
//   const classes = useStyles();
//   const [patients, setPatients] = useState([]);
//   const [patient, setPatient] = useState({
//     patientID: '',
//     firstName: '',
//     lastName: '',
//     dateOfBirth: '',
//     gender: '',
//     phone: '',
//     email: '',
//     address: '',
//     medicalHistory: ''
//   });
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     fetchPatients();
//   }, []);

//   const fetchPatients = async () => {
//     try {
//       const data = await listPatients();
//       setPatients(data);
//     } catch (error) {
//       console.error('Error fetching patients:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPatient({
//       ...patient,
//       [name]: value
//     });
//   };

//   const handleAddOrUpdatePatient = async (e) => {
//     e.preventDefault();
//     try {
//       if (isEditing) {
//         await updatePatient({ patientId: patient._id }, patient);
//       } else {
//         await createPatient(patient);
//       }
//       fetchPatients();
//       setPatient({
//         patientID: '',
//         firstName: '',
//         lastName: '',
//         dateOfBirth: '',
//         gender: '',
//         phone: '',
//         email: '',
//         address: '',
//         medicalHistory: ''
//       });
//       setIsEditing(false);
//     } catch (error) {
//       console.error('Error saving patient:', error);
//     }
//   };

//   const handleDeletePatient = async (id) => {
//     try {
//       await deletePatient(id);
//       fetchPatients();
//     } catch (error) {
//       console.error('Error deleting patient:', error);
//     }
//   };

//   const handleEditPatient = (patient) => {
//     setPatient(patient);
//     setIsEditing(true);
//   };

//   return (
//     <div>
//       <Card className={classes.card}>
//         <CardHeader className={classes.title} title="Patient Management" />
//         <CardContent>
//           <form onSubmit={handleAddOrUpdatePatient} className={classes.form}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="Patient ID"
//                   name="patientID"
//                   value={patient.patientID}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="First Name"
//                   name="firstName"
//                   value={patient.firstName}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="Last Name"
//                   name="lastName"
//                   value={patient.lastName}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="Date of Birth"
//                   name="dateOfBirth"
//                   type="date"
//                   value={patient.dateOfBirth.split('T')[0]}
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
//                   label="Gender"
//                   name="gender"
//                   value={patient.gender}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="Phone"
//                   name="phone"
//                   value={patient.phone}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="Email"
//                   name="email"
//                   type="email"
//                   value={patient.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Address"
//                   name="address"
//                   value={patient.address}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Medical History"
//                   name="medicalHistory"
//                   value={patient.medicalHistory}
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
//                   {isEditing ? 'Update Patient' : 'Add Patient'}
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
//               <TableCell>Patient ID</TableCell>
//               <TableCell>First Name</TableCell>
//               <TableCell>Last Name</TableCell>
//               <TableCell>Date of Birth</TableCell>
//               <TableCell>Gender</TableCell>
//               <TableCell>Phone</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Address</TableCell>
//               <TableCell>Medical History</TableCell>
//               <TableCell align="right">Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {patients.map((patient) => (
//               <TableRow key={patient._id}>
//                 <TableCell>{patient.patientID}</TableCell>
//                 <TableCell>{patient.firstName}</TableCell>
//                 <TableCell>{patient.lastName}</TableCell>
//                 <TableCell>{patient.dateOfBirth.split('T')[0]}</TableCell>
//                 <TableCell>{patient.gender}</TableCell>
//                 <TableCell>{patient.phone}</TableCell>
//                 <TableCell>{patient.email}</TableCell>
//                 <TableCell>{patient.address}</TableCell>
//                 <TableCell>{patient.medicalHistory}</TableCell>
//                 <TableCell align="right">
//                   <IconButton onClick={() => handleEditPatient(patient)}>
//                     <Edit />
//                   </IconButton>
//                   <IconButton onClick={() => handleDeletePatient(patient._id)}>
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

// export default PatientManagement;

//==============================================================

// import React from 'react'
// import { useState, useEffect } from 'react'
// import { makeStyles } from '@material-ui/core/styles'
// import Card from '@material-ui/core/Card'
// import Paper from '@material-ui/core/Paper'
// import List from '@material-ui/core/List'
// import { listPatients } from './api-patient.js'
// import { Link as RouterLink } from 'react-router-dom';
// import Link from '@material-ui/core/Link'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemAvatar from '@material-ui/core/ListItemAvatar'
// import ListItemText from '@material-ui/core/ListItemText'
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
// import IconButton from '@material-ui/core/IconButton'
// import Avatar from '@material-ui/core/Avatar'
// //import Person from '@material-ui/core/Person'
// //import ArrowForward from '@material-ui/core/ArrowForward'
// import CardContent from '@material-ui/core/CardContent'
// import CardMedia from '@material-ui/core/CardMedia'
// import Typography from '@material-ui/core/Typography'
// //import ArrowForward from '@material-ui/core/ArrowForward'
// import ArrowForward from '@material-ui/icons/ArrowForward';
// import unicornbikeImg from './../assets/images/dentalapp1.png'

// const useStyles = makeStyles(theme => ({    
//   card: {
//     // Define your card styles here
//   },
//   textField: {
//     // Define your text field styles here
//   },
//   error: {
//     // Define your error icon styles here
//   },
//   submit: {
//     // Define your submit button styles here
//   },
//   title: {
//     // Define your title styles here
//   },
//   root: {
//     // Define your root styles here
//   },
// }));

// export default function Patients() {
//   const [patients, setPatients] = useState([])

//   useEffect(() => {
//     const abortController = new AbortController()
//     const signal = abortController.signal
//     listPatients(signal).then((data) => {
//       console.log(data)
//       if (data && data.error) { 
//         console.log(data.error)
//       } else { 
//         console.log(data)
//         setPatients(data)
//       } 
//     })
//     return function cleanup(){ 
//       abortController.abort()
//     } 
//   }, [])
 
//   const classes = useStyles()
//   return (
//     <Paper className={classes.root} elevation={4}>
//       <Typography variant="h6" className={classes.title}> 
//         All Patients
//       </Typography> 
//       <List dense>
//         {patients.map((item, i) => { 
//           return (
//             <Link component={RouterLink} to={"/patients/" + item._id} key={i}>
//               <ListItem button> 
//                 <ListItemAvatar>
//                   <Avatar> 
//                   </Avatar>
//                 </ListItemAvatar>
//                 <ListItemText primary={item.name}/> 
//                 <ListItemSecondaryAction>
//                   <IconButton>
//                     <ArrowForward/> 
//                   </IconButton>
//                 </ListItemSecondaryAction> 
//               </ListItem>
//             </Link> 
//           )
//         })} 
//       </List>
//     </Paper>
//   )
// }

// import React, { useState, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import List from '@material-ui/core/List';
// import { listPatients } from './api-patient.js';
// import { Link as RouterLink } from 'react-router-dom';
// import Link from '@material-ui/core/Link';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import IconButton from '@material-ui/core/IconButton';
// import Avatar from '@material-ui/core/Avatar';
// import Typography from '@material-ui/core/Typography';
// import ArrowForward from '@material-ui/icons/ArrowForward';

// const useStyles = makeStyles(theme => ({    
//   card: {
//     // Define your card styles here
//   },
//   textField: {
//     // Define your text field styles here
//   },
//   error: {
//     // Define your error icon styles here
//   },
//   submit: {
//     // Define your submit button styles here
//   },
//   title: {
//     // Define your title styles here
//   },
//   root: {
//     // Define your root styles here
//   },
// }));


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
// import {
//   createPatient,
//   readPatient,
//   updatePatient,
//   deletePatient,
//   listPatients
// } from './api-patient';

// const useStyles = makeStyles((theme) => ({
//   card: {
//     maxWidth: 600,
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

// const PatientManagement = () => {
//   const classes = useStyles();
//   const [patients, setPatients] = useState([]);
//   const [patient, setPatient] = useState({
//     patientID: '',
//     firstName: '',
//     lastName: '',
//     dateOfBirth: '',
//     gender: '',
//     phone: '',
//     email: '',
//     address: '',
//     medicalHistory: ''
//   });
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     fetchPatients();
//   }, []);

//   const fetchPatients = async () => {
//     try {
//       const data = await listPatients();
//       setPatients(data);
//     } catch (error) {
//       console.error('Error fetching patients:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPatient({
//       ...patient,
//       [name]: value
//     });
//   };

//   const handleAddOrUpdatePatient = async (e) => {
//     e.preventDefault();
//     try {
//       if (isEditing) {
//         await updatePatient({ patientId: patient._id }, patient);
//       } else {
//         await createPatient(patient);
//       }
//       fetchPatients();
//       setPatient({
//         patientID: '',
//         firstName: '',
//         lastName: '',
//         dateOfBirth: '',
//         gender: '',
//         phone: '',
//         email: '',
//         address: '',
//         medicalHistory: ''
//       });
//       setIsEditing(false);
//     } catch (error) {
//       console.error('Error saving patient:', error);
//     }
//   };

//   const handleDeletePatient = async (id) => {
//     try {
//       await deletePatient(id);
//       fetchPatients();
//     } catch (error) {
//       console.error('Error deleting patient:', error);
//     }
//   };

//   const handleEditPatient = (patient) => {
//     setPatient(patient);
//     setIsEditing(true);
//   };

//   return (
//     <div>
//       <Card className={classes.card}>
//         <CardHeader className={classes.title} title="Patient Management" />
//         <CardContent>
//           <form onSubmit={handleAddOrUpdatePatient} className={classes.form}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="Patient ID"
//                   name="patientID"
//                   value={patient.patientID}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="First Name"
//                   name="firstName"
//                   value={patient.firstName}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="Last Name"
//                   name="lastName"
//                   value={patient.lastName}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="Date of Birth"
//                   name="dateOfBirth"
//                   type="date"
//                   value={patient.dateOfBirth.split('T')[0]}
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
//                   label="Gender"
//                   name="gender"
//                   value={patient.gender}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="Phone"
//                   name="phone"
//                   value={patient.phone}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="Email"
//                   name="email"
//                   type="email"
//                   value={patient.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Address"
//                   name="address"
//                   value={patient.address}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Medical History"
//                   name="medicalHistory"
//                   value={patient.medicalHistory}
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
//                   {isEditing ? 'Update Patient' : 'Add Patient'}
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
//               <TableCell>Patient ID</TableCell>
//               <TableCell>First Name</TableCell>
//               <TableCell>Last Name</TableCell>
//               <TableCell>Date of Birth</TableCell>
//               <TableCell>Gender</TableCell>
//               <TableCell>Phone</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Address</TableCell>
//               <TableCell>Medical History</TableCell>
//               <TableCell align="right">Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {patients.map((patient) => (
//               <TableRow key={patient._id}>
//                 <TableCell>{patient.patientID}</TableCell>
//                 <TableCell>{patient.firstName}</TableCell>
//                 <TableCell>{patient.lastName}</TableCell>
//                 <TableCell>{patient.dateOfBirth.split('T')[0]}</TableCell>
//                 <TableCell>{patient.gender}</TableCell>
//                 <TableCell>{patient.phone}</TableCell>
//                 <TableCell>{patient.email}</TableCell>
//                 <TableCell>{patient.address}</TableCell>
//                 <TableCell>{patient.medicalHistory}</TableCell>
//                 <TableCell align="right">
//                   <IconButton onClick={() => handleEditPatient(patient)}>
//                     <Edit />
//                   </IconButton>
//                   <IconButton onClick={() => handleDeletePatient(patient._id)}>
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


// export default function Patients() {
//   const [patients, setPatients] = useState([]);

//   useEffect(() => {
//     const abortController = new AbortController();
//     const signal = abortController.signal;
//     listPatients(signal).then((data) => {
//       if (data && data.error) { 
//         console.log(data.error);
//       } else { 
//         setPatients(data);
//       } 
//     });
//     return function cleanup(){ 
//       abortController.abort();
//     } 
//   }, []);
 
//   const classes = useStyles();
//   return (
//     <Paper className={classes.root} elevation={4}>
//       <Typography variant="h6" className={classes.title}> 
//         All Patients
//       </Typography> 
//       <List dense>
//         {patients.map((item, i) => { 
//           return (
//             <Link component={RouterLink} to={"/patients/" + item._id} key={i}>
//               <ListItem button> 
//                 <ListItemAvatar>
//                   <Avatar> 
//                   </Avatar>
//                 </ListItemAvatar>
//                 <ListItemText primary={`${item.firstName} ${item.lastName}`}/> 
//                 <ListItemSecondaryAction>
//                   <IconButton>
//                     <ArrowForward/> 
//                   </IconButton>
//                 </ListItemSecondaryAction> 
//               </ListItem>
//             </Link> 
//           )
//         })} 
//       </List>
//     </Paper>
//   )
// }


//===============



// import React, { useState, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import List from '@material-ui/core/List';
// import { listPatients } from './api-patient.js';
// import { Link as RouterLink } from 'react-router-dom';
// import Link from '@material-ui/core/Link';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import IconButton from '@material-ui/core/IconButton';
// import Avatar from '@material-ui/core/Avatar';
// import Typography from '@material-ui/core/Typography';
// import ArrowForward from '@material-ui/icons/ArrowForward';
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
//   IconButton as MUIIconButton,
// } from '@material-ui/core';
// import { Delete, Edit } from '@material-ui/icons';

// const useStyles = makeStyles((theme) => ({
//   card: {
//     maxWidth: 600,
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
//   root: {
//     // Define your root styles here
//   },
// }));

// const PatientManagement = () => {
//   const classes = useStyles();
//   const [patients, setPatients] = useState([]);
//   const [patient, setPatient] = useState({
//     patientID: '',
//     firstName: '',
//     lastName: '',
//     dateOfBirth: '',
//     gender: '',
//     phone: '',
//     email: '',
//     address: '',
//     medicalHistory: ''
//   });
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     fetchPatients();
//   }, []);

//   const fetchPatients = async () => {
//     try {
//       const data = await listPatients();
//       setPatients(data);
//     } catch (error) {
//       console.error('Error fetching patients:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPatient({
//       ...patient,
//       [name]: value
//     });
//   };

//   const handleAddOrUpdatePatient = async (e) => {
//     e.preventDefault();
//     try {
//       if (isEditing) {
//         await updatePatient({ patientId: patient._id }, patient);
//       } else {
//         await createPatient(patient);
//       }
//       fetchPatients();
//       setPatient({
//         patientID: '',
//         firstName: '',
//         lastName: '',
//         dateOfBirth: '',
//         gender: '',
//         phone: '',
//         email: '',
//         address: '',
//         medicalHistory: ''
//       });
//       setIsEditing(false);
//     } catch (error) {
//       console.error('Error saving patient:', error);
//     }
//   };

//   const handleDeletePatient = async (id) => {
//     try {
//       await deletePatient(id);
//       fetchPatients();
//     } catch (error) {
//       console.error('Error deleting patient:', error);
//     }
//   };

//   const handleEditPatient = (patient) => {
//     setPatient(patient);
//     setIsEditing(true);
//   };

//   return (
//     <div>
//       <Card className={classes.card}>
//         <CardHeader className={classes.title} title="Patient Management" />
//         <CardContent>
//           <form onSubmit={handleAddOrUpdatePatient} className={classes.form}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="Patient ID"
//                   name="patientID"
//                   value={patient.patientID}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="First Name"
//                   name="firstName"
//                   value={patient.firstName}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="Last Name"
//                   name="lastName"
//                   value={patient.lastName}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="Date of Birth"
//                   name="dateOfBirth"
//                   type="date"
//                   value={patient.dateOfBirth.split('T')[0]}
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
//                   label="Gender"
//                   name="gender"
//                   value={patient.gender}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="Phone"
//                   name="phone"
//                   value={patient.phone}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="Email"
//                   name="email"
//                   type="email"
//                   value={patient.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Address"
//                   name="address"
//                   value={patient.address}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Medical History"
//                   name="medicalHistory"
//                   value={patient.medicalHistory}
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
//                   {isEditing ? 'Update Patient' : 'Add Patient'}
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
//               <TableCell>Patient ID</TableCell>
//               <TableCell>First Name</TableCell>
//               <TableCell>Last Name</TableCell>
//               <TableCell>Date of Birth</TableCell>
//               <TableCell>Gender</TableCell>
//               <TableCell>Phone</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Address</TableCell>
//               <TableCell>Medical History</TableCell>
//               <TableCell align="right">Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {patients.map((patient) => (
//               <TableRow key={patient._id}>
//                 <TableCell>{patient.patientID}</TableCell>
//                 <TableCell>{patient.firstName}</TableCell>
//                 <TableCell>{patient.lastName}</TableCell>
//                 <TableCell>{patient.dateOfBirth.split('T')[0]}</TableCell>
//                 <TableCell>{patient.gender}</TableCell>
//                 <TableCell>{patient.phone}</TableCell>
//                 <TableCell>{patient.email}</TableCell>
//                 <TableCell>{patient.address}</TableCell>
//                 <TableCell>{patient.medicalHistory}</TableCell>
//                 <TableCell align="right">
//                   <MUIIconButton onClick={() => handleEditPatient(patient)}>
//                     <Edit />
//                   </MUIIconButton>
//                   <MUIIconButton onClick={() => handleDeletePatient(patient._id)}>
//                     <Delete />
//                   </MUIIconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default function Patients() {
//   const [patients, setPatients] = useState([]);

//   useEffect(() => {
//     const abortController = new AbortController();
//     const signal = abortController.signal;
//     listPatients(signal).then((data) => {
//       if (data && data.error) { 
//         console.log(data.error);
//       } else { 
//         setPatients(data);
//       } 
//     });
//     return function cleanup(){ 
//       abortController.abort();
//     } 
//   }, []);
 
//   const classes = useStyles();
//   return (
//     <Paper className={classes.root} elevation={4}>
//       <Typography variant="h6" className={classes.title}> 
//         All Patients
//       </Typography> 
//       <List dense>
//         {patients.map((item, i) => { 
//           return (
//             <Link component={RouterLink} to={"/patients/" + item._id} key={i}>
//               <ListItem button> 
//                 <ListItemAvatar>
//                   <Avatar> 
//                   </Avatar>
//                 </ListItemAvatar>
//                 <ListItemText primary={`${item.firstName} ${item.lastName}`}/> 
//                 <ListItemSecondaryAction>
//                   <IconButton>
//                     <ArrowForward/> 
//                   </IconButton>
//                 </ListItemSecondaryAction> 
//               </ListItem>
//             </Link> 
//           )
//         })} 
//       </List>
//     </Paper>
//   )
// }


//===========================================

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
import {
  createPatient,
  readPatient,
  updatePatient,
  deletePatient,
  listPatients
} from './api-patient';
import auth from '../lib/auth-helper.js'; // Import auth-helper

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
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

const PatientManagement = () => {
  const classes = useStyles();
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({
    patientID: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    phone: '',
    email: '',
    address: '',
    medicalHistory: ''
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const data = await listPatients();
      setPatients(data);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient({
      ...patient,
      [name]: value
    });
  };

  // const handleAddOrUpdatePatient = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const jwt = auth.isAuthenticated(); // Ensure token is fetched here
  //     if (isEditing) {
  //       await updatePatient({ patientId: patient._id }, { t: jwt.token }, patient);
  //     } else {
  //       await createPatient(patient);
  //     }
  //     fetchPatients();
  //     setPatient({
  //       patientID: '',
  //       firstName: '',
  //       lastName: '',
  //       dateOfBirth: '',
  //       gender: '',
  //       phone: '',
  //       email: '',
  //       address: '',
  //       medicalHistory: ''
  //     });
  //     setIsEditing(false);
  //   } catch (error) {
  //     console.error('Error saving patient:', error);
  //   }
  // };

  const handleAddOrUpdatePatient = async (e) => {
    e.preventDefault();
    try {
        const jwt = auth.isAuthenticated(); // Add this line to get the token
        if (isEditing) {
            await updatePatient({ patientId: patient._id }, { t: jwt.token }, patient);
        } else {
            await createPatient(patient);
        }
        fetchPatients();
        setPatient({
            patientID: '',
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            gender: '',
            phone: '',
            email: '',
            address: '',
            medicalHistory: ''
        });
        setIsEditing(false);
    } catch (error) {
        console.error('Error saving patient:', error);
    }
};


  const handleDeletePatient = async (id) => {
    try {
      const jwt = auth.isAuthenticated(); // Ensure token is fetched here
      await deletePatient({ patientId: id }, { t: jwt.token });
      fetchPatients();
    } catch (error) {
      console.error('Error deleting patient:', error);
    }
  };

  const handleEditPatient = (patient) => {
    setPatient(patient);
    setIsEditing(true);
  };

  return (
    <div>
      <Card className={classes.card}>
        <CardHeader className={classes.title} title="Patient Management" />
        <CardContent>
          <form onSubmit={handleAddOrUpdatePatient} className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Patient ID"
                  name="patientID"
                  value={patient.patientID}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={patient.firstName}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={patient.lastName}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Date of Birth"
                  name="dateOfBirth"
                  type="date"
                  value={patient.dateOfBirth.split('T')[0]}
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
                  label="Gender"
                  name="gender"
                  value={patient.gender}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={patient.phone}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={patient.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address"
                  name="address"
                  value={patient.address}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Medical History"
                  name="medicalHistory"
                  value={patient.medicalHistory}
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
                  {isEditing ? 'Update Patient' : 'Add Patient'}
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
              <TableCell>Patient ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Medical History</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient._id}>
                <TableCell>{patient.patientID}</TableCell>
                <TableCell>{patient.firstName}</TableCell>
                <TableCell>{patient.lastName}</TableCell>
                <TableCell>{patient.dateOfBirth.split('T')[0]}</TableCell>
                <TableCell>{patient.gender}</TableCell>
                <TableCell>{patient.phone}</TableCell>
                <TableCell>{patient.email}</TableCell>
                <TableCell>{patient.address}</TableCell>
                <TableCell>{patient.medicalHistory}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleEditPatient(patient)}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleDeletePatient(patient._id)}>
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

export default PatientManagement;
