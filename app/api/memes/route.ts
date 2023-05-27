import Post from "@/models/post.model";
import { connectToDB } from "@/utils/db";

export const POST = async (req: Request) => {
  try {
    await connectToDB();
    const newPost = new Post(req.body);
    await newPost.save();
    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to post a meme", { status: 500 });
  }
};
