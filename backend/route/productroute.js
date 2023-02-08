import express from "express";
import GetProducts from "../controller/productcontroller.js";
const Router = express.Router();

Router.get("/products", GetProducts);
export default Router;
