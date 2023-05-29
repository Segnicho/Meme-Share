import { Schema, model, models } from "mongoose";

const PostScema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  photo: {
    type: String,
    required: [true, "Image is required."],
  },
  tags: {
    type: Array<String>,
  },
});

const Post = models.Post || model("Post", PostScema);

export default Post;
