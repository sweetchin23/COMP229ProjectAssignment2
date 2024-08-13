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
import { createInvoice, listInvoices, updateInvoice } from '../invoice/api-invoice'; // Import updateInvoice
import auth from '../lib/auth-helper';

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

const InvoiceManagement = () => {
  const classes = useStyles();
  const [invoices, setInvoices] = useState([]);
  const [invoice, setInvoice] = useState({
    invoiceID: '',
    patientID: '',
    appointmentID: '',
    amount: '',
    paymentStatus: '',
    dateIssued: '',
    firstName: '', // New field
    lastName: '', // New field
    isEditing: false, // New flag to track editing state
  });
  const jwt = auth.isAuthenticated();

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    try {
      const data = await listInvoices(null, jwt.token);
      setInvoices(data);
    } catch (error) {
      console.error('Error fetching invoices:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoice({
      ...invoice,
      [name]: value
    });
  };

  const handleAddInvoice = async (e) => {
    e.preventDefault();
    const formattedInvoice = {
      invoiceID: invoice.invoiceID,
      patientID: invoice.patientID,
      appointmentID: invoice.appointmentID,
      amount: invoice.amount,
      paymentStatus: invoice.paymentStatus,
      dateIssued: new Date(invoice.dateIssued).toISOString(),
      firstName: invoice.firstName, // New field
      lastName: invoice.lastName, // New field
    };

    try {
      let data;
      if (invoice.isEditing) {
        // Update existing invoice
        data = await updateInvoice({ invoiceId: invoice.invoiceID }, jwt.token, formattedInvoice);
      } else {
        // Create a new invoice
        data = await createInvoice(formattedInvoice, jwt.token);
      }

      if (data && data.error) {
        console.error('Error managing invoice:', data.error);
      } else {
        fetchInvoices();
        setInvoice({
          invoiceID: '',
          patientID: '',
          appointmentID: '',
          amount: '',
          paymentStatus: '',
          dateIssued: '',
          firstName: '', // Reset field
          lastName: '', // Reset field
          isEditing: false // Reset editing state
        });
      }
    } catch (error) {
      console.error('Error managing invoice:', error);
    }
  };

  const handleEditInvoice = (invoice) => {
    setInvoice({
      invoiceID: invoice.invoiceID,
      patientID: invoice.patientID,
      appointmentID: invoice.appointmentID,
      amount: invoice.amount,
      paymentStatus: invoice.paymentStatus,
      dateIssued: invoice.dateIssued.split("T")[0], // Extract date part for input field
      firstName: invoice.firstName, // Set for editing
      lastName: invoice.lastName, // Set for editing
      isEditing: true // Set to editing mode
    });
  };

  const handleDeleteInvoice = async (id) => {
    try {
      const data = await removeInvoice({ invoiceId: id }, jwt.token);
      if (data && data.error) {
        console.error('Error deleting invoice:', data.error);
      } else {
        fetchInvoices();
      }
    } catch (error) {
      console.error('Error deleting invoice:', error);
    }
  };

  return (
    <div>
      <Card className={classes.card}>
        <CardHeader className={classes.title} title="Invoice Management" />
        <CardContent>
          <form onSubmit={handleAddInvoice} className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Invoice ID"
                  name="invoiceID"
                  value={invoice.invoiceID}
                  onChange={handleChange}
                  required
                  disabled={invoice.isEditing} // Disable field if editing
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Patient ID"
                  name="patientID"
                  value={invoice.patientID}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Appointment ID"
                  name="appointmentID"
                  value={invoice.appointmentID}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Amount"
                  name="amount"
                  type="number"
                  value={invoice.amount}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Payment Status"
                  name="paymentStatus"
                  value={invoice.paymentStatus}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Date Issued"
                  name="dateIssued"
                  type="date"
                  value={invoice.dateIssued}
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
                  label="First Name"
                  name="firstName"
                  value={invoice.firstName}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={invoice.lastName}
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
                  {invoice.isEditing ? 'Update Invoice' : 'Add Invoice'}
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
              <TableCell>Invoice ID</TableCell>
              <TableCell>Patient ID</TableCell>
              <TableCell>Appointment ID</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Payment Status</TableCell>
              <TableCell>Date Issued</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice._id}>
                <TableCell>{invoice.invoiceID}</TableCell>
                <TableCell>{invoice.patientID}</TableCell>
                <TableCell>{invoice.appointmentID}</TableCell>
                <TableCell>{invoice.amount}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.dateIssued.split("T")[0]}</TableCell> {/* Format date */}
                <TableCell>{invoice.firstName}</TableCell> {/* New field */}
                <TableCell>{invoice.lastName}</TableCell> {/* New field */}
                <TableCell align="right">
                  <IconButton onClick={() => handleEditInvoice(invoice)}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteInvoice(invoice._id)}>
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

export default InvoiceManagement;
