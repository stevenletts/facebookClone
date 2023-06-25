import Post from "../models/Post";
import User from "../models/User";
import Comment from "../models/Comment";
import { Request, Response } from "express";

const getOne = async (request: Request, response: Response) => {
  const user = await User.findById(request.params.id);
  response.status(200).json(user);
};

const addFriend = async (request: Request, response: Response) => {
  const friendId = request.params.id;
  const { id } = request.body;
  const updatedFriend = await User.findByIdAndUpdate(
    friendId,
    {
      $push: { friends: id },
    },
    { returnDocument: "after", select: { id: 1 } }
  );
  const updatedUser = await User.findByIdAndUpdate(
    id,
    {
      $push: { friends: friendId },
    },
    { returnDocument: "after", select: { id: 1 } }
  );
  if (updatedFriend !== null && updatedUser !== null) {
    response.status(200).json(updatedFriend.id);
    return;
  }

  response.status(500);
};

const removeFriend = async (request: Request, response: Response) => {
  const friendId = request.params.id;
  const { id } = request.body;
  const updatedFriend = await User.findByIdAndUpdate(
    friendId,
    {
      $pull: { friends: id },
    },
    { returnDocument: "after", select: { id: 1 } }
  );
  const updatedUser = await User.findByIdAndUpdate(
    id,
    {
      $pull: { friends: friendId },
    },
    { returnDocument: "after", select: { id: 1 } }
  );
  if (updatedFriend !== null && updatedUser !== null) {
    response.status(200).json(updatedFriend.id);
    return;
  }

  response.status(500);
};

const deleteAccount = async (request: Request, response: Response) => {
  const id = request.params.id;
  await User.findByIdAndDelete(id);
  await Post.deleteMany({ user: id });
  await Comment.deleteMany({ user: id });
  response.status(200).json("user, posts, and commens deleted");
};

const updateAccount = async (request: Request, response: Response) => {
  const id = request.params.id;
  const updatedUser = await User.findByIdAndUpdate(
    id,
    {
      $set: request.body,
    },
    {
      new: true,
    }
  );
  response.status(200).json(updatedUser);
};

export default {
  getOne,
  addFriend,
  removeFriend,
  deleteAccount,
  updateAccount,
};
