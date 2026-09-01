import { Student } from "../models/studentModel.js";
import { AppError } from '../errors/AppError.js';


// POST /student
export const createStudent = async (studentData) => {
  const { id, name, age, class: studentClass } = studentData;

  const newStudent = await Student.create({
    id,
    name,
    age,
    class: studentClass
  });

  console.log(newStudent);

  return newStudent;
};


// PATCH /student/:id
export const updateStudent = async (studentID, studentDetails) => {
  const studentId = Number(studentID);

  const { name, age } = studentDetails;

  if(
    (name !== undefined && typeof name !== 'string') ||
    (age !== undefined && typeof age !== 'number')
  ) {
    throw new AppError('Invalid data', 400)
  };

  const updateData = {
    ...(name !== undefined && { name }),
    ...(age !== undefined && { age })
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
    return await Student.find().populate('class');
  }

  const filteredStudent = await Student.findOne({id: Number(studentId)}).populate('class');


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