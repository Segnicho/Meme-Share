import { Schema, model, models } from "mongoose";
const PostSchema = new Schema(
  {
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
      type: [String],
    },
  },
  { timestamps: true }
);

const Post = models.Post || model("Post", PostSchema);

export default Post;
