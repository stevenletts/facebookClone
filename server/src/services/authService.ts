import bcrypt from "bcrypt";
import User from "../models/User";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

// register new user
const signUp = async (request: Request, response: Response) => {
  const { fullName, email, password, birthday } = request.body;

  if (password.length < 3) {
    return response
      .status(400)
      .json({ error: "password is shorter than minimum allowed" });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    fullName,
    email,
    birthday,
    passwordHash,
  });

  const newUser = await user.save();

  const token = jwt.sign({ id: newUser.id }, process.env.JWT as string);

  response.status(201).json({
    token,
    id: newUser.id,
    fullName: newUser.fullName,
    friends: newUser.friends,
    profileDescription: newUser.profileDescription,
    bannerPicture: newUser.bannerPicture,
    profilePicture: newUser.profilePicture,
  });
};

// sign in User
const signIn = async (request: Request, response: Response) => {
  const { email, password } = request.body;
  const user = await User.findOne({ email });

  const verifyPassword =
    user === null ? false : await bcrypt.compare(password, user.passwordHash);

  if (!(user && verifyPassword)) {
    return response.status(401).json({
      error: "invalid email or password",
    });
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT as string);

  response.status(200).send({
    token,
    id: user.id,
    fullName: user.fullName,
    friends: user.friends,
    profileDescription: user.profileDescription,
    bannerPicture: user.bannerPicture,
    profilePicture: user.profilePicture,
  });
};

export default { signUp, signIn };
