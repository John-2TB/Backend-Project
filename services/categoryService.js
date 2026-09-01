import { Category } from '../models/categoryModel.js';
import { AppError } from '../errors/AppError.js';

export const createCategory = async (categoryName) => {
  const { name } = categoryName;

  if (typeof name !== 'string' || name.trim() === '') {
    throw new AppError('Invalid data type', 400);
  }

  const newCategory = await Category.create({
    name
  });

  return newCategory;
}