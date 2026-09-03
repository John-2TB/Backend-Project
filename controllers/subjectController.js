import { createSubject, getstudentsBySubjectId } from "../services/subjectService.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// POST /subject
export const createSubjectController = asyncHandler(
  async (req, res) => {
    const newSubject = await createSubject(req.body);

    res.status(201).json({
      message: 'Created subject successfully',
      data: newSubject
    });
  }
);

// GET students by subjectID
export const getStudentsBySubjectIdController = asyncHandler(
  async (req, res) => {
    const students = await getstudentsBySubjectId(req.params.subjectId)

    res.status(200).json({
      message: 'Students found',
      data: students
    })
  }
);