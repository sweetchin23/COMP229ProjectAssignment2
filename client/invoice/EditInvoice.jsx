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
import { read, update } from './api-invoice.js'; // Update with the correct path
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

export default function EditInvoice() {
  const classes = useStyles();
  const { invoiceId } = useParams();
  const [values, setValues] = useState({
    invoiceID: '',
    patientID: '',
    appointmentID: '',
    amount: '',
    paymentStatus: '',
    dateIssued: '',
    open: false,
    error: '',
    NavigateToProfile: false
  });
  const jwt = auth.isAuthenticated();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    read({ invoiceId: invoiceId }, { t: jwt.token }, signal).then((data) => {
      if (data && data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          invoiceID: data.invoiceID,
          patientID: data.patientID,
          appointmentID: data.appointmentID,
          amount: data.amount,
          paymentStatus: data.paymentStatus,
          dateIssued: data.dateIssued
        });
      }
    });
    return function cleanup() {
      abortController.abort();
    };
  }, [invoiceId]);

  const clickSubmit = () => {
    const invoice = {
      invoiceID: values.invoiceID || undefined,
      patientID: values.patientID || undefined,
      appointmentID: values.appointmentID || undefined,
      amount: values.amount || undefined,
      paymentStatus: values.paymentStatus || undefined,
      dateIssued: values.dateIssued || undefined
    };
    update({ invoiceId: invoiceId }, { t: jwt.token }, invoice).then((data) => {
      if (data && data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, invoiceId: data._id, NavigateToProfile: true });
      }
    });
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  if (values.NavigateToProfile) {
    return (<Navigate to={'/invoice/' + values.invoiceId} />);
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" className={classes.title}>
          Edit Invoice
        </Typography>
        <TextField id="invoiceID" label="Invoice ID" className={classes.textField} value={values.invoiceID} onChange={handleChange('invoiceID')} margin="normal" /><br />
        <TextField id="patientID" label="Patient ID" className={classes.textField} value={values.patientID} onChange={handleChange('patientID')} margin="normal" /><br />
        <TextField id="appointmentID" label="Appointment ID" className={classes.textField} value={values.appointmentID} onChange={handleChange('appointmentID')} margin="normal" /><br />
        <TextField id="amount" type="number" label="Amount" className={classes.textField} value={values.amount} onChange={handleChange('amount')} margin="normal" /><br />
        <TextField id="paymentStatus" label="Payment Status" className={classes.textField} value={values.paymentStatus} onChange={handleChange('paymentStatus')} margin="normal" /><br />
        <TextField id="dateIssued" type="date" label="Date Issued" className={classes.textField} value={values.dateIssued} onChange={handleChange('dateIssued')} margin="normal" /><br />
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
