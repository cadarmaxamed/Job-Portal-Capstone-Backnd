import express from 'express'
import dotenv from 'dotenv'
//import mongoose from 'mongoose'
import cors from 'cors';
import bodyParser from 'body-parser';

import ConnectDB from './db/conn.mjs';

//import routes
import jobPostings from './routes/jobPostings.mjs';
import jobTypes from './routes/jobTypes.mjs';

//importing schemas not needed

//configurations
dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000
//connection
ConnectDB();

//Middleware
app.use(express.json())
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));


//Routes
app.get('/', (req, res)=>{
    res.send(`Tech Jobs For YOU!`)
})

//use routes
app.use('/JobPostings', jobPostings);
app.use('/JobTypes', jobTypes);


// Global error handling
app.use((err, _req, res, next) => {
    res.status(500).send("Seems like we messed up somewhere...");
  });

//listen for server
app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`)
});

