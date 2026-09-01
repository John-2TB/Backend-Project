import { Product } from "../models/productModel.js";
import { AppError } from '../errors/AppError.js';

// GET /products
export const getProducts = async (id) => {
  const productId = id
  
  if (productId === undefined) {
    return await Product.find()
  }

  const filteredProduct = await Product.findById(productId);

  if (filteredProduct) {
    return filteredProduct

  } else {
    throw new AppError('Product not found', 404)
  }
};


// POST /products
export const createProduct = async (productDetails) => {
  const { name, price } = productDetails;

  if(
    typeof name !== 'string' ||
    typeof price !== 'number'
  ) {
    throw new AppError('Invalid data', 400)
  }

  const newProduct = await Product.create({
    name,
    price
  });

  console.log(newProduct);

  return newProduct;
};


// PATCH /products
export const updateProduct = async (Id, productDetails) => {
  const productId = Id;
  const { name, price } = productDetails;

  // Checks type of data
  if (
    name !== undefined && typeof name !== 'string' ||
    price !== undefined && typeof price !== 'number'
  ) {
    throw new AppError('Invalid data', 400);
  };

  const updateData = {
    ...(name !== undefined && { name }),
    ...(price !== undefined && { price })
  }

  // Update product with index (productIndex)
  const updatedProduct = await Product.findByIdAndUpdate(
    productId,
    updateData,
    {new: true}
  );

  if(!updatedProduct) {
    throw new AppError('Product not found', 404);
  }

  console.log(updatedProduct);

  return updatedProduct;
};


// DELETE /products
export const deleteProduct = async (productId) => {
  const id = productId;

  if (id === undefined) {
    throw new AppError('Product id is required', 400);
  }

  const deletedProduct = await Product.findByIdAndDelete(id);

  if(!deletedProduct) {
    throw new AppError('Product not found', 404);
  }

  console.log(deletedProduct);

  return deletedProduct;
};