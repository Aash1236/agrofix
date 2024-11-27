import express from "express";
import cors from "cors";
import "dotenv/config";
import dbConnection from "./config/bdconnection.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";

//App config
const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(cors());
dbConnection();
connectCloudinary();

//api end points
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

const server = app.listen(port, () =>
  console.log("Server startes on PORT : " + port)
);
server.timeout = 300000;
