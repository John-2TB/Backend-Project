import { Subject } from "../models/subjectModel.js";
import { Student } from "../models/studentModel.js";
import { AppError } from '../errors/AppError.js';

// Create a new subject
export const createSubject = async (subjectData) => {
  const { name } = subjectData

  if (name === undefined || 
    typeof name !== 'string' ||
    name.trim().length === 0) {
    throw new AppError('Invalid data', 400);
  }

  const newSubject = await Subject.create({
    name
  });

  return newSubject;
};



// Get students by subjectID
export const getstudentsBySubjectId = async (subjectId) => {
  if (typeof subjectId !== 'string' || subjectId.length === 0) {
    throw new AppError('Invalid subject ID', 400)
  }

  const students = await Student.find({ subjects: subjectId }).populate(['class', 'subjects']);

  if (students.length === 0) {
    throw new AppError('Students not found', 404)
  }

  return students;
}