import axios from "axios";
const baseurl = `${import.meta.env.VITE_BASE_URL}/api/user`;

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("Auth")}`,
  },
};

const getOne = async (id: string) => {
  const response = await axios.get(`${baseurl}/find/${id}`, config);
  return response.data;
};

const addFriend = async (userId: string, friendId: string) => {
  const response = await axios.put(
    `${baseurl}/friend/${friendId}`,
    {
      id: userId,
    },
    config
  );
  return response.data;
};

const removeFriend = async (userId: string, friendId: string) => {
  const response = await axios.put(
    `${baseurl}/unfriend/${friendId}`,
    {
      id: userId,
    },
    config
  );
  return response.data;
};

const deleteAccount = async (userId: string) => {
  const response = await axios.delete(
    `${baseurl}/accountdelete/${userId}`,
    config
  );
  return response.data;
};

const updateAccount = async (id: string, updateData: unknown) => {
  const response = await axios.put(`${baseurl}/${id}`, updateData, config);
  return response.data;
};

export default {
  getOne,
  addFriend,
  removeFriend,
  deleteAccount,
  updateAccount,
};
