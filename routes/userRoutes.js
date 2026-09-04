import express from 'express';
import { validateUser } from '../middleware/validation.js';
import { createUserController } from '../controllers/userController.js';

const router = express.Router();


// ====================================
// POST
// ====================================
router.post('/', validateUser(), createUserController);


export default router;