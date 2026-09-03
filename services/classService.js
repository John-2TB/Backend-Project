import { Class } from '../models/classModel.js';
import { Student } from '../models/studentModel.js';
import { AppError } from '../errors/AppError.js';

// Creates new classes for student
export const createClass = async (className) => {
  const { name } = className;

  if (typeof name !== 'string' ||
    name.trim() === ''
  ) {
    throw new AppError('Invalid data type', 400);
  }

  const newClass = await Class.create({
    name
  });

  return newClass;
};

// Get students by their class
export const getStudentByClass = async (classId) => {
  if (typeof classId !== 'string' ||
    classId.trim() === '' ||
    !mongoose.isValidObjectId(classId)
  ) {
    throw new AppError('Invalid data type', 400);
  }

  const students = await Student.find({ class: classId});

  if (students.length === 0) {
    throw new AppError('Student not found', 404);
  }

  return students;
};