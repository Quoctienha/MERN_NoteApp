import express from "express"
import { getAllNotes, createNote, updateNote, deleteNote, getNoteById } from "../controllers/notesController.js";

const rounter = express.Router();

rounter.get('/', getAllNotes);

rounter.get('/:id', getNoteById);

rounter.post('/', createNote);

rounter.put('/:id', updateNote);

rounter.delete('/:id', deleteNote);

export default rounter;