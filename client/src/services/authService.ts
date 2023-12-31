import axios from "axios";
import { Credentials, SignUpDetails } from "../types";
const baseurl = `${import.meta.env.VITE_BASE_URL}/api/auth`;

const login = async (credentials: Credentials) => {
  const response = await axios.post(`${baseurl}/signin`, credentials);
  localStorage.setItem("Auth", `${response.data.token}`);
  return response.data;
};

const register = async (newUserFormData: SignUpDetails) => {
  const response = await axios.post(`${baseurl}/signup`, newUserFormData);
  localStorage.setItem("Auth", `${response.data.token}`);
  return response.data;
};

export default { login, register };
