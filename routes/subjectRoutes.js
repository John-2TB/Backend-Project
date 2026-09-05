import express from 'express';
import { createSubjectController, deleteSubjectController, getStudentsBySubjectIdController } from "../controllers/subjectController.js";
import { authValidation, authorizeRoles } from '../middleware/authMiddleware.js';

const router = express.Router();

// ====================================
// POST
// ====================================
router.post('/', authValidation(), authorizeRoles('admin'), createSubjectController);

// ====================================
// GET
// ====================================
router.get('/:subjectId/students', authValidation(), authorizeRoles('admin', 'teacher'), getStudentsBySubjectIdController);


// ====================================
// DELETE
// ====================================
router.delete('/:subjectId', authValidation(), authorizeRoles('admin'), deleteSubjectController)

export default router;