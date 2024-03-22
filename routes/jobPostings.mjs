import express from 'express';
import JobPostings from '../models/jobPostings.mjs';

const router = express.Router();

//seed routes

//create route
router.post('/', async (req, res)=>{
    try {
        let newJobPosting  = new JobPostings(req.body)
        await newJobPosting.save()
        res.json(newJobPosting)
        
    } catch (error) {
        console.error(error)
        res.status(500).json({msg: "Server Error"})
    }
})


//read route
router.get('/', async (req, res)=>{
    try {
        const allJobPostings = await JobPostings.find({});
        res.json(allJobPostings);
    } catch (error) {
        console.error(error)
        res.status(500).json({msg: "Server Error"})
    }
})

//update route
router.patch('/:id', async (req, res)=>{
    try {
        
    } catch (error) {
        console.error(error)
        res.status(500).json({msg: "Server Error"})
    }
})

//delete route
router.delete('/:id', async (req, res)=>{
    try {
        
    } catch (error) {
        console.error(error)
        res.status(500).json({msg: "Server Error"})
    }
})

export default router;