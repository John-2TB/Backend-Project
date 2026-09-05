import express from 'express';
import {
  createTeacherController,
  getTeacherController,
  updateTeacherController,
  deleteTeacherController
} from '../controllers/teacherController.js';
import { authValidation, authorizeRoles } from '../middleware/authMiddleware.js';


const router = express.Router();

// ====================================
// POST
// ====================================
router.post('/', authValidation(), authorizeRoles('admin'), createTeacherController);

// ====================================
// GET
// ====================================
router.get('/:teacherId', authValidation(), authorizeRoles('admin'), getTeacherController);
router.get('/', authValidation(), authorizeRoles('admin'), getTeacherController);

// ====================================
// PATCH
// ====================================
router.patch('/:teacherId', authValidation(), authorizeRoles('admin'), updateTeacherController);

// ====================================
// DELETE
// ====================================
router.delete('/:teacherId', authValidation(), authorizeRoles('admin'), deleteTeacherController);

export default router;