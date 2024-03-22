import mongoose from 'mongoose';

// Defined jobTypes schema
const jobTypesSchema = new mongoose.Schema({
  position: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  skills_required: {
    type: [String],
    required: true,
  },
  education_level: {
    type: String,
    required: true,
  },
});
//export schema
export default mongoose.model('JobTypes', jobTypesSchema);
