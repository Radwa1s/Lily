import ProductSchema from "../models/productmodel.js";
const GetProducts = async (req, res) => {
  try {
    const product = await ProductSchema.find();
    console.log(product);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export default GetProducts;
