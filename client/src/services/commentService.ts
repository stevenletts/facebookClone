import axios from "axios";
const baseurl = `${import.meta.env.VITE_BASE_URL}/api/comment`;

const makeComment = async (comment: string, userId: string, postId: string) => {
  const response = await axios.post(`${baseurl}/${postId}`, {
    comment,
    userId,
  });
  return response.data;
};

const addLike = async (commentId: string, userId: string) => {
  const response = await axios.put(`${baseurl}/like/`, {
    commentId,
    userId,
  });
  return response.data;
};
const removeLike = async (
  commentId: string,

  userId: string
) => {
  const response = await axios.put(`${baseurl}/removelike/`, {
    userId,
    commentId,
  });
  return response.data;
};

export default {
  makeComment,
  addLike,
  removeLike,
};
