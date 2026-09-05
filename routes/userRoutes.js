import express from 'express';
import { validateUser } from '../middleware/validation.js';
import { authValidation, authorizeRoles } from '../middleware/authMiddleware.js';
import { createUserController, userLoginController } from '../controllers/userController.js';

const router = express.Router();


// ====================================
// POST
// ====================================
router.post('/', validateUser(), createUserController);

// ====================================
// POST for login
// ====================================
router.post('/login', userLoginController);


export default router;