import express from 'express';
import { validateUser } from '../middleware/validation.js';
import { authValidation, authorizeRoles } from '../middleware/authMiddleware.js';
import { changePasswordController, createUserController, userLoginController } from '../controllers/userController.js';

const router = express.Router();


// ====================================
// POST
// ====================================
router.post('/', authValidation(), authorizeRoles('admin'), validateUser(), createUserController);

// ====================================
// POST for login
// ====================================
router.post('/login', userLoginController);


// ====================================
// POST for changing password
// ====================================
router.post('/changePassword', authValidation(), changePasswordController);

export default router;