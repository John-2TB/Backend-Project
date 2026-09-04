import { asyncHandler } from "../utils/asyncHandler.js";
import { createUser } from "../services/userService.js";

// Create new user
export const createUserController = asyncHandler (
  async (req, res) => {
    const newUser = await createUser(req.body);

    res.status(201).json({
      message: 'User created successfully',
      data: newUser
    });
  }
);