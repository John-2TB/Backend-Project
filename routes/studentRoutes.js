import express from 'express';
import { validatesStudent } from '../middleware/validation.js';
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
router.get('/:id', getStudentController);
router.get('/', getStudentController);




// ====================================
// POST
// ====================================

// Create a new student
router.post('/', validatesStudent({ requireAll: true }), createStudentController);


// ====================================
// PATCH
// ====================================
router.patch('/:id', validatesStudent({requireAll: false}), updateStudentController);


// ====================================
// DELETE
// ====================================
router.delete('/', deleteStudentController);

export default router;