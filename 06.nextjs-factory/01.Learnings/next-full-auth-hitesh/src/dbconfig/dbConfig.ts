import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI! as string);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB is connected");
    });

    connection.on("error", () => {
      console.log("MongoDB is not connected");
      process.exit();
    });
  } catch (error) {
    console.log("something went wrong");
    console.log(error);
  }
}
