import Post from "../models/Post";
import User from "../models/User";
import { Request, Response } from "express";

const newPost = async (request: Request, response: Response) => {
  const { post, id } = request.body;
  let newPost = await new Post({ post, user: id }).save();
  await newPost.populate("user", { fullName: 1, id: 1 });
  response.status(200).json(newPost);
};

const getNewsFeedPosts = async (request: Request, response: Response) => {
  const id = request.params.id;

  const user = await User.findOne({ _id: id }).select({ friends: 1, id: 1 });

  if (!user) {
    response.status(500);
    return;
  }

  if (user.friends.length > 0) {
    let friends = user.friends;
    friends.push(user.id);

    const newsFeed = await Post.find({ user: { $in: friends } })
      .populate("user", { fullName: 1, id: 1 })
      .sort({
        createdAt: -1,
      })
      .limit(30);
    response.status(200).json(newsFeed);
    return;
  }

  const newsFeed = await Post.find({})
    .populate("user", { fullName: 1, id: 1 })
    .sort({
      createdAt: -1,
    })
    .limit(30);
  response.status(200).json(newsFeed);
  return;
};

const getProfilePosts = async (request: Request, response: Response) => {
  const posts = await Post.find({ user: request.params.id })
    .populate("user", {
      fullName: 1,
      id: 1,
    })
    .sort({
      createdAt: -1,
    });
  if (!posts) {
    response.status(500);
    throw new Error("profile posts not found");
  }
  response.status(200).json(posts);
};

const likePost = async (request: Request, response: Response) => {
  const postId = request.params.id;
  const { userId } = request.body;
  const updatedPost = await Post.findByIdAndUpdate(
    postId,
    {
      $push: { likes: userId },
    },
    { returnDocument: "after", select: { likes: 1, id: 1 } }
  );
  response.status(200).json(updatedPost);
};

const removeLike = async (request: Request, response: Response) => {
  const postId = request.params.id;
  const { userId } = request.body;
  const updatedPost = await Post.findByIdAndUpdate(
    postId,
    {
      $pull: { likes: userId },
    },
    { returnDocument: "after", select: { likes: 1, id: 1 } }
  );
  response.status(200).json(updatedPost);
};

export default {
  newPost,
  getProfilePosts,
  likePost,
  removeLike,
  getNewsFeedPosts,
};
