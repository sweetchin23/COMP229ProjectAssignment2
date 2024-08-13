import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Typography from '@material-ui/core/Typography'; // Import Typography
import { listPatients } from './api-patient'; // Ensure this path is correct

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin: 'auto',
    marginTop: theme.spacing(5),
  },
  title: {
    margin: theme.spacing(2),
  },
}));

const PatientList = () => {
  const classes = useStyles();
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    listPatients().then((data) => {
      if (data && !data.error) {
        setPatients(data);
      }
    });
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        All Patients
      </Typography>
      <List>
        {patients.map((patient, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar>{patient.name.charAt(0)}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={patient.name} />
            <IconButton edge="end" aria-label="details">
              <ArrowForwardIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default PatientList;
