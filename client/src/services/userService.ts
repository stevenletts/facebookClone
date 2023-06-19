import axios from "axios";
const baseurl = `${import.meta.env.VITE_BASE_URL}/api/user`;

const getOne = async (id: string) => {
  const response = await axios.get(`${baseurl}/find/${id}`);
  console.log(response);
  return response.data;
};

export default { getOne };
