import express from "express"; // Import express for request and response handling
import Notes from "../models/Note.js"; // Adjust the import based on your project structure

export async function getAllNotes(_req, res) {
    // get all notes
    try {
        const notes = await Notes.find().sort( { createdAt: -1 } ); // Assuming Notes is a Mongoose model and -1 sorts by creation date in descending order (Newest note will appear first)
        res.status(200).json(notes);

    } catch (error) {
        console.error("Error fetching notes:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function getANoteById(req, res) {
    // get a note by ID
    try {
        const { id } = req.params; // Get the note ID from the request parameters
        const note = await Notes.findById(id); // Find the note by ID

        if (!note) {
            return res.status(404).json({ message: "Note of the entered ID does not exist." });
        }

        res.status(200).json(note);

    } catch (error) {
        console.error("Error fetching note by ID:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function createANote(req, res) {
    // post or create a note
    try {
        const { title, content } = req.body; // Assuming the request body contains title and content
        const newNote = new Notes({ title: title, content: content });
        
        const savedNote = await newNote.save();
        res.status(201).json(savedNote);

    } catch (error) {
        console.error("Error in createANote:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function updateNote(req, res) {
    // update a note
    try {
        const { id } = req.params; // Get the note ID from the request parameters
        const { title, content } = req.body; // Get the updated title and content from the request body

        const updatedNote = await Notes.findByIdAndUpdate(id,
            { title: title, content: content },
            { new: true } // Return the updated document
        );

        if (!updatedNote) {
            return res.status(404).json({ message: "Note of the entered ID is not found" });
        }

        res.status(200).json(updatedNote);

    } catch (error) {
        console.error("Error in updateNote:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function deleteNote(req, res) {
    // delete a note
    try {
        const { id } = req.params; // Get the note ID from the request parameters
        const { title, content } = req.body; // Get the updated title and content from the request body

        const deletedNote = await Notes.findByIdAndDelete(id); // If the note is found, it will be deleted and returned

        if (!deletedNote) {
            return res.status(404).json({ message: "Note of the entered ID is not found" }); // If the note is not found, return a 404 error
        }

        res.status(200).json({message: "Note deleted successfully. Here is that deleted note for one last view.", deletedNote}); // Return the deleted note and a success message

    } catch (error) {
        console.error("Error in deleteNote:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}