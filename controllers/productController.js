import { createProduct, deleteProduct, getProducts, updateProduct } from "../services/productService.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// GET /products
export const getProductsController = asyncHandler(
  async (req, res) => {
    const product = await getProducts(req.params.id);

    res.status(200).json({
      message: 'Products found',
      data: product
    });
  }
);


// POST /products
export const createProductController = asyncHandler(
  async (req, res) => {
    const newProduct = await createProduct(req.body);

    res.status(201).json({
      message: 'Product successfully created',
      data: newProduct
    });
  }
);



// PATCH /products
export const updateProductController = asyncHandler(
  async (req, res) => {
    const updatedProduct = await updateProduct(req.params.id, req.body);

    res.status(200).json({
      message: 'Updated products successfully',
      data: updatedProduct
    });
  }
);

// DELETE /products
export const deleteProductController = asyncHandler(
  async (req, res) => {
    const deletedProduct = await deleteProduct(req.params.id);

    res.status(200).json({
      message: 'Product was successfully deleted',
      data: deletedProduct
    })
  }
)
