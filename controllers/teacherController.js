import {
  createTeacher,
  getTeacher,
  updateTeacher,
  deleteTeacher
} from "../services/teacherService.js";
import { asyncHandler } from "../utils/asyncHandler.js";


// Create Teacher
export const createTeacherController = asyncHandler(
  async (req, res) => {
    const newTeacher = await createTeacher(req.body);

    res.status(201).json({
      message: 'Teacher created successfully',
      data: newTeacher
    })
  }
);



// PATCH Teacher
export const updateTeacherController = asyncHandler(
  async (req, res) => {
    const updatedTeacher = await updateTeacher(req.params.teacherId, req.body);

    res.status(200).json({
      message: 'Teacher updated successfully',
      data: updatedTeacher
    })
  }
);



// get Teacher
export const getTeacherController = asyncHandler(
  async (req, res) => {
    const fetchedTeacher = await getTeacher(req.params.teacherId);

    res.status(200).json({
      message: 'Teacher found',
      data: fetchedTeacher
    })
  }
);



// DELETE Teacher
export const deleteTeacherController = asyncHandler(
  async (req, res) => {
    const deletedTeacher = await deleteTeacher(req.params.teacherId);

    res.status(200).json({
      message: 'Teacher deleted successfully',
      data: deletedTeacher
    })
  }
);