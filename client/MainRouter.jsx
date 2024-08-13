// // import React from 'react';
// // import { Route, Routes } from 'react-router-dom';
// // import Home from './core/Home';
// // import Users from './user/Users.jsx';
// // import Signup from './user/Signup.jsx';
// // import Signin from './lib/Signin.jsx';
// // import Profile from './user/Profile.jsx';
// // import PrivateRoute from './lib/PrivateRoute.jsx';
// // import EditProfile from './user/EditProfile.jsx';
// // import PatientManagement from './patient/PatientManagement.jsx';
// // import AppointmentScheduling from './appointment/AppointmentScheduling.jsx';
// // import DentistProfiles from './dentist/DentistProfiles.jsx';
// // import Invoices from './invoice/Invoices.jsx';
// // import TreatmentPlanManagement from './treatmentplan/TreatmentPlanManagement';
// // import Menu from './core/Menu';

// // function MainRouter() {
// //     return (
// //         <div>
// //             <Menu />
// //             <Routes>
// //                 <Route path="/" element={<Home />} />
// //                 <Route path="/users" element={<Users />} />
// //                 <Route path="/signup" element={<Signup />} />
// //                 <Route path="/signin" element={<Signin />} />
// //                 <Route
// //                     path="/patient_management"
// //                     element={
// //                         <PrivateRoute>
// //                             <PatientManagement />
// //                         </PrivateRoute>
// //                     }
// //                 />

// // <Route
// //                     path="/patient_profile"
// //                     element={
// //                         <PrivateRoute>
// //                             <PatientProfile />
// //                         </PrivateRoute>
// //                     }

// //                     />
// //                 <Route
// //                     path="/appointment_scheduling"
// //                     element={
// //                         <PrivateRoute>
// //                             <AppointmentScheduling />
// //                         </PrivateRoute>
// //                     }
// //                 />
// //                 <Route
// //                     path="/dentist_profiles"
// //                     element={
// //                         <PrivateRoute>
// //                             <DentistProfiles />
// //                         </PrivateRoute>
// //                     }
// //                 />
// //                 <Route
// //                     path="/invoices"
// //                     element={
// //                         <PrivateRoute>
// //                             <Invoices />
// //                         </PrivateRoute>
// //                     }
// //                 />
// //                 <Route
// //                     path="/treatmentplans"
// //                     element={
// //                         <PrivateRoute>
// //                             <TreatmentPlanManagement />
// //                         </PrivateRoute>
// //                     }
// //                 />
// //                 <Route
// //                     path="/user/edit/:userId"
// //                     element={
// //                         <PrivateRoute>
// //                             <EditProfile />
// //                         </PrivateRoute>
// //                     }
// //                 />
// //                 <Route path="/user/:userId" element={<Profile />} />
// //             </Routes>
// //         </div>
// //     );
// // }

// // export default MainRouter

// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Home from './core/Home';
// import Users from './user/Users.jsx';
// import Signup from './user/Signup.jsx';
// import Signin from './lib/Signin.jsx';
// import Profile from './user/Profile.jsx';
// import PrivateRoute from './lib/PrivateRoute.jsx';
// import EditProfile from './user/EditProfile.jsx';
// import PatientManagement from './patient/PatientManagement.jsx';
// import AppointmentScheduling from './appointment/AppointmentScheduling.jsx';
// import DentistProfiles from './dentist/DentistProfiles.jsx';
// import Invoices from './invoice/Invoices.jsx';
// import TreatmentPlanManagement from './treatmentplan/TreatmentPlanManagement';
// import Menu from './core/Menu';
// import PatientProfile from './patient/PatientProfile'; // Importing PatientProfile

// function MainRouter() {
//     return (
//         <div>
//             <Menu />
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/users" element={<Users />} />
//                 <Route path="/signup" element={<Signup />} />
//                 <Route path="/signin" element={<Signin />} />
//                 <Route
//                     path="/patient_management"
//                     element={
//                         <PrivateRoute>
//                             <PatientManagement />
//                         </PrivateRoute>
//                     }
//                 />
//                 <Route
//                     path="/patients/edit/:patientId"
//                     element={
//                         <PrivateRoute>
//                             <EditPatient />
//                         </PrivateRoute>
//                     }
//                 />
//                 <Route
//                     path="/appointment_scheduling"
//                     element={
//                         <PrivateRoute>
//                             <AppointmentScheduling />
//                         </PrivateRoute>
//                     }
//                 />
//                 <Route
//                     path="/dentist_profiles"
//                     element={
//                         <PrivateRoute>
//                             <DentistProfiles />
//                         </PrivateRoute>
//                     }
//                 />
//                 <Route
//                     path="/invoices"
//                     element={
//                         <PrivateRoute>
//                             <Invoices />
//                         </PrivateRoute>
//                     }
//                 />
//                 <Route
//                     path="/treatmentplans"
//                     element={
//                         <PrivateRoute>
//                             <TreatmentPlanManagement />
//                         </PrivateRoute>
//                     }
//                 />
//                 <Route
//                     path="/user/edit/:userId"
//                     element={
//                         <PrivateRoute>
//                             <EditProfile />
//                         </PrivateRoute>
//                     }
//                 />
//                 <Route path="/user/:userId" element={<Profile />} />
//             </Routes>
//         </div>
//     );
// }

// export default MainRouter;


//=======

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './core/Home';
import Users from './user/Users.jsx';
import Signup from './user/Signup.jsx';
import Signin from './lib/Signin.jsx';
import Profile from './user/Profile.jsx';
import PrivateRoute from './lib/PrivateRoute.jsx';
import EditProfile from './user/EditProfile.jsx';
import PatientManagement from './patient/PatientManagement.jsx';
import AppointmentScheduling from './appointment/AppointmentScheduling.jsx';
import DentistProfiles from './dentist/DentistProfiles.jsx';
import Invoices from './invoice/Invoices.jsx';
import TreatmentPlanManagement from './treatmentplan/TreatmentPlanManagement';
import Menu from './core/Menu';
import PatientProfile from './patient/PatientProfile'; // Importing PatientProfile
import EditPatient from './patient/EditPatient'; // Importing EditPatient

function MainRouter() {
    return (
        <div>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route
                    path="/patient_management"
                    element={
                        <PrivateRoute>
                            <PatientManagement />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/patients/:patientId"
                    element={
                        <PrivateRoute>
                            <PatientProfile />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/patients/edit/:patientId"
                    element={
                        <PrivateRoute>
                            <EditPatient />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/appointment_scheduling"
                    element={
                        <PrivateRoute>
                            <AppointmentScheduling />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/dentist_profiles"
                    element={
                        <PrivateRoute>
                            <DentistProfiles />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/invoices"
                    element={
                        <PrivateRoute>
                            <Invoices />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/treatmentplans"
                    element={
                        <PrivateRoute>
                            <TreatmentPlanManagement />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/user/edit/:userId"
                    element={
                        <PrivateRoute>
                            <EditProfile />
                        </PrivateRoute>
                    }
                />
                <Route path="/user/:userId" element={<Profile />} />
            </Routes>
        </div>
    );
}

export default MainRouter;
