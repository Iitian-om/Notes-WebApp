import express from "express";
import { createANote, deleteNote, getAllNotes, updateNote, getANoteById } from "../controllers/notesController.js";

const router = express.Router();

// Routes for notes
router.get("/", getAllNotes);
router.post("/", createANote);
router.put("/:id", updateNote);
router.get("/:id", getANoteById);
router.delete("/:id", deleteNote);

export default router;