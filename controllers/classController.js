import { createClass, deleteClass, getStudentByClass } from "../services/classService.js";
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

// GET students in /class
export const getStudentByClassController = asyncHandler(
  async (req, res) => {
    const students = await getStudentByClass(req.params.classId);

    res.status(200).json({
      message: 'Students found',
      data: students
    })
  }
);


// DELETE class by ID
export const deleteClassController = asyncHandler(
  async (req, res) => {
    const deletedClass = await deleteClass(req.params.classId)

    res.status(200).json({     
      message: 'Class was successfully deleted',
      data: deletedClass   
    });
  }
);