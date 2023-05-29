import Post from "@/models/post.model";
import { connectToDB } from "@/utils/db";

export const POST = async (req: Request) => {
  try {
    await connectToDB();
    const data = await req.json();

    const newPost = new Post(data);
    await newPost.save();
    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (error) {
    return new Response("Failed to post a meme", { status: 500 });
  }
};

export const GET = async () => {
  try {
    await connectToDB();
    const posts = await Post.find().sort({ createdAt: -1 });
    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch the memes", { status: 500 });
  }
};
