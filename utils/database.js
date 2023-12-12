import mongoose from "mongoose";

let isConnected = false;
export const connectToDB = async () => {
  mongoose.set("strictQuery");

  if (isConnected) {
    console.log("MongoDb is already connected");
  } else {
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        dbName: "share_prompt",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      isConnected = true;

      console.log("MongoDB Connected");
    } catch (error) {
      console.log(error);
    }
  }
};
