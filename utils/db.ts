import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    return;
  }

  try {    
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI!, {
      dbName: "meme-share",
      
    });
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
