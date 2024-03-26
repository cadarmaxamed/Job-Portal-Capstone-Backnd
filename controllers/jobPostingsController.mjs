import JobPostings from '../models/jobPostings.mjs';

const jobPostingsController = {
  getAllJobPostings: async (req, res) => {
    try {
      const jobPostings = await JobPostings.find();
      res.json(jobPostings);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  },

  createJobPosting: async (req, res) => {
    try {
      const newJobPosting = new JobPostings(req.body);
      await newJobPosting.save();
      res.status(201).json(newJobPosting);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  },

  // Implement other controller functions for job postings CRUD operations similarly
};

export default jobPostingsController;
