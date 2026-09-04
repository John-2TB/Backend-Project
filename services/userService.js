import bcrypt from 'bcrypt';
import { User } from "../models/userModel.js";
import { Teacher } from '../models/teacherModel.js';
import { AppError } from "../errors/AppError.js";
import { Student } from "../models/studentModel.js";


// Create user
export const createUser = async (userData) => {
  const {
    registrationNumber,
    email,
    password,
    role,
    student,
    teacher
  } = userData;

  // Checks if the student ID is existing
  if (role === 'student') {
    const existingStudent = await Student.findById(student);

    if (!existingStudent) {
      throw new AppError('Student not found', 404);
    }
  }

  if (role === 'teacher') {
    const existingTeacher = await Teacher.findById(teacher);

    if (!existingTeacher) {
      throw new AppError('Teacher not found', 404);
    }
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    registrationNumber,
    email,
    password: hashedPassword,
    role,
    student,
    teacher
  });

  return {
    registrationNumber,
    email,
    role,
    student,
    teacher
  };

};