import postService from "../services/postService";
import { authCheck } from "../authorizationHelper";

const postRouter = require("express").Router();

postRouter.post("/", authCheck, postService.newPost);

postRouter.get("/user/:id", authCheck, postService.getProfilePosts);

postRouter.get("/newsfeed/:id", authCheck, postService.getNewsFeedPosts);

postRouter.put("/like/:id", authCheck, postService.likePost);

postRouter.put("/removelike/:id", authCheck, postService.removeLike);

export default postRouter;
