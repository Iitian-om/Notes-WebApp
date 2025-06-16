import mongoose from "mongoose"; // Import mongoose for MongoDB connection

export const connectDB = async () => {
  try {
    // Load the MongoDB URI from environment variables or use a default value
    const dbURI = process.env.MONGODB_URI;

    await mongoose.connect(dbURI); // Connect to MongoDB using the URI
    console.log("MongoDB DataBase connection successful!"); // Log success message if connection is successful

  } catch (error) {
    console.error("MongoDB connection failed due to error:", error);
    process.exit(1); // exit the process with failure. This prevents your server from running in a broken state if it can’t connect to the database.
  }
};