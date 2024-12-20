// import express from 'express';
// import { createNote, getNotes } from '../controllers/noteController.js';
// import { validateNote } from '../middleware/validateNote.js';

// const router = express.Router();

// router.post('/', validateNote, createNote);
// router.get('/', getNotes);

// export default router;


import express from "express";
import Note from "../models/Note.js";

const router = express.Router();

// Create a new note
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newNote = new Note({
      name,
      email,
      message,
    });
    const savedNote = await newNote.save();
    res.json(savedNote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;