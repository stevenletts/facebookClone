import axios from "axios";
const baseurl = `${import.meta.env.VITE_BASE_URL}/api/post`;

const makePost = async (post: string, id: string) => {
  const response = await axios.post(`${baseurl}`, { post, id });
  console.log(response.data);
  return response.data;
};

export default { makePost };
