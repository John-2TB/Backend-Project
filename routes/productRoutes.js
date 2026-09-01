import express from 'express';
import { createProductController, deleteProductController, getProductsController, updateProductController } from '../controllers/productController.js';

const router = express.Router();


// ==============
// GET
// ==============

router.get('/:id', getProductsController);
router.get('/', getProductsController);


// ==============
// POST
// ==============

router.post('/', createProductController);


// ==============
// PATCH
// ==============
router.patch('/:id', updateProductController);


// ================
// Delete
// ================

router.delete('/:id', deleteProductController);



export default router;