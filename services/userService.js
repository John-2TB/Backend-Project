import { User } from "../models/userModel";
import { AppError } from "../errors/AppError";
import { Student } from "../models/studentModel";


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

  const newUser = await User.create(userData);

  return newUser;

}