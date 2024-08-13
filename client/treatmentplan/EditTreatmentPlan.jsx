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
// // import { read, update } from './api-treatmentplan.js'; // Update with the correct path
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

// // export default function EditTreatmentPlan() {
// //   const classes = useStyles();
// //   const { treatmentPlanId } = useParams();
// //   const [values, setValues] = useState({
// //     treatmentPlanID: '',
// //     patientID: '',
// //     description: '',
// //     status: '',
// //     open: false,
// //     error: '',
// //     NavigateToProfile: false
// //   });
// //   const jwt = auth.isAuthenticated();

// //   useEffect(() => {
// //     const abortController = new AbortController();
// //     const signal = abortController.signal;
// //     read({ treatmentPlanId: treatmentPlanId }, { t: jwt.token }, signal).then((data) => {
// //       if (data && data.error) {
// //         setValues({ ...values, error: data.error });
// //       } else {
// //         setValues({
// //           ...values,
// //           treatmentPlanID: data.treatmentPlanID,
// //           patientID: data.patientID,
// //           description: data.description,
// //           status: data.status
// //         });
// //       }
// //     });
// //     return function cleanup() {
// //       abortController.abort();
// //     };
// //   }, [treatmentPlanId]);

// //   const clickSubmit = () => {
// //     const treatmentPlan = {
// //       treatmentPlanID: values.treatmentPlanID || undefined,
// //       patientID: values.patientID || undefined,
// //       description: values.description || undefined,
// //       status: values.status || undefined
// //     };
// //     update({ treatmentPlanId: treatmentPlanId }, { t: jwt.token }, treatmentPlan).then((data) => {
// //       if (data && data.error) {
// //         setValues({ ...values, error: data.error });
// //       } else {
// //         setValues({ ...values, treatmentPlanId: data._id, NavigateToProfile: true });
// //       }
// //     });
// //   };

// //   const handleChange = name => event => {
// //     setValues({ ...values, [name]: event.target.value });
// //   };

// //   if (values.NavigateToProfile) {
// //     return (<Navigate to={'/treatmentplan/' + values.treatmentPlanId} />);
// //   }

// //   return (
// //     <Card className={classes.card}>
// //       <CardContent>
// //         <Typography variant="h6" className={classes.title}>
// //           Edit Treatment Plan
// //         </Typography>
// //         <TextField id="treatmentPlanID" label="Treatment Plan ID" className={classes.textField} value={values.treatmentPlanID} onChange={handleChange('treatmentPlanID')} margin="normal" /><br />
// //         <TextField id="patientID" label="Patient ID" className={classes.textField} value={values.patientID} onChange={handleChange('patientID')} margin="normal" /><br />
// //         <TextField id="description" label="Description" className={classes.textField} value={values.description} onChange={handleChange('description')} margin="normal" /><br />
// //         <TextField id="status" label="Status" className={classes.textField} value={values.status} onChange={handleChange('status')} margin="normal" /><br />
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


// //==============================================

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
// import { readTreatmentPlan, updateTreatmentPlan } from './api-treatmentplan.js'; // Updated import paths
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

// export default function EditTreatmentPlan() {
//   const classes = useStyles();
//   const { treatmentPlanId } = useParams();
//   const [values, setValues] = useState({
//     treatmentPlanID: '',
//     patientID: '',
//     description: '',
//     status: '',
//     open: false,
//     error: '',
//     navigateToProfile: false
//   });
//   const jwt = auth.isAuthenticated();

//   useEffect(() => {
//     const abortController = new AbortController();
//     const signal = abortController.signal;
//     readTreatmentPlan({ treatmentplanId: treatmentPlanId }, { t: jwt.token }, signal).then((data) => {
//       if (data && data.error) {
//         setValues({ ...values, error: data.error });
//       } else {
//         setValues({
//           ...values,
//           treatmentPlanID: data.treatmentPlanID,
//           patientID: data.patientID,
//           description: data.description,
//           status: data.status
//         });
//       }
//     });
//     return function cleanup() {
//       abortController.abort();
//     };
//   }, [treatmentPlanId]);

//   const clickSubmit = () => {
//     const treatmentPlan = {
//       treatmentPlanID: values.treatmentPlanID || undefined,
//       patientID: values.patientID || undefined,
//       description: values.description || undefined,
//       status: values.status || undefined
//     };
//     updateTreatmentPlan({ treatmentplanId: treatmentPlanId }, { t: jwt.token }, treatmentPlan).then((data) => {
//       if (data && data.error) {
//         setValues({ ...values, error: data.error });
//       } else {
//         setValues({ ...values, treatmentPlanId: data._id, navigateToProfile: true });
//       }
//     });
//   };

//   const handleChange = name => event => {
//     setValues({ ...values, [name]: event.target.value });
//   };

//   if (values.navigateToProfile) {
//     return (<Navigate to={'/treatmentplan/' + values.treatmentPlanId} />);
//   }

//   return (
//     <Card className={classes.card}>
//       <CardContent>
//         <Typography variant="h6" className={classes.title}>
//           Edit Treatment Plan
//         </Typography>
//         <TextField id="treatmentPlanID" label="Treatment Plan ID" className={classes.textField} value={values.treatmentPlanID} onChange={handleChange('treatmentPlanID')} margin="normal" /><br />
//         <TextField id="patientID" label="Patient ID" className={classes.textField} value={values.patientID} onChange={handleChange('patientID')} margin="normal" /><br />
//         <TextField id="description" label="Description" className={classes.textField} value={values.description} onChange={handleChange('description')} margin="normal" /><br />
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


import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import auth from '../lib/auth-helper.js';
import { readTreatmentPlan, updateTreatmentPlan } from './api-treatmentplan.js';
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

export default function EditTreatmentPlan() {
  const classes = useStyles();
  const { treatmentPlanId } = useParams();
  const [values, setValues] = useState({
    treatmentPlanID: '',
    patientID: '',
    treatmentDetails: '',
    dateCreated: '',
    recommendedFollowUps: '',
    error: '',
    navigateToProfile: false
  });

  const jwt = auth.isAuthenticated();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    readTreatmentPlan({
      treatmentPlanId: treatmentPlanId
    }, { t: jwt.token }, signal).then((data) => {
      if (data && data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          treatmentPlanID: data.treatmentPlanID,
          patientID: data.patientID,
          treatmentDetails: data.treatmentDetails,
          dateCreated: data.dateCreated.substring(0, 10), // Formatting the date to 'YYYY-MM-DD'
          recommendedFollowUps: data.recommendedFollowUps,
        });
      }
    });
    return function cleanup() {
      abortController.abort();
    };
  }, [treatmentPlanId]);

  const clickSubmit = () => {
    const treatmentPlan = {
      treatmentPlanID: values.treatmentPlanID || undefined,
      patientID: values.patientID || undefined,
      treatmentDetails: values.treatmentDetails || undefined,
      dateCreated: values.dateCreated || undefined,
      recommendedFollowUps: values.recommendedFollowUps || undefined
    };
    updateTreatmentPlan({
      treatmentPlanId: treatmentPlanId
    }, {
      t: jwt.token
    }, treatmentPlan).then((data) => {
      if (data && data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, treatmentPlanId: data._id, navigateToProfile: true });
      }
    });
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  if (values.navigateToProfile) {
    return <Navigate to={`/treatmentplans/${values.treatmentPlanID}`} />;
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" className={classes.title}>
          Edit Treatment Plan
        </Typography>
        <TextField id="treatmentPlanID" label="Treatment Plan ID" className={classes.textField} value={values.treatmentPlanID} onChange={handleChange('treatmentPlanID')} margin="normal" /><br />
        <TextField id="patientID" label="Patient ID" className={classes.textField} value={values.patientID} onChange={handleChange('patientID')} margin="normal" /><br />
        <TextField id="treatmentDetails" label="Treatment Details" className={classes.textField} value={values.treatmentDetails} onChange={handleChange('treatmentDetails')} margin="normal" /><br />
        <TextField
          id="dateCreated"
          label="Date Created"
          type="date"
          className={classes.textField}
          value={values.dateCreated.substring(0, 10)} // Formatting the date to 'YYYY-MM-DD'
          onChange={handleChange('dateCreated')}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        /><br />
        <TextField id="recommendedFollowUps" label="Recommended Follow-Ups" className={classes.textField} value={values.recommendedFollowUps} onChange={handleChange('recommendedFollowUps')} margin="normal" /><br />
        {values.error && (
          <Typography component="p" color="error">
            <Icon color="error" className={classes.error}>error</Icon>
            {values.error}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          color="primary"
          variant="contained"
          onClick={clickSubmit}
          className={classes.submit}
        >
          Submit
        </Button>
      </CardActions>
    </Card>
  );
}
