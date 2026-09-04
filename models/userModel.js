import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  registrationNumber: {
    type: String,
    unique: true,
    trim: true,
    required: function () {
      return this.role === 'student'
    },
  },

  email: {
    type: String,
    trim: true,
    required: function () {
      return this.role === 'teacher' || this.role === 'admin'
    }
  },

  password: {
    type: String,
    required: true,
    trim: true
  },

  role: {
    type: String,
    enum: ['student', 'teacher', 'admin'],
    required: true
  },

  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    unique: true,
    required: function () {
      return this.role === 'student'
    }
  },

  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    unique: true,
    required: function () {
      return this.role === 'teacher'
    }
  },
});

export const User = mongoose.model('User', userSchema);