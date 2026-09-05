import express from 'express';
import { validatesStudent } from '../middleware/validation.js';
import { authValidation, authorizeRoles } from '../middleware/authMiddleware.js';
import { 
  createStudentController, 
  deleteStudentController, 
  getStudentController, 
  updateStudentController
} from '../controllers/studentController.js';

const router = express.Router();
// ====================================
// GET
// ====================================
router.get('/:id', authValidation(), authorizeRoles('admin', 'teacher'), getStudentController);
router.get('/', authValidation(), authorizeRoles('admin', 'teacher'), getStudentController);




// ====================================
// POST
// ====================================

// Create a new student
router.post('/', validatesStudent({ requireAll: true }), authValidation(), authorizeRoles('admin'), createStudentController);


// ====================================
// PATCH
// ====================================
router.patch('/:id', validatesStudent({requireAll: false}), authValidation(), authorizeRoles('admin', 'teacher'), updateStudentController);


// ====================================
// DELETE
// ====================================
router.delete('/', authValidation(), authorizeRoles('admin'), deleteStudentController);

export default router;