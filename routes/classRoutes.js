import express from 'express';
import { createClassController, deleteClassController, getStudentByClassController } from '../controllers/classController.js';

const router = express.Router();

// POST /class
router.post('/', createClassController);

// GET students by /class
router.get('/:classId/students', getStudentByClassController);

// DELETE class by ID
router.delete('/:classId', deleteClassController)

export default router;