import express from 'express';
import { createCategoryController } from '../controllers/categoryController.js';

const router = express.Router();

// POST /category
router.post('/', createCategoryController);

export default router;