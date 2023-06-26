import mongoose, { InferSchemaType } from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    comment: { type: String, required: true },
    likes: { type: [mongoose.Schema.Types.ObjectId], defaultValue: [] },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
  },
  { timestamps: true }
);

CommentSchema.set("toJSON", {
  transform: (doc, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj._id;
    delete returnedObj.__v;
  },
});

type Comment = InferSchemaType<typeof CommentSchema>;

const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;
