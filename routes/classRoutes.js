import express from 'express';
import { createClassController } from '../controllers/classController.js';

const router = express.Router();

// POST /category
router.post('/', createClassController);

export default router;