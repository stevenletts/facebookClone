import authService from "../services/authService";

const authRouter = require("express").Router();

// register new user / sign up
authRouter.post("/signup", authService.signUp);

authRouter.post("/signin", authService.signIn);

export default authRouter;
