import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    console.log("Mongos URI: ", process.env.NEXT_PUBLIC_MONGO_URI);
    
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI!, {
      dbName: "meme-share",
      
    });
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
