import axios from "axios";
const baseurl = `${import.meta.env.VITE_BASE_URL}/api/comment`;

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("Auth")}`,
  },
};

const makeComment = async (comment: string, userId: string, postId: string) => {
  const response = await axios.post(
    `${baseurl}/${postId}`,
    {
      comment,
      userId,
    },
    config
  );
  return response.data;
};

const addLike = async (commentId: string, userId: string) => {
  const response = await axios.put(
    `${baseurl}/like/`,
    {
      commentId,
      userId,
    },
    config
  );
  return response.data;
};
const removeLike = async (
  commentId: string,

  userId: string
) => {
  const response = await axios.put(
    `${baseurl}/removelike/`,
    {
      userId,
      commentId,
    },
    config
  );
  return response.data;
};

export default {
  makeComment,
  addLike,
  removeLike,
};
