import userService from "../services/userService";

const userRouter = require("express").Router();

userRouter.get("/find/:id", userService.getOne);

export default userRouter;
