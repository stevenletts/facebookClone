import User from "../models/User";
import { Request, Response } from "express";

const getOne = async (request: Request, response: Response) => {
  const user = await User.findById(request.params.id).populate("posts", {
    post: 1,
    comments: 1,
    likes: 1,
  });
  response.status(200).json(user);
};

export default { getOne };
