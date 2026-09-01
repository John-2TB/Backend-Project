import { asyncHandler } from "../utils/asyncHandler.js";
import { createCategory } from "../services/categoryService.js";


// POST /category
export const createCategoryController = asyncHandler(
  async (req, res) => {
    const newCategory = await createCategory(req.body);

    res.status(201).json({
      message: 'Category successfully created',
      data: newCategory
    });
  }
);