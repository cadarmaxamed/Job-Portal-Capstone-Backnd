import mongoose from 'mongoose';

// Defined jobPostings schema
const jobPostingsSchema = new mongoose.Schema({
    //added list of properties required
  _id: {
    type: String,
    required: true,
  },
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
  skillsRequired: {
    type: [String],
    required: true,
    validate: {
      validator: function(val) {
        return val.length === 5;
      },
      message: props => `${props.value} is not a valid array of length 5!`
    }
  },
  experienceLevel: {
    type: String,
    required: true,
  },
});
//exporting schema
export default mongoose.model('JobPostings', jobPostingsSchema);

