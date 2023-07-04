import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Request, Response } from "express";

dotenv.config();

interface JwtPayload {
  id: string;
}

export const authCheck = (
  request: Request,
  response: Response,
  next: Function
) => {
  const authorization = request.get("Authorization");
  if (authorization && authorization.startsWith("Bearer ")) {
    const authorizationReady = authorization.replace("Bearer ", "");

    // comes through
    console.log(authorizationReady);
    console.log(typeof authorizationReady);

    if (authorizationReady === "null") {
      return next();
    }

    const { id } = jwt.verify(
      authorizationReady,
      process.env.JWT!
    ) as JwtPayload;
    if (!id) {
      return response.status(401).json({ error: "token invalid" });
    }
  }
  return next();
};
