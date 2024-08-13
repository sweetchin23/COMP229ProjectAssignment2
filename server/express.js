// import express from 'express';
// import bodyParser from 'body-parser';
// import cookieParser from 'cookie-parser';
// import compress from 'compression';
// import cors from 'cors';
// import helmet from 'helmet';
// import path from 'path';
// import userRoutes from './routes/user.routes.js';
// import treatmentPlanRoutes from './routes/treatmentPlan.routes.js';
// import patientRoutes from './routes/patient.routes.js';
// import dentistRoutes from './routes/dentist.routes.js';
// import appointmentRoutes from './routes/appointment.routes.js';
// import invoiceRoutes from './routes/invoice.routes.js';
// import authRoutes from './routes/auth.routes.js';

// const app = express();

// const CURRENT_WORKING_DIR = process.cwd();

// app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(compress());
// app.use(helmet());
// app.use(cors());

// app.use('/', userRoutes);
// app.use('/', authRoutes);
// app.use('/', treatmentPlanRoutes);
// app.use('/', patientRoutes);
// app.use('/', dentistRoutes);
// app.use('/', appointmentRoutes);
// app.use('/', invoiceRoutes);

// app.use((err, req, res, next) => {
//   if (err.name === 'UnauthorizedError') {
//     res.status(401).json({ "error": err.name + ": " + err.message });
//   } else if (err) {
//     res.status(400).json({ "error": err.name + ": " + err.message });
//     console.log(err);
//   }
// });

// export default app;


//=================


import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
import userRoutes from './routes/user.routes.js';
import treatmentPlanRoutes from './routes/treatmentPlan.routes.js';
import patientRoutes from './routes/patient.routes.js';
import dentistRoutes from './routes/dentist.routes.js';
import appointmentRoutes from './routes/appointment.routes.js';
import invoiceRoutes from './routes/invoice.routes.js';
import authRoutes from './routes/auth.routes.js';

const app = express();

const CURRENT_WORKING_DIR = process.cwd();

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist/app')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

app.use('/', userRoutes);
app.use('/', authRoutes);
app.use('/', treatmentPlanRoutes);
app.use('/', patientRoutes);
app.use('/', dentistRoutes);
app.use('/', appointmentRoutes);
app.use('/', invoiceRoutes);

app.use((err, _req, res, _next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ "error": err.name + ": " + err.message });
  } else if (err) {
    res.status(400).json({ "error": err.name + ": " + err.message });
    console.log(err);
  }
});

export default app;
