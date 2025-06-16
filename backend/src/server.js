// This file sets up the Express server and connects to MongoDB.

// Import necessary modules
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { connectDB } from "../config/db.js";
import notesRoutes from "./routes/notesRoutes.js";
import rateLimiter from "./middleware/rateLimiter.js";

// Load environment variables from .env file
dotenv.config();

// Initialize Express application
const app = express();
const PORT = process.env.PORT

// Home Page Route
app.get('/', (req, res) => {
    res.status(200).send("Welcome to the Notes API!"); // Simple welcome message
});

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Rate Limiting Middleware (protects all routes)
app.use(rateLimiter);

// Notes API routes
app.use("/api/notes", notesRoutes);

// Connect to MongoDB and start the server only after successful connection
connectDB()
    .then(() => {
        // Starting the server if the DB connection is successful
        app.listen(PORT, () => {
            // Log the server start message with the port number
            console.log("Development is Server running on port:", PORT);
        });
    })
    .catch((error) => {
        // Log the error if the DB connection fails
        console.error("Failed to connect to MongoDB:", error);
    });