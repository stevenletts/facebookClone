import axios from "axios";
const baseurl = `${import.meta.env.VITE_BASE_URL}/api/post`;

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("Auth")}`,
  },
};

const makePost = async (post: string, id: string) => {
  const response = await axios.post(`${baseurl}`, { post, id }, config);
  return response.data;
};

const getNewsFeedPosts = async (id: string) => {
  const response = await axios.get(`${baseurl}/newsfeed/${id}`, config);
  return response.data;
};

const getProfilePosts = async (id: string) => {
  const response = await axios.get(`${baseurl}/user/${id}`, config);
  return response.data;
};

const addLike = async (postId: string, userId: string) => {
  const response = await axios.put(
    `${baseurl}/like/${postId}`,
    { userId },
    config
  );

  return response.data;
};
const removeLike = async (postId: string, userId: string) => {
  const response = await axios.put(
    `${baseurl}/removelike/${postId}`,
    {
      userId,
    },
    config
  );

  return response.data;
};

export default {
  makePost,
  getProfilePosts,
  addLike,
  removeLike,
  getNewsFeedPosts,
};
