import express from 'express';
import JobPostings from '../models/jobPostings.mjs';

const router = express.Router();


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





// Get all job postings (checked)
// router.get('/', async (req, res) => {
//   let collection = await db.collection('job_postings');
//   let result = await collection.find({}).limit(10).toArray();
//   res.send(result);
// });

// // Get a single job posting by ID (checked)
// router.get('/:id', async (req, res) => {
//   let collection = await db.collection('job_postings');
//   let query = { _id: new ObjectId(req.params.id) };
//   let result = await collection.findOne(query);

//   if (!result) res.status(404).send('Not found');
//   else res.status(200).send(200);
// });

// // Create a new job posting (Checked!!!)
// router.post('/', async (req, res) => {
//   let collection = await db.collection('job_postings');
//   let newDocument = req.body;

//   if(newDocument.id) {
//     newDocument._id = newDocument.id;
//     delete newDocument.id;
//   }
//   let result = await collection.insertOne(req.body);
//   res.status(201).send(result.ops[0]);
// });

// // Update an existing Job Posting by ID
// router.patch('/:id', async (req, res) => {
//   let collection = await db.collection('job_postings');
//   let query = { _id: new ObjectId(req.params.id) };
//   let result = await collection.updateOne(query, { $set: req.body });

//   if (result.modifiedCount === 0) res.status(404).send('Not found');
//   else res.status(200).send('Updated successfully');
// });

// // Delete a job posting by ID
// router.delete('/:id', async (req, res) => {
//   let collection = await db.collection('job_postings');
//   let query = { _id: Number(req.params.id) };
//   let result = await collection.deleteOne(query);

//   if (result.deletedCount === 0) res.status(404).send('Not found');
//   else res.status(204).send(result);
// });

export default router;