import mongoose from "mongoose";
export const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL!);
    console.log("connecting to mongo...");
  } catch (error) {
    console.log(error);
  }
};
