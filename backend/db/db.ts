import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config();
export const connectDB = async (): Promise<void> => {
    try {
        const mongoUrl = process.env.MONGO_URL;
         if (!mongoUrl) {
            throw new Error("MONGO_URL environment variable is not defined. Please create a .env file with your MongoDB connection string.");
        }
        const connect = await mongoose.connect(mongoUrl);
        if (connect){
            console.log("connected to MongoDB successfully")
        }
    } catch (error) {
        console.log('Check your network connection');
        process.exit(1);
    }
}
