import mongoose from 'mongoose';
import 'dotenv/config'

const URI = process.env.MONGODB_URI;

const connectDB = async () =>{
    try {
        await mongoose.connect(URI);
        console.log("connected");
    } catch (error) {
        console.error("connection failed");
    }
}   

export default connectDB;
