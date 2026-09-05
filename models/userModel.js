import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  registrationNumber: {
    type: String,

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
    required: function () {
      return this.role === 'student'
    }
  },

  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: function () {
      return this.role === 'teacher'
    }
  },

  mustChangePassword: {
    type: Boolean,
    default: false
  }
});


userSchema.index(
  { registrationNumber: 1 },
  {
    unique: true,
    partialFilterExpression: {
      registrationNumber: { $exists: true }
    }
  }
);

userSchema.index(
  { student: 1 },
  {
    unique: true,
    partialFilterExpression: {
      student: { $type: 'objectId' }
    }
  }
);

userSchema.index(
  { teacher: 1 },
  {
    unique: true,
    partialFilterExpression: {
      teacher: { $type: 'objectId' }
    }
  }
);

export const User = mongoose.model('User', userSchema);