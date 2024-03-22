import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.MONGO_URI || '';
const ConnectDB = async() =>{
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true 
        }) 
        console.log("MongoDB Connected")

    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}
export default ConnectDB;