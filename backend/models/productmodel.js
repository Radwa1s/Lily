import mongoose from "mongoose";
const ProductSchema = mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  ImageURL: String,
});

export default mongoose.model("Product", ProductSchema);
