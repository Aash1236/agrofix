import mongoose from "mongoose";

const dbConnection = async () => {
  mongoose.connection.on("connected", () => {
    console.log("MongoDB connected");
  });
  await mongoose.connect(`${process.env.MONGODB_URI}/agrofix`);
};

export default dbConnection;
