/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { PostType } from "../types";
import postService from "../services/postService";

const initialState: PostType[] = [];

const currentPostSlice = createSlice({
  name: "currentPosts",
  initialState,
  reducers: {
    newPost(state, action) {
      state.unshift(action.payload);
    },
    addComment(_state, _action) {
      return;
    },
    addLike(state, action) {
      const id = action.payload.id;
      state.map((post) =>
        post.id === id ? (post.likes = action.payload.likes) : post
      );
    },
    removeLike(state, action) {
      const id = action.payload.id;
      state.map((post) =>
        post.id === id ? (post.likes = action.payload.likes) : post
      );
    },
    loadPosts(_state, action) {
      return action.payload;
    },
  },
});

export const { newPost, addComment, addLike, removeLike, loadPosts } =
  currentPostSlice.actions;

export const handleLoadPosts = (id = "") => {
  return async (dispatch: any) => {
    try {
      if (id !== "") {
        const profilePosts = await postService.getProfilePosts(id);
        dispatch(loadPosts(profilePosts));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const likePost = (postId: string, userId: string) => {
  return async (dispatch: any) => {
    const updatedPost = await postService.addLike(postId, userId);
    dispatch(addLike(updatedPost));
  };
};

export const removeLikePost = (postId: string, userId: string) => {
  return async (dispatch: any) => {
    const updatedPost = await postService.removeLike(postId, userId);
    dispatch(removeLike(updatedPost));
  };
};

export const handleNewPost = (post: string, id: string) => {
  return async (dispatch: any) => {
    const newPostAdded = await postService.makePost(post, id);
    dispatch(newPost(newPostAdded));
  };
};

export const handleLoadNewsFeedPosts = (id: string) => {
  return async (dispatch: any) => {
    const newsFeedPosts = await postService.getNewsFeedPosts(id);
    dispatch(loadPosts(newsFeedPosts));
  };
};

export default currentPostSlice.reducer;
