import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { MongoClient } from 'mongodb';

//import routes
import jobPostings from './routes/jobPostings.mjs';
import jobTypes from './routes/jobTypes.mjs';

//importing schemas

//configurations
dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

//Middleware
app.use(express.json())

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
  
app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`)
})