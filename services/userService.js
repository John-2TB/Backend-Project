import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
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

  await User.create({
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


// LOGIN user
export const loginUser = async (loginData) => {
  const {
    registrationNumber,
    email,
    password,
    role
  } = loginData;

  if (
    (role === 'teacher' || role === 'admin') &&
    registrationNumber !== undefined
  ) {
    throw new AppError('Invalid credentials', 400);
  }

  const validRole = ['student', 'teacher', 'admin']

  if (!validRole.includes(role)) {
    throw new AppError('Invalid role', 400);
  }

  // For student user
  if (role === 'student') {
    const existingUser = await User.findOne({
      registrationNumber: registrationNumber,
      role: role
    });

    if (!existingUser) {
      throw new AppError('No user found', 404);
    }

    const correctPassword = await bcrypt.compare(password, existingUser.password);

    if (!correctPassword) {
      throw new AppError('Incorrect password', 400)
    }

    const token = jwt.sign(
      {
        userId: existingUser._id,
        role: existingUser.role
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h'
      }
    );

    return {
      registrationNumber,
      role,
      token
    };
  }

  // For teacher and admin user
  if (role === 'teacher' || role === 'admin') {
    const existingUser = await User.findOne({
      email: email,
      role: role
    });

    if (!existingUser) {
      throw new AppError('No user found', 404);
    }

    const correctPassword = await bcrypt.compare(password, existingUser.password);

    if (!correctPassword) {
      throw new AppError('Incorrect password', 400)
    }

    const token = jwt.sign(
      {
        userId: existingUser._id,
        role: existingUser.role
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h'
      }
    );

    return {
      email,
      role,
      token
    };
  }

};