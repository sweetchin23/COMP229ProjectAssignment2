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
import { read, update } from './api-patient.js'; // Update with the correct path
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
    name: '',
    age: '',
    contactNumber: '',
    address: '',
    open: false,
    error: '',
    NavigateToProfile: false
  });
  const jwt = auth.isAuthenticated();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    read({ patientId: patientId }, { t: jwt.token }, signal).then((data) => {
      if (data && data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: data.name,
          age: data.age,
          contactNumber: data.contactNumber,
          address: data.address
        });
      }
    });
    return function cleanup() {
      abortController.abort();
    };
  }, [patientId]);

  const clickSubmit = () => {
    const patient = {
      name: values.name || undefined,
      age: values.age || undefined,
      contactNumber: values.contactNumber || undefined,
      address: values.address || undefined
    };
    update({ patientId: patientId }, { t: jwt.token }, patient).then((data) => {
      if (data && data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, patientId: data._id, NavigateToProfile: true });
      }
    });
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  if (values.NavigateToProfile) {
    return (<Navigate to={'/patient/' + values.patientId} />);
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" className={classes.title}>
          Edit Patient
        </Typography>
        <TextField id="name" label="Name" className={classes.textField} value={values.name} onChange={handleChange('name')} margin="normal" /><br />
        <TextField id="age" type="number" label="Age" className={classes.textField} value={values.age} onChange={handleChange('age')} margin="normal" /><br />
        <TextField id="contactNumber" label="Contact Number" className={classes.textField} value={values.contactNumber} onChange={handleChange('contactNumber')} margin="normal" /><br />
        <TextField id="address" label="Address" className={classes.textField} value={values.address} onChange={handleChange('address')} margin="normal" /><br />
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
