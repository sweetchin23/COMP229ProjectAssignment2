// import React, { useState } from 'react';
// import IconButton from '@material-ui/core/IconButton';
// import Delete from '@material-ui/icons/Delete';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import Button from '@material-ui/core/Button';
// import auth from '../lib/auth-helper.js';
// import { removeAppointment } from './api-appointment'; // Update with the correct path
// import { useNavigate } from 'react-router-dom';

// export default function DeleteAppointment({ appointmentId }) {
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();
//   const jwt = auth.isAuthenticated();

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const deleteAccount = () => {
//     removeAppointment({
//       appointmentId: appointmentId
//     }, { t: jwt.token }).then((data) => {
//       if (data && data.error) {
//         console.log(data.error);
//       } else {
//         navigate('/appointments', { replace: true });
//       }
//     });
//   };

//   return (
//     <span>
//       <IconButton aria-label="Delete" onClick={handleClickOpen} color="secondary">
//         <Delete />
//       </IconButton>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>{"Delete Appointment"}</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Are you sure you want to delete this appointment?
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={deleteAccount} color="secondary" autoFocus>
//             Confirm
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </span>
//   );
// }
