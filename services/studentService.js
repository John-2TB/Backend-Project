import { Student } from "../models/studentModel.js";
import { AppError } from '../errors/AppError.js';


// POST /student
export const createStudent = async (studentData) => {
  const { id, name, age, class: studentClass, subjects } = studentData;

  const newStudent = await Student.create({
    id,
    name,
    age,
    class: studentClass,
    subjects
  });

  console.log(newStudent);

  return newStudent;
};


// PATCH /student/:id
export const updateStudent = async (studentID, studentDetails) => {
  const studentId = Number(studentID);

  const { name, age, class: studentClass, subjects } = studentDetails;

  if(
    (name !== undefined && typeof name !== 'string') ||
    (age !== undefined && typeof age !== 'number') ||
    (studentClass !== undefined && typeof studentClass !== 'string') ||
    (subjects !== undefined && !Array.isArray(subjects))
  ) {
    throw new AppError('Invalid data', 400)
  };

  // Checks if subjects array contains only strings
  if (subjects !== undefined && subjects.some(subject => typeof subject !== 'string')) {

    return res.status(400).json({
      message: 'Invalid student subjects data'
    });
  }

  const updateData = {
    ...(name !== undefined && { name }),
    ...(age !== undefined && { age }),
    ...(studentClass !== undefined && { class: studentClass }),
    ...(subjects !== undefined && { subjects })
  };

  const updatedStudent = await Student.findOneAndUpdate(
    { id: studentId },
    updateData,
    {new: true}
  );

  if (!updatedStudent) {
    throw new AppError('Student not found', 404);
  } 

  return updatedStudent;
};


// GET /students
export const getStudent = async (id) => {
  const studentId = id;

  if (studentId === undefined) {
    return await Student.find().populate(['class', 'subjects']);
  }

  const filteredStudent = await Student.findOne({id: Number(studentId)}).populate(['class', 'subjects']);


  if (!filteredStudent) {
    throw new AppError('Student not found', 404);
  }

  return filteredStudent;
};



// DELETE /student
export const deleteStudent = async (studentId) => {
  const id = Number(studentId);

  const deletedStudent = await Student.findOneAndDelete({id: id});
  
  if (!deletedStudent) {
    throw new AppError('Student not found', 404)
  };

  return deletedStudent;
};