import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import ConnectDB from './config/conn.mjs';

// Import routes
import jobPostings from './routes/jobPostings.mjs';
import jobTypes from './routes/jobTypes.mjs';

// Configuration
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Database connection
ConnectDB();

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (_req, res) => {
  res.send('Tech Jobs For YOU!');
});

// Use routes
app.use('/JobPostings', jobPostings);
app.use('/JobTypes', jobTypes);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});

// Listen for server
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
