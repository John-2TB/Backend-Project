import express from 'express';
import {
  createTeacherController,
  getTeacherController,
  updateTeacherController,
  deleteTeacherController
} from '../controllers/teacherController.js';


const router = express.Router();

// ====================================
// POST
// ====================================
router.post('/', createTeacherController);

// ====================================
// GET
// ====================================
router.get('/:teacherId', getTeacherController);
router.get('/', getTeacherController);

// ====================================
// PATCH
// ====================================
router.patch('/:teacherId', updateTeacherController);

// ====================================
// DELETE
// ====================================
router.delete('/:teacherId', deleteTeacherController);




export default router;