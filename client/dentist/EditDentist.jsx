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
import { readDentist, updateDentist } from './api-dentist.js';
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

export default function EditDentist() {
  const classes = useStyles();
  const { dentistId } = useParams();
  const [values, setValues] = useState({
    dentistID: '',
    firstName: '',
    lastName: '',
    specialization: '',
    phone: '',
    email: '',
    workingHours: '',
    error: '',
    navigateToProfile: false
  });
  const jwt = auth.isAuthenticated();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    readDentist({ dentistId: dentistId }, { t: jwt.token }, signal).then((data) => {
      if (data && data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          dentistID: data.dentistID, // Include dentistID
          firstName: data.firstName,
          lastName: data.lastName,
          specialization: data.specialization,
          phone: data.phone,
          email: data.email,
          workingHours: data.workingHours
        });
      }
    });
    return function cleanup() {
      abortController.abort();
    };
  }, [dentistId]);

  const clickSubmit = () => {
    const dentist = {
      dentistID: values.dentistID || undefined, // Ensure dentistID is sent
      firstName: values.firstName || undefined,
      lastName: values.lastName || undefined,
      specialization: values.specialization || undefined,
      phone: values.phone || undefined,
      email: values.email || undefined,
      workingHours: values.workingHours || undefined
    };
    updateDentist({ dentistId: dentistId }, { t: jwt.token }, dentist).then((data) => {
      if (data && data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, navigateToProfile: true });
      }
    });
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  if (values.navigateToProfile) {
    return (<Navigate to={'/dentist/' + dentistId} />);
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" className={classes.title}>
          Edit Dentist
        </Typography>
        <TextField id="dentistID" label="Dentist ID" className={classes.textField} value={values.dentistID} onChange={handleChange('dentistID')} margin="normal" /><br />
        <TextField id="firstName" label="First Name" className={classes.textField} value={values.firstName} onChange={handleChange('firstName')} margin="normal" /><br />
        <TextField id="lastName" label="Last Name" className={classes.textField} value={values.lastName} onChange={handleChange('lastName')} margin="normal" /><br />
        <TextField id="specialization" label="Specialization" className={classes.textField} value={values.specialization} onChange={handleChange('specialization')} margin="normal" /><br />
        <TextField id="phone" label="Phone" className={classes.textField} value={values.phone} onChange={handleChange('phone')} margin="normal" /><br />
        <TextField id="email" label="Email" className={classes.textField} value={values.email} onChange={handleChange('email')} margin="normal" /><br />
        <TextField id="workingHours" label="Working Hours" className={classes.textField} value={values.workingHours} onChange={handleChange('workingHours')} margin="normal" /><br />
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
