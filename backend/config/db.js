import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Load the MongoDB URI from environment variables or use a default value
    const dbURI = process.env.MONGODB_URI;

    await mongoose.connect(dbURI);
    console.log("MongoDB connected successfully");

  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // exit the process with failure
  }
};