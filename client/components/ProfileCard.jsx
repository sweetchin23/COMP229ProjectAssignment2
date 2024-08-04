import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
  avatar: {
    marginRight: theme.spacing(2),
  },
  content: {
    display: 'flex',
    alignItems: 'center',
  },
  actions: {
    marginLeft: 'auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
}));

const ProfileCard = ({ title, fields, data, isEditing, onEdit, onDelete, onSubmit, submitLabel }) => {
  const classes = useStyles();

  const handleChange = (name) => (event) => {
    onEdit(name, event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" className={classes.title}>
          {title}
        </Typography>
        {!isEditing ? (
          <div className={classes.content}>
            <Avatar className={classes.avatar} />
            <div>
              {fields.map((field) => (
                <Typography key={field.name} variant="body1">
                  {`${field.label}: ${data[field.name]}`}
                </Typography>
              ))}
            </div>
            <div className={classes.actions}>
              <IconButton color="primary" onClick={() => onEdit('isEditing', true)}>
                <EditIcon />
              </IconButton>
              <IconButton color="secondary" onClick={onDelete}>
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        ) : (
          <form className={classes.form} onSubmit={handleSubmit}>
            {fields.map((field) => (
              <TextField
                key={field.name}
                name={field.name}
                label={field.label}
                type={field.type || 'text'}
                value={data[field.name] || ''}
                onChange={handleChange(field.name)}
                required={field.required || false}
              />
            ))}
            <Button type="submit" color="primary" variant="contained">
              {submitLabel}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
