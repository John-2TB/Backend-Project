import express from 'express';
import { createClassController, getStudentByClassController } from '../controllers/classController.js';

const router = express.Router();

// POST /class
router.post('/', createClassController);

// GET students by /class
router.get('/:classId/students', getStudentByClassController);

export default router;