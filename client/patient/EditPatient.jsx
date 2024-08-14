// // // import React, { useState, useEffect } from 'react';
// // // import Card from '@material-ui/core/Card';
// // // import CardActions from '@material-ui/core/CardActions';
// // // import CardContent from '@material-ui/core/CardContent';
// // // import Button from '@material-ui/core/Button';
// // // import TextField from '@material-ui/core/TextField';
// // // import Typography from '@material-ui/core/Typography';
// // // import Icon from '@material-ui/core/Icon';
// // // import { makeStyles } from '@material-ui/core/styles';
// // // import auth from '../lib/auth-helper.js';
// // // import { read, update } from './api-patient.js'; // Update with the correct path
// // // import { Navigate, useParams } from 'react-router-dom';

// // // const useStyles = makeStyles(theme => ({
// // //   card: {
// // //     maxWidth: 600,
// // //     margin: 'auto',
// // //     textAlign: 'center',
// // //     marginTop: theme.spacing(5),
// // //     paddingBottom: theme.spacing(2)
// // //   },
// // //   title: {
// // //     margin: theme.spacing(2),
// // //     color: theme.palette.protectedTitle
// // //   },
// // //   error: {
// // //     verticalAlign: 'middle'
// // //   },
// // //   textField: {
// // //     marginLeft: theme.spacing(1),
// // //     marginRight: theme.spacing(1),
// // //     width: 300
// // //   },
// // //   submit: {
// // //     margin: 'auto',
// // //     marginBottom: theme.spacing(2)
// // //   }
// // // }));

// // // export default function EditPatient() {
// // //   const classes = useStyles();
// // //   const { patientId } = useParams();
// // //   const [values, setValues] = useState({
// // //     name: '',
// // //     age: '',
// // //     contactNumber: '',
// // //     address: '',
// // //     open: false,
// // //     error: '',
// // //     NavigateToProfile: false
// // //   });
// // //   const jwt = auth.isAuthenticated();

// // //   useEffect(() => {
// // //     const abortController = new AbortController();
// // //     const signal = abortController.signal;
// // //     read({ patientId: patientId }, { t: jwt.token }, signal).then((data) => {
// // //       if (data && data.error) {
// // //         setValues({ ...values, error: data.error });
// // //       } else {
// // //         setValues({
// // //           ...values,
// // //           name: data.name,
// // //           age: data.age,
// // //           contactNumber: data.contactNumber,
// // //           address: data.address
// // //         });
// // //       }
// // //     });
// // //     return function cleanup() {
// // //       abortController.abort();
// // //     };
// // //   }, [patientId]);

// // //   const clickSubmit = () => {
// // //     const patient = {
// // //       name: values.name || undefined,
// // //       age: values.age || undefined,
// // //       contactNumber: values.contactNumber || undefined,
// // //       address: values.address || undefined
// // //     };
// // //     update({ patientId: patientId }, { t: jwt.token }, patient).then((data) => {
// // //       if (data && data.error) {
// // //         setValues({ ...values, error: data.error });
// // //       } else {
// // //         setValues({ ...values, patientId: data._id, NavigateToProfile: true });
// // //       }
// // //     });
// // //   };

// // //   const handleChange = name => event => {
// // //     setValues({ ...values, [name]: event.target.value });
// // //   };

// // //   if (values.NavigateToProfile) {
// // //     return (<Navigate to={'/patient/' + values.patientId} />);
// // //   }

// // //   return (
// // //     <Card className={classes.card}>
// // //       <CardContent>
// // //         <Typography variant="h6" className={classes.title}>
// // //           Edit Patient
// // //         </Typography>
// // //         <TextField id="name" label="Name" className={classes.textField} value={values.name} onChange={handleChange('name')} margin="normal" /><br />
// // //         <TextField id="age" type="number" label="Age" className={classes.textField} value={values.age} onChange={handleChange('age')} margin="normal" /><br />
// // //         <TextField id="contactNumber" label="Contact Number" className={classes.textField} value={values.contactNumber} onChange={handleChange('contactNumber')} margin="normal" /><br />
// // //         <TextField id="address" label="Address" className={classes.textField} value={values.address} onChange={handleChange('address')} margin="normal" /><br />
// // //         {values.error && (<Typography component="p" color="error">
// // //           <Icon color="error" className={classes.error}>error</Icon>
// // //           {values.error}
// // //         </Typography>)}
// // //       </CardContent>
// // //       <CardActions>
// // //         <Button color="primary" variant="contained" onClick={clickSubmit} className={classes.submit}>Submit</Button>
// // //       </CardActions>
// // //     </Card>
// // //   );
// // // }

// // import React, { useState, useEffect } from 'react';
// // import Card from '@material-ui/core/Card';
// // import CardActions from '@material-ui/core/CardActions';
// // import CardContent from '@material-ui/core/CardContent';
// // import Button from '@material-ui/core/Button';
// // import TextField from '@material-ui/core/TextField';
// // import Typography from '@material-ui/core/Typography';
// // import Icon from '@material-ui/core/Icon';
// // import { makeStyles } from '@material-ui/core/styles';
// // import auth from '../lib/auth-helper.js';
// // import { readPatient, updatePatient } from './api-patient.js';
// // import { Navigate, useParams } from 'react-router-dom';

// // const useStyles = makeStyles(theme => ({
// //   card: {
// //     maxWidth: 600,
// //     margin: 'auto',
// //     textAlign: 'center',
// //     marginTop: theme.spacing(5),
// //     paddingBottom: theme.spacing(2)
// //   },
// //   title: {
// //     margin: theme.spacing(2),
// //     color: theme.palette.protectedTitle
// //   },
// //   error: {
// //     verticalAlign: 'middle'
// //   },
// //   textField: {
// //     marginLeft: theme.spacing(1),
// //     marginRight: theme.spacing(1),
// //     width: 300
// //   },
// //   submit: {
// //     margin: 'auto',
// //     marginBottom: theme.spacing(2)
// //   }
// // }));

// // export default function EditPatient() {
// //   const classes = useStyles();
// //   const { patientId } = useParams();
// //   const [values, setValues] = useState({
// //     firstName: '',
// //     lastName: '',
// //     dateOfBirth: '',
// //     gender: '',
// //     phone: '',
// //     email: '',
// //     address: '',
// //     medicalHistory: '',
// //     open: false,
// //     error: '',
// //     navigateToProfile: false
// //   });
// //   const jwt = auth.isAuthenticated();

// //   useEffect(() => {
// //     const abortController = new AbortController();
// //     const signal = abortController.signal;
// //     readPatient({ patientId }, { t: jwt.token }, signal).then((data) => {
// //       if (data && data.error) {
// //         setValues({ ...values, error: data.error });
// //       } else {
// //         setValues({
// //           ...values,
// //           firstName: data.firstName,
// //           lastName: data.lastName,
// //           dateOfBirth: data.dateOfBirth.substring(0, 10), // Formatting date
// //           gender: data.gender,
// //           phone: data.phone,
// //           email: data.email,
// //           address: data.address,
// //           medicalHistory: data.medicalHistory
// //         });
// //       }
// //     });
// //     return () => {
// //       abortController.abort();
// //     };
// //   }, [patientId]);

// //   const clickSubmit = () => {
// //     const patient = {
// //       firstName: values.firstName || undefined,
// //       lastName: values.lastName || undefined,
// //       dateOfBirth: values.dateOfBirth || undefined,
// //       gender: values.gender || undefined,
// //       phone: values.phone || undefined,
// //       email: values.email || undefined,
// //       address: values.address || undefined,
// //       medicalHistory: values.medicalHistory || undefined
// //     };
// //     updatePatient({ patientId }, { t: jwt.token }, patient).then((data) => {
// //       if (data && data.error) {
// //         setValues({ ...values, error: data.error });
// //       } else {
// //         setValues({ ...values, navigateToProfile: true });
// //       }
// //     });
// //   };

// //   const handleChange = name => event => {
// //     setValues({ ...values, [name]: event.target.value });
// //   };

// //   if (values.navigateToProfile) {
// //     return <Navigate to={`/patient/${patientId}`} />;
// //   }

// //   return (
// //     <Card className={classes.card}>
// //       <CardContent>
// //         <Typography variant="h6" className={classes.title}>
// //           Edit Patient
// //         </Typography>
// //         <TextField
// //           id="firstName"
// //           label="First Name"
// //           className={classes.textField}
// //           value={values.firstName}
// //           onChange={handleChange('firstName')}
// //           margin="normal"
// //         />
// //         <br />
// //         <TextField
// //           id="lastName"
// //           label="Last Name"
// //           className={classes.textField}
// //           value={values.lastName}
// //           onChange={handleChange('lastName')}
// //           margin="normal"
// //         />
// //         <br />
// //         <TextField
// //           id="dateOfBirth"
// //           label="Date of Birth"
// //           type="date"
// //           className={classes.textField}
// //           value={values.dateOfBirth}
// //           onChange={handleChange('dateOfBirth')}
// //           InputLabelProps={{
// //             shrink: true,
// //           }}
// //           margin="normal"
// //         />
// //         <br />
// //         <TextField
// //           id="gender"
// //           label="Gender"
// //           className={classes.textField}
// //           value={values.gender}
// //           onChange={handleChange('gender')}
// //           margin="normal"
// //         />
// //         <br />
// //         <TextField
// //           id="phone"
// //           label="Phone"
// //           className={classes.textField}
// //           value={values.phone}
// //           onChange={handleChange('phone')}
// //           margin="normal"
// //         />
// //         <br />
// //         <TextField
// //           id="email"
// //           label="Email"
// //           className={classes.textField}
// //           value={values.email}
// //           onChange={handleChange('email')}
// //           margin="normal"
// //         />
// //         <br />
// //         <TextField
// //           id="address"
// //           label="Address"
// //           className={classes.textField}
// //           value={values.address}
// //           onChange={handleChange('address')}
// //           margin="normal"
// //         />
// //         <br />
// //         <TextField
// //           id="medicalHistory"
// //           label="Medical History"
// //           className={classes.textField}
// //           value={values.medicalHistory}
// //           onChange={handleChange('medicalHistory')}
// //           margin="normal"
// //         />
// //         <br />
// //         {values.error && (
// //           <Typography component="p" color="error">
// //             <Icon color="error" className={classes.error}>error</Icon>
// //             {values.error}
// //           </Typography>
// //         )}
// //       </CardContent>
// //       <CardActions>
// //         <Button
// //           color="primary"
// //           variant="contained"
// //           onClick={clickSubmit}
// //           className={classes.submit}
// //         >
// //           Submit
// //         </Button>
// //       </CardActions>
// //     </Card>
// //   );
// // }

// // import React, { useState, useEffect } from 'react';
// // import Card from '@material-ui/core/Card';
// // import CardActions from '@material-ui/core/CardActions';
// // import CardContent from '@material-ui/core/CardContent';
// // import Button from '@material-ui/core/Button';
// // import TextField from '@material-ui/core/TextField';
// // import Typography from '@material-ui/core/Typography';
// // import Icon from '@material-ui/core/Icon';
// // import { makeStyles } from '@material-ui/core/styles';
// // import auth from '../lib/auth-helper.js';
// // import { readPatient, updatePatient } from './api-patient.js';
// // import { Navigate, useParams } from 'react-router-dom';

// // const useStyles = makeStyles(theme => ({
// //   card: {
// //     maxWidth: 600,
// //     margin: 'auto',
// //     textAlign: 'center',
// //     marginTop: theme.spacing(5),
// //     paddingBottom: theme.spacing(2)
// //   },
// //   title: {
// //     margin: theme.spacing(2),
// //     color: theme.palette.protectedTitle
// //   },
// //   error: {
// //     verticalAlign: 'middle'
// //   },
// //   textField: {
// //     marginLeft: theme.spacing(1),
// //     marginRight: theme.spacing(1),
// //     width: 300
// //   },
// //   submit: {
// //     margin: 'auto',
// //     marginBottom: theme.spacing(2)
// //   }
// // }));

// // export default function EditPatient() {
// //   const classes = useStyles();
// //   const { patientId } = useParams();
// //   const [values, setValues] = useState({
// //     firstName: '',
// //     lastName: '',
// //     dateOfBirth: '',
// //     gender: '',
// //     phone: '',
// //     email: '',
// //     address: '',
// //     medicalHistory: '',
// //     open: false,
// //     error: '',
// //     navigateToProfile: false
// //   });
// //   const jwt = auth.isAuthenticated();

// //   useEffect(() => {
// //     const abortController = new AbortController();
// //     const signal = abortController.signal;
// //     readPatient({ patientId }, { t: jwt.token }, signal).then((data) => {
// //       if (data && data.error) {
// //         setValues({ ...values, error: data.error });
// //       } else {
// //         setValues({
// //           ...values,
// //           firstName: data.firstName,
// //           lastName: data.lastName,
// //           dateOfBirth: data.dateOfBirth.substring(0, 10), // Formatting date
// //           gender: data.gender,
// //           phone: data.phone,
// //           email: data.email,
// //           address: data.address,
// //           medicalHistory: data.medicalHistory
// //         });
// //       }
// //     });
// //     return () => {
// //       abortController.abort();
// //     };
// //   }, [patientId]);

// //   const clickSubmit = () => {
// //     const patient = {
// //       firstName: values.firstName || undefined,
// //       lastName: values.lastName || undefined,
// //       dateOfBirth: values.dateOfBirth || undefined,
// //       gender: values.gender || undefined,
// //       phone: values.phone || undefined,
// //       email: values.email || undefined,
// //       address: values.address || undefined,
// //       medicalHistory: values.medicalHistory || undefined
// //     };
// //     updatePatient({ patientId }, { t: jwt.token }, patient).then((data) => {
// //       if (data && data.error) {
// //         setValues({ ...values, error: data.error });
// //       } else {
// //         setValues({ ...values, navigateToProfile: true });
// //       }
// //     });
// //   };

// //   const handleChange = name => event => {
// //     setValues({ ...values, [name]: event.target.value });
// //   };

// //   if (values.navigateToProfile) {
// //     return <Navigate to={`/patient/${patientId}`} />;
// //   }

// //   return (
// //     <Card className={classes.card}>
// //       <CardContent>
// //         <Typography variant="h6" className={classes.title}>
// //           Edit Patient
// //         </Typography>
// //         <TextField
// //           id="firstName"
// //           label="First Name"
// //           className={classes.textField}
// //           value={values.firstName}
// //           onChange={handleChange('firstName')}
// //           margin="normal"
// //         />
// //         <br />
// //         <TextField
// //           id="lastName"
// //           label="Last Name"
// //           className={classes.textField}
// //           value={values.lastName}
// //           onChange={handleChange('lastName')}
// //           margin="normal"
// //         />
// //         <br />
// //         <TextField
// //           id="dateOfBirth"
// //           label="Date of Birth"
// //           type="date"
// //           className={classes.textField}
// //           value={values.dateOfBirth}
// //           onChange={handleChange('dateOfBirth')}
// //           InputLabelProps={{
// //             shrink: true,
// //           }}
// //           margin="normal"
// //         />
// //         <br />
// //         <TextField
// //           id="gender"
// //           label="Gender"
// //           className={classes.textField}
// //           value={values.gender}
// //           onChange={handleChange('gender')}
// //           margin="normal"
// //         />
// //         <br />
// //         <TextField
// //           id="phone"
// //           label="Phone"
// //           className={classes.textField}
// //           value={values.phone}
// //           onChange={handleChange('phone')}
// //           margin="normal"
// //         />
// //         <br />
// //         <TextField
// //           id="email"
// //           label="Email"
// //           className={classes.textField}
// //           value={values.email}
// //           onChange={handleChange('email')}
// //           margin="normal"
// //         />
// //         <br />
// //         <TextField
// //           id="address"
// //           label="Address"
// //           className={classes.textField}
// //           value={values.address}
// //           onChange={handleChange('address')}
// //           margin="normal"
// //         />
// //         <br />
// //         <TextField
// //           id="medicalHistory"
// //           label="Medical History"
// //           className={classes.textField}
// //           value={values.medicalHistory}
// //           onChange={handleChange('medicalHistory')}
// //           margin="normal"
// //         />
// //         <br />
// //         {values.error && (
// //           <Typography component="p" color="error">
// //             <Icon color="error" className={classes.error}>error</Icon>
// //             {values.error}
// //           </Typography>
// //         )}
// //       </CardContent>
// //       <CardActions>
// //         <Button
// //           color="primary"
// //           variant="contained"
// //           onClick={clickSubmit}
// //           className={classes.submit}
// //         >
// //           Submit
// //         </Button>
// //       </CardActions>
// //     </Card>
// //   );
// // }


// //=========

// // import React, { useState, useEffect } from 'react';
// // import Card from '@material-ui/core/Card';
// // import CardActions from '@material-ui/core/CardActions';
// // import CardContent from '@material-ui/core/CardContent';
// // import Button from '@material-ui/core/Button';
// // import TextField from '@material-ui/core/TextField';
// // import Typography from '@material-ui/core/Typography';
// // import Icon from '@material-ui/core/Icon';
// // import { makeStyles } from '@material-ui/core/styles';
// // import auth from '../lib/auth-helper.js';
// // import { readPatient, updatePatient } from './api-patient.js';
// // import { Navigate, useParams } from 'react-router-dom';

// // const useStyles = makeStyles(theme => ({
// //   card: {
// //     maxWidth: 600,
// //     margin: 'auto',
// //     textAlign: 'center',
// //     marginTop: theme.spacing(5),
// //     paddingBottom: theme.spacing(2)
// //   },
// //   title: {
// //     margin: theme.spacing(2),
// //     color: theme.palette.protectedTitle
// //   },
// //   error: {
// //     verticalAlign: 'middle'
// //   },
// //   textField: {
// //     marginLeft: theme.spacing(1),
// //     marginRight: theme.spacing(1),
// //     width: 300
// //   },
// //   submit: {
// //     margin: 'auto',
// //     marginBottom: theme.spacing(2)
// //   }
// // }));

// // export default function EditPatient() {
// //   const classes = useStyles();
// //   const { patientId } = useParams();
// //   const [values, setValues] = useState({
// //     firstName: '',
// //     lastName: '',
// //     email: '',
// //     password: '',
// //     open: false,
// //     error: '',
// //     navigateToProfile: false
// //   });

// //   const jwt = auth.isAuthenticated();

// //   useEffect(() => {
// //     const abortController = new AbortController();
// //     const signal = abortController.signal;
// //     readPatient({
// //       patientId: patientId
// //     }, { t: jwt.token }, signal).then((data) => {
// //       if (data && data.error) {
// //         setValues({ ...values, error: data.error });
// //       } else {
// //         setValues({
// //           ...values,
// //           firstName: data.firstName,
// //           lastName: data.lastName,
// //           email: data.email
// //         });
// //       }
// //     });
// //     return function cleanup() {
// //       abortController.abort();
// //     };
// //   }, [patientId]);

// //   const clickSubmit = () => {
// //     const patient = {
// //       firstName: values.firstName || undefined,
// //       lastName: values.lastName || undefined,
// //       email: values.email || undefined,
// //       password: values.password || undefined
// //     };
// //     updatePatient({
// //       patientId: patientId
// //     }, {
// //       t: jwt.token
// //     }, patient).then((data) => {
// //       if (data && data.error) {
// //         setValues({ ...values, error: data.error });
// //       } else {
// //         setValues({ ...values, patientId: data._id, navigateToProfile: true });
// //       }
// //     });
// //   };

// //   const handleChange = name => event => {
// //     setValues({ ...values, [name]: event.target.value });
// //   };

// //   if (values.navigateToProfile) {
// //     return (<Navigate to={'/patients/' + values.patientId} />);
// //   }

// //   return (
// //     <Card className={classes.card}>
// //       <CardContent>
// //         <Typography variant="h6" className={classes.title}>
// //           Edit Patient
// //         </Typography>
// //         <TextField id="firstName" label="First Name" className={classes.textField} value={values.firstName} onChange={handleChange('firstName')} margin="normal" /><br />
// //         <TextField id="lastName" label="Last Name" className={classes.textField} value={values.lastName} onChange={handleChange('lastName')} margin="normal" /><br />
// //         <TextField id="email" type="email" label="Email" className={classes.textField} value={values.email} onChange={handleChange('email')} margin="normal" /><br />
// //         <TextField id="password" type="password" label="Password" className={classes.textField} value={values.password} onChange={handleChange('password')} margin="normal" />
// //         <br />
// //         {values.error && (<Typography component="p" color="error">
// //           <Icon color="error" className={classes.error}>error</Icon>
// //           {values.error}
// //         </Typography>)}
// //       </CardContent>
// //       <CardActions>
// //         <Button color="primary" variant="contained" onClick={clickSubmit} className={classes.submit}>Submit</Button>
// //       </CardActions>
// //     </Card>
// //   );
// // }

// //======================newest==============

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
// import { readPatient, updatePatient } from './api-patient.js';
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

// export default function EditPatient() {
//   const classes = useStyles();
//   const { patientId } = useParams();
//   const [values, setValues] = useState({
//     firstName: '',
//     lastName: '',
//     dateOfBirth: '',
//     gender: '',
//     phone: '',
//     email: '',
//     address: '',
//     medicalHistory: '',
//     patientID: '',
//     error: '',
//     navigateToProfile: false
//   });

//   const jwt = auth.isAuthenticated();

//   useEffect(() => {
//     const abortController = new AbortController();
//     const signal = abortController.signal;
//     readPatient({
//       patientId: patientId
//     }, { t: jwt.token }, signal).then((data) => {
//       if (data && data.error) {
//         setValues({ ...values, error: data.error });
//       } else {
//         setValues({
//           ...values,
//           firstName: data.firstName,
//           lastName: data.lastName,
//           dateOfBirth: data.dateOfBirth,
//           gender: data.gender,
//           phone: data.phone,
//           email: data.email,
//           address: data.address,
//           medicalHistory: data.medicalHistory,
//           patientID: data.patientID
//         });
//       }
//     });
//     return function cleanup() {
//       abortController.abort();
//     };
//   }, [patientId]);

//   const clickSubmit = () => {
//     const patient = {
//       firstName: values.firstName || undefined,
//       lastName: values.lastName || undefined,
//       dateOfBirth: values.dateOfBirth || undefined,
//       gender: values.gender || undefined,
//       phone: values.phone || undefined,
//       email: values.email || undefined,
//       address: values.address || undefined,
//       medicalHistory: values.medicalHistory || undefined,
//       patientID: values.patientID || undefined
//     };
//     updatePatient({
//       patientId: patientId
//     }, {
//       t: jwt.token
//     }, patient).then((data) => {
//       if (data && data.error) {
//         setValues({ ...values, error: data.error });
//       } else {
//         setValues({ ...values, patientId: data._id, navigateToProfile: true });
//       }
//     });
//   };

//   const handleChange = name => event => {
//     setValues({ ...values, [name]: event.target.value });
//   };

//   if (values.navigateToProfile) {
//     return (<Navigate to={'/patients/' + values.patientID} />);
//   }

//   return (
//     <Card className={classes.card}>
//       <CardContent>
//         <Typography variant="h6" className={classes.title}>
//           Edit Patient
//         </Typography>
//         <TextField id="firstName" label="First Name" className={classes.textField} value={values.firstName} onChange={handleChange('firstName')} margin="normal" /><br />
//         <TextField id="lastName" label="Last Name" className={classes.textField} value={values.lastName} onChange={handleChange('lastName')} margin="normal" /><br />
//         <TextField
//           id="dateOfBirth"
//           label="Date of Birth"
//           type="date"
//           className={classes.textField}
//           value={values.dateOfBirth.substring(0, 10)} // Formatting the date to 'YYYY-MM-DD'
//           onChange={handleChange('dateOfBirth')}
//           InputLabelProps={{
//             shrink: true,
//           }}
//           margin="normal"
//         /><br />
//         <TextField id="gender" label="Gender" className={classes.textField} value={values.gender} onChange={handleChange('gender')} margin="normal" /><br />
//         <TextField id="phone" label="Phone" className={classes.textField} value={values.phone} onChange={handleChange('phone')} margin="normal" /><br />
//         <TextField id="email" type="email" label="Email" className={classes.textField} value={values.email} onChange={handleChange('email')} margin="normal" /><br />
//         <TextField id="address" label="Address" className={classes.textField} value={values.address} onChange={handleChange('address')} margin="normal" /><br />
//         <TextField id="medicalHistory" label="Medical History" className={classes.textField} value={values.medicalHistory} onChange={handleChange('medicalHistory')} margin="normal" /><br />
//         <TextField id="patientID" label="Patient ID" className={classes.textField} value={values.patientID} onChange={handleChange('patientID')} margin="normal" /><br />
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


import React, {useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import auth from '../lib/auth-helper.js';
import { readPatient, updatePatient } from './api-patient.js';
import { Navigate, useParams } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2)
  },
  title: {
    margin: theme.spacing(2),
    color: theme.palette.protectedTitle
  },
  error: {
    verticalAlign: 'middle'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing(2)
  }
}));

export default function EditPatient() {
  const classes = useStyles();
  const { patientId } = useParams();
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    phone: '',
    email: '',
    address: '',
    medicalHistory: '',
    patientID: '',
    error: '',
    navigateToProfile: false
  });

  const jwt = auth.isAuthenticated();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    readPatient({
      patientId: patientId
    }, { t: jwt.token }, signal).then((data) => {
      if (data && data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          firstName: data.firstName,
          lastName: data.lastName,
          dateOfBirth: data.dateOfBirth.substring(0, 10), // Formatting the date
          gender: data.gender,
          phone: data.phone,
          email: data.email,
          address: data.address,
          medicalHistory: data.medicalHistory,
          patientID: data.patientID
        });
      }
    });
    return function cleanup() {
      abortController.abort();
    };
  }, [patientId]);

  const clickSubmit = () => {
    // Prepare the patient object
    const patient = {
      firstName: values.firstName || undefined,
      lastName: values.lastName || undefined,
      dateOfBirth: values.dateOfBirth || undefined,
      gender: values.gender || undefined,
      phone: values.phone || undefined,
      email: values.email || undefined,
      address: values.address || undefined,
      medicalHistory: values.medicalHistory || undefined,
      patientID: values.patientID || undefined
    };

    // Log the patient object to the console for troubleshooting
    console.log('Updating patient:', patient);

    // Call the updatePatient function to send the data to the server
    updatePatient({
      patientId: patientId
    }, {
      t: jwt.token
    }, patient).then((data) => {
      if (data && data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, patientId: data._id, navigateToProfile: true });
      }
    });
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  if (values.navigateToProfile) {
    return (<Navigate to={'/patients/' + values.patientID} />);
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" className={classes.title}>
          Edit Patient
        </Typography>
        <TextField id="firstName" label="First Name" className={classes.textField} value={values.firstName} onChange={handleChange('firstName')} margin="normal" /><br />
        <TextField id="lastName" label="Last Name" className={classes.textField} value={values.lastName} onChange={handleChange('lastName')} margin="normal" /><br />
        <TextField
          id="dateOfBirth"
          label="Date of Birth"
          type="date"
          className={classes.textField}
          value={values.dateOfBirth} // Assuming date is formatted already
          onChange={handleChange('dateOfBirth')}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        /><br />
        <TextField id="gender" label="Gender" className={classes.textField} value={values.gender} onChange={handleChange('gender')} margin="normal" /><br />
        <TextField id="phone" label="Phone" className={classes.textField} value={values.phone} onChange={handleChange('phone')} margin="normal" /><br />
        <TextField id="email" type="email" label="Email" className={classes.textField} value={values.email} onChange={handleChange('email')} margin="normal" /><br />
        <TextField id="address" label="Address" className={classes.textField} value={values.address} onChange={handleChange('address')} margin="normal" /><br />
        <TextField id="medicalHistory" label="Medical History" className={classes.textField} value={values.medicalHistory} onChange={handleChange('medicalHistory')} margin="normal" /><br />
        <TextField id="patientID" label="Patient ID" className={classes.textField} value={values.patientID} onChange={handleChange('patientID')} margin="normal" /><br />
        {values.error && (<Typography component="p" color="error">
          <Icon color="error" className={classes.error}>error</Icon>
          {values.error}
        </Typography>)}
      </CardContent>
      <CardActions>
        <Button color="primary" variant="contained" onClick={clickSubmit} className={classes.submit}>Submit</Button>
      </CardActions>
    </Card>
  );
}
