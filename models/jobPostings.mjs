import mongoose from 'mongoose';

// Defined jobPostings schema
const jobPostingsSchema = new mongoose.Schema({
    //added list of properties required
  jobTitle: {
    type: String,
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  postedDate: {
    type: Date,
    required: true,
  },
  skillsRequired: [
    {
      type: String,
      required: true,
    }
  ],
  experienceLevel: {
    type: String,
    required: true,
  },
});
//exporting schema
export default mongoose.model('JobPostings', jobPostingsSchema);

