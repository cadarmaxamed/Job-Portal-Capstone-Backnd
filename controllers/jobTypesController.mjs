import JobTypes from '../models/jobTypes.mjs';

const jobTypesController = {
  getAllJobTypes: async (req, res) => {
    try {
      const jobTypes = await JobTypes.find();
      res.json(jobTypes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  },

  createJobType: async (req, res) => {
    try {
      const newJobType = new JobTypes(req.body);
      await newJobType.save();
      res.status(201).json(newJobType);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  },

  // Implement other controller functions for job types CRUD operations similarly
};

export default jobTypesController;
