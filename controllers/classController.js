import { createClass } from "../services/classService.js";
import { asyncHandler } from "../utils/asyncHandler.js";


// POST /class 
export const createClassController = asyncHandler(
  async (req, res) => {
    const newClass = await createClass(req.body);

    res.status(201).json({
      message: 'Class successfully created',
      data: newClass
    });
  }
);