import userService from "../services/userService";
import { authCheck } from "../authorizationHelper";

const userRouter = require("express").Router();

userRouter.get("/find/:id", authCheck, userService.getOne);

userRouter.put("/friend/:id", authCheck, userService.addFriend);

userRouter.put("/unfriend/:id", authCheck, userService.removeFriend);

userRouter.delete("/accountDelete/:id", authCheck, userService.deleteAccount);

userRouter.put("/:id", authCheck, userService.updateAccount);

export default userRouter;
