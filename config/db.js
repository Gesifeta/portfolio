import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    
    mongoose.connect(mongoURI);
       
      console.log(`Database connected`);
    
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export default connectDB;
