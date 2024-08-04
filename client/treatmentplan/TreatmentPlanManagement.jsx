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

const TreatmentPlanManagement = () => {
  const classes = useStyles();
  const [treatmentPlans, setTreatmentPlans] = useState([]);
  const [treatmentPlan, setTreatmentPlan] = useState({
    treatmentPlanID: '',
    patientID: '',
    treatmentDetails: '',
    dateCreated: '',
    recommendedFollowUps: ''
  });

  useEffect(() => {
    fetchTreatmentPlans();
  }, []);

  const fetchTreatmentPlans = async () => {
    try {
      const response = await fetch('/api/treatmentplans');
      const data = await response.json();
      setTreatmentPlans(data);
    } catch (error) {
      console.error('Error fetching treatment plans:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTreatmentPlan({
      ...treatmentPlan,
      [name]: value
    });
  };

  const handleAddTreatmentPlan = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/treatmentplans', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(treatmentPlan),
      });
      if (response.ok) {
        fetchTreatmentPlans();
        setTreatmentPlan({
          treatmentPlanID: '',
          patientID: '',
          treatmentDetails: '',
          dateCreated: '',
          recommendedFollowUps: ''
        });
      } else {
        console.error('Error adding treatment plan');
      }
    } catch (error) {
      console.error('Error adding treatment plan:', error);
    }
  };

  const handleDeleteTreatmentPlan = async (id) => {
    try {
      const response = await fetch(`/api/treatmentplans/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchTreatmentPlans();
      } else {
        console.error('Error deleting treatment plan');
      }
    } catch (error) {
      console.error('Error deleting treatment plan:', error);
    }
  };

  const handleEditTreatmentPlan = (treatmentPlan) => {
    setTreatmentPlan({
      treatmentPlanID: treatmentPlan.treatmentPlanID,
      patientID: treatmentPlan.patientID,
      treatmentDetails: treatmentPlan.treatmentDetails,
      dateCreated: treatmentPlan.dateCreated,
      recommendedFollowUps: treatmentPlan.recommendedFollowUps
    });
    handleDeleteTreatmentPlan(treatmentPlan._id);
  };

  return (
    <div>
      <Card className={classes.card}>
        <CardHeader className={classes.title} title="Treatment Plan Management" />
        <CardContent>
          <form onSubmit={handleAddTreatmentPlan} className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Treatment Plan ID"
                  name="treatmentPlanID"
                  value={treatmentPlan.treatmentPlanID}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Patient ID"
                  name="patientID"
                  value={treatmentPlan.patientID}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Treatment Details"
                  name="treatmentDetails"
                  value={treatmentPlan.treatmentDetails}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Date Created"
                  name="dateCreated"
                  type="date"
                  value={treatmentPlan.dateCreated}
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
                  label="Recommended Follow Ups"
                  name="recommendedFollowUps"
                  value={treatmentPlan.recommendedFollowUps}
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
                  Add Treatment Plan
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
              <TableCell>Treatment Plan ID</TableCell>
              <TableCell>Patient ID</TableCell>
              <TableCell>Treatment Details</TableCell>
              <TableCell>Date Created</TableCell>
              <TableCell>Recommended Follow Ups</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {treatmentPlans.map((treatmentPlan) => (
              <TableRow key={treatmentPlan._id}>
                <TableCell>{treatmentPlan.treatmentPlanID}</TableCell>
                <TableCell>{treatmentPlan.patientID}</TableCell>
                <TableCell>{treatmentPlan.treatmentDetails}</TableCell>
                <TableCell>{treatmentPlan.dateCreated}</TableCell>
                <TableCell>{treatmentPlan.recommendedFollowUps}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleEditTreatmentPlan(treatmentPlan)}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteTreatmentPlan(treatmentPlan._id)}>
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

export default TreatmentPlanManagement;
