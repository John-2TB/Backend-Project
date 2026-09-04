import { asyncHandler } from "../utils/asyncHandler.js";
import { createUser, loginUser } from "../services/userService.js";

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


// Login user
export const userLoginController = asyncHandler(
  async (req, res) => {
    const existingUser = await loginUser(req.body);

    res.status(200).json({
      message: 'User login successfull',
      data: existingUser
    })
  }
);