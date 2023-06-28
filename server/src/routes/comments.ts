import commentService from "../services/commentService";
import { authCheck } from "../authorizationHelper";

const commentRouter = require("express").Router();

commentRouter.post("/:id", authCheck, commentService.newComment);

commentRouter.put("/like/", authCheck, commentService.addLike);

commentRouter.put("/removelike/", authCheck, commentService.removeLike);

export default commentRouter;
