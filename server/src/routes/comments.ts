import commentService from "../services/commentService";

const commentRouter = require("express").Router();

commentRouter.post("/:id", commentService.newComment);

commentRouter.put("/like/", commentService.addLike);

commentRouter.put("/removelike/", commentService.removeLike);

export default commentRouter;
