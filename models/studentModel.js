import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },

  name: {
    type: String,
    required: true,
    trim: true
  },

  age: {
    type: Number,
    required: true,
    min: 1
  },

  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class'
  }
});

export const Student = mongoose.model('Student', studentSchema);