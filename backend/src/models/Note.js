// Import mongoose library
import mongoose from "mongoose";

// Define the schema for Note documents
const noteSchema = new mongoose.Schema(
    {
        // Define the fields for the Note schema
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    {
        // Mongoose will Automatically manage createdAt and updatedAt fields
        timestamps: true,
    }
);

// Create the Note model from the schema
const Note = mongoose.model("Note", noteSchema);

// Export the Note model for use in other files
export default Note;