import express from 'express';
import JobTypes from '../models/jobTypes.mjs';

const router = express.Router();



// create route
router.post('/', async (req, res) => {
    try {
      let newJobType = new JobTypes(req.body);
      await newJobType.save();
      res.json(newJobType);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Server Error" });
    }
  });
  


//read route
router.get('/', async (req, res)=>{
    try {
      const allJobTypes = await JobTypes.find({});
      res.json(allJobTypes);
        
    } catch (error) {
        console.error(error)
        res.status(500).json({msg: "Server Error"})
    }
})

//update route
router.patch('/:id', async (req, res)=>{
    try {
      const updatedJobType = await JobTypes.findByIdAndUpdate(
        req.params.id,
        req.body,
      { new: true }
      );
      res.json(updatedJobType)  ;

    } catch (error) {
        console.error(error)
        res.status(500).json({msg: "Server Error"})
    }
})

//delete route
router.delete('/:id', async (req, res)=>{
    try {
      await JobTypes.findByIdAndDelete(req.params.id);
      res.status(200).json("Job Type Deleted")
        
    } catch (error) {
        console.error(error)
        res.status(500).json({msg: "Server Error"})
    }
})

export default router;
