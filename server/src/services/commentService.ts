import Post from "../models/Post";
import User from "../models/User";
import Comment from "../models/Comment";
import { Request, Response } from "express";

const newComment = async (request: Request, response: Response) => {
  const { comment, userId } = request.body;
  const postId = request.params.id;
  let newComment = await new Comment({
    comment,
    user: userId,
    post: postId,
  }).save();
  await newComment.populate("user", { fullName: 1, id: 1 });
  const post = await Post.findByIdAndUpdate(
    postId,
    {
      $push: { comments: newComment.id },
    },
    { returnDocument: "after" }
  );

  response.status(200).json(newComment);
};

const addLike = async (request: Request, response: Response) => {
  const { userId, commentId } = request.body;
  const updatedComment = await Comment.findByIdAndUpdate(
    commentId,
    {
      $push: { likes: userId },
    },
    { returnDocument: "after" }
  );

  response.status(200).json(updatedComment);
  return;
};

const removeLike = async (request: Request, response: Response) => {
  const { userId, commentId } = request.body;
  const updatedComment = await Comment.findByIdAndUpdate(
    commentId,
    {
      $pull: { likes: userId },
    },
    { returnDocument: "after", select: { likes: 1, id: 1 } }
  );
  response.status(200).json(updatedComment);

  return;
};

export default {
  newComment,
  addLike,
  removeLike,
};
