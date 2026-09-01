import { Class } from '../models/classModel.js';
import { AppError } from '../errors/AppError.js';

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