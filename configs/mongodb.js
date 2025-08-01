import mongoose from "mongoose";

// Connect to the mongodb Database

const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("Database Connected"));

  await mongoose.connect(`${process.env.MONGODB_URI}/skillzen`);
};
export default connectDB;
