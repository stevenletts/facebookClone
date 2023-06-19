import Post from "../models/Post";
import User from "../models/User";
import { Request, Response } from "express";

const post = async (request: Request, response: Response) => {
  const { post, id } = request.body;
  const newPost = await new Post({ post, user: id }).save();

  const user = await User.findById(id);

  if (!user) {
    response.status(400);
    return;
  }

  user.posts = user.posts.concat(newPost.id);
  await user.save();

  response.status(200).json(newPost);
};

export default { post };
