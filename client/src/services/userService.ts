import axios from "axios";
const baseurl = `${import.meta.env.VITE_BASE_URL}/api/user`;

const getOne = async (id: string) => {
  const response = await axios.get(`${baseurl}/find/${id}`);
  return response.data;
};

const addFriend = async (userId: string, friendId: string) => {
  const response = await axios.put(`${baseurl}/friend/${friendId}`, {
    id: userId,
  });
  console.log("addFriend");
  console.log(response);
  return response.data;
};

const removeFriend = async (userId: string, friendId: string) => {
  const response = await axios.put(`${baseurl}/unfriend/${friendId}`, {
    id: userId,
  });
  return response.data;
};

export default { getOne, addFriend, removeFriend };
