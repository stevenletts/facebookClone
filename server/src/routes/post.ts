import postService from "../services/postService";

const postRouter = require("express").Router();

postRouter.post("/", postService.post);

export default postRouter;
