import express from 'express';
import { createSubjectController, deleteSubjectController, getStudentsBySubjectIdController } from "../controllers/subjectController.js";

const router = express.Router();

// ====================================
// POST
// ====================================
router.post('/', createSubjectController);

// ====================================
// GET
// ====================================
router.get('/:subjectId/students', getStudentsBySubjectIdController);


// ====================================
// DELETE
// ====================================
router.delete('/:subjectId', deleteSubjectController)

export default router;