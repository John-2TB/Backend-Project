import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  
  price: {
    type: String,
    required: true,
    min: 0
  }
});


export const Product = mongoose.model('Product', productSchema);