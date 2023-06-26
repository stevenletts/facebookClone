import userService from "../services/userService";

const userRouter = require("express").Router();

userRouter.get("/find/:id", userService.getOne);

userRouter.put("/friend/:id", userService.addFriend);

userRouter.put("/unfriend/:id", userService.removeFriend);

userRouter.delete("/accountDelete/:id", userService.deleteAccount);

userRouter.put("/:id", userService.updateAccount);

export default userRouter;
