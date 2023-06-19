import mongoose, { InferSchemaType } from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    post: { type: String, required: true },
    likes: { type: [mongoose.Schema.Types.ObjectId], defaultValue: [] },
    comments: { type: [String], deaultValue: [] },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

PostSchema.set("toJSON", {
  transform: (doc, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj._id;
    delete returnedObj.__v;
  },
});

type Post = InferSchemaType<typeof PostSchema>;

const Post = mongoose.model("Post", PostSchema);

export default Post;
