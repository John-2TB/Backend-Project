import express from 'express';
import { createSubjectController, getStudentsBySubjectIdController } from "../controllers/subjectController.js";

const router = express.Router();

// ====================================
// POST
// ====================================
router.post('/', createSubjectController);

// ====================================
// GET
// ====================================
router.get('/:subjectId/students', getStudentsBySubjectIdController);

export default router;