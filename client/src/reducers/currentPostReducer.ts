/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { IPost } from "../types";
import postService from "../services/postService";
import commentService from "../services/commentService";

const initialState: IPost[] = [];

const currentPostSlice = createSlice({
  name: "currentPosts",
  initialState,
  reducers: {
    newPost(state, action) {
      state.unshift(action.payload);
    },
    addComment(state, action) {
      state.map((post) =>
        post.id === action.payload.post
          ? (post.comments = post.comments.concat(action.payload))
          : post
      );
    },
    likeComment(state, action) {
      const { postId, newLikedComment } = action.payload;
      state.map((post) =>
        post.id === postId
          ? post.comments.map((comment) =>
              comment.id === newLikedComment.id
                ? (comment.likes = newLikedComment.likes)
                : comment
            )
          : post
      );
    },
    removeLikeComment(state, action) {
      const { postId, newUnlikedComment } = action.payload;
      state.map((post) =>
        post.id === postId
          ? post.comments.map((comment) =>
              comment.id === newUnlikedComment.id
                ? (comment.likes = newUnlikedComment.likes)
                : comment
            )
          : post
      );
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
      return action.payload.length !== 0 ? action.payload : initialState;
    },
    clearPosts(_state, _action) {
      return initialState;
    },
  },
});

export const {
  newPost,
  addComment,
  addLike,
  removeLike,
  loadPosts,
  likeComment,
  removeLikeComment,
  clearPosts,
} = currentPostSlice.actions;

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

export const handleNewComment = (
  comment: string,
  userId: string,
  postId: string
) => {
  return async (dispatch: any) => {
    const newComment = await commentService.makeComment(
      comment,
      userId,
      postId
    );
    dispatch(addComment(newComment));
  };
};

export const handleLikeComment = (
  commentId: string,
  postId: string,
  userId: string
) => {
  return async (dispatch: any) => {
    const newLikedComment = await commentService.addLike(commentId, userId);
    dispatch(likeComment({ newLikedComment, postId }));
  };
};

export const handleRemoveLikeComment = (
  commentId: string,
  postId: string,
  userId: string
) => {
  return async (dispatch: any) => {
    const newUnlikedComment = await commentService.removeLike(
      commentId,
      userId
    );
    dispatch(removeLikeComment({ newUnlikedComment, postId }));
  };
};

export default currentPostSlice.reducer;
