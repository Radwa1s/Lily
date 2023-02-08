import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Router from "./route/productroute.js";

const app = express();
app.listen(3001, () => console.log("Server started"));
mongoose.connect(
  "mongodb+srv://radwa:nPPZ8w0xmEst11RB@cluster0.cabgfom.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const data = {
  name: "Lily Cup",
  price: 20,
  description: "Reusable menstrual cup",
  URL: "LilyCup.jpg",
};
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));
app.use(cors());
app.use(express.json());
app.use(Router);
