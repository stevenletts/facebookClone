import postService from "../services/postService";

const postRouter = require("express").Router();

postRouter.post("/", postService.newPost);

postRouter.get("/user/:id", postService.getProfilePosts);

postRouter.get("/newsfeed/:id", postService.getNewsFeedPosts);

postRouter.put("/like/:id", postService.likePost);

postRouter.put("/removelike/:id", postService.removeLike);

export default postRouter;
