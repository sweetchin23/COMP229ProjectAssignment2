// import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import HomeIcon from '@material-ui/icons/Home';
// import Button from '@material-ui/core/Button';
// import auth from '../lib/auth-helper';
// import { Link, useNavigate, useLocation } from 'react-router-dom';

// const isActive = (location, path) => {
//   return location.pathname === path ? { color: '#ff4081' } : { color: '#ffffff' };
// };

// export default function Menu() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" color="inherit">
//           Dental App
//         </Typography>
//         <Link to="/">
//           <IconButton aria-label="Home" style={isActive(location, "/")}>
//             <HomeIcon/>
//           </IconButton>
//         </Link>
//         <Link to="/users">
//           <Button style={isActive(location, "/users")}>Users</Button>
//         </Link>
//         { auth.isAuthenticated() && (
//           <>
//             <Link to="/patient_management">
//               <Button style={isActive(location, "/patient_management")}>Patient Management</Button>
//             </Link>
//             <Link to={"/patients/" + auth.isAuthenticated().patients._id}>
//               <Button style={isActive(location, "/patients/" + auth.isAuthenticated().patients._id)}>Patient Profile</Button>
//             </Link>
//             <Link to="/appointment_scheduling">
//               <Button style={isActive(location, "/appointment_scheduling")}>Appointment Scheduling</Button>
//             </Link>
//             <Link to="/dentist_profiles">
//               <Button style={isActive(location, "/dentist_profiles")}>Dentist Profiles</Button>
//             </Link>
//             <Link to="/invoices">
//               <Button style={isActive(location, "/invoices")}>Invoices</Button>
//             </Link>
//             <Link to="/treatmentplans">
//               <Button style={isActive(location, "/treatmentplans")}>Treatment Plan</Button>
//             </Link>
//             <Link to={"/user/" + auth.isAuthenticated().user._id}>
//               <Button style={isActive(location, "/user/" + auth.isAuthenticated().user._id)}>My Profile</Button>
//             </Link>
//             <Button color="inherit" onClick={() => {
//                 auth.clearJWT(() => navigate('/'));
//               }}>Sign out</Button>
//           </>
//         )}
//         { !auth.isAuthenticated() && (
//           <>
//             <Link to="/signup">
//               <Button style={isActive(location, "/signup")}>Sign up</Button>
//             </Link>
//             <Link to="/signin">
//               <Button style={isActive(location, "/signin")}>Sign In</Button>
//             </Link>
//           </>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// }


import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import auth from '../lib/auth-helper';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const isActive = (location, path) => {
  return location.pathname === path ? { color: '#ff4081' } : { color: '#ffffff' };
};

export default function Menu() {
  const navigate = useNavigate();
  const location = useLocation();
  const authenticatedUser = auth.isAuthenticated().user; // Safely get the authenticated user

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Dental App
        </Typography>
        <Link to="/">
          <IconButton aria-label="Home" style={isActive(location, "/")}>
            <HomeIcon />
          </IconButton>
        </Link>
        <Link to="/users">
          <Button style={isActive(location, "/users")}>Users</Button>
        </Link>
        {auth.isAuthenticated() && (
          <>
            <Link to="/patient_management">
              <Button style={isActive(location, "/patient_management")}>Patient Management</Button>
            </Link>
            <Link to="/appointment_scheduling">
              <Button style={isActive(location, "/appointment_scheduling")}>Appointment Scheduling</Button>
            </Link>
            <Link to="/dentist_profiles">
              <Button style={isActive(location, "/dentist_profiles")}>Dentist Profiles</Button>
            </Link>
            <Link to="/invoices">
              <Button style={isActive(location, "/invoices")}>Invoices</Button>
            </Link>
            <Link to="/treatmentPlan">
              <Button style={isActive(location, "/treatmentPlan")}>Treatment Plan</Button>
            </Link>
            <Link to={"/user/" + auth.isAuthenticated().user._id}>
              <Button style={isActive(location, "/user/" + auth.isAuthenticated().user._id)}>My Profile</Button>
            </Link>
            <Button
              color="inherit"
              onClick={() => {
                auth.clearJWT(() => navigate('/'));
              }}
            >
              Sign out
            </Button>
          </>
        )}
        {!auth.isAuthenticated() && (
          <>
            <Link to="/signup">
              <Button style={isActive(location, "/signup")}>Sign up</Button>
            </Link>
            <Link to="/signin">
              <Button style={isActive(location, "/signin")}>Sign In</Button>
            </Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
