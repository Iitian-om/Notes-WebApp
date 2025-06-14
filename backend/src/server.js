import express from "express";
import moongoose from "mongoose";
import notesRoutes from "../src/routes/notesRoutes.js";
import { connectDB } from "../config/db.js";
import dotenv from "dotenv";

// Loads environment variables from a .env file into process.env. This lets you use variables like process.env.PORT or process.env.MONGO_URI in your code.
dotenv.config();

// Initialize Express application
const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.status(200).send("Welcome to the Notes API!"); // Home route
});

// Middlewares
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies



app.use("/api/notes", notesRoutes); // Use the imported notes routes

// Connect to MongoDB and then start the server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("MongoDB DataBase connected successfully and Development Server running on port:", PORT);
    });
}).catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
});


// MongoDB connection string password:
// X35zv1kSIZG74YOB 