import { createSlice } from "@reduxjs/toolkit";
import authService from "../services/authService";
import { Credentials, SignUpDetails } from "../types";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: "", fullName: "", id: "" },
  reducers: {
    login(_state, action) {
      return action.payload;
    },
    register(_state, action) {
      return action.payload;
    },
    logout(_state, action) {
      return action.payload;
    },
  },
});

export const { login, register, logout } = authSlice.actions;

export const handleLogin = (credentials: Credentials) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return async (dispatch: any) => {
    try {
      const user = await authService.login(credentials);
      dispatch(login(user));
    } catch (error) {
      console.log(error);
    }
  };
};

export const handleRegister = (newUserFormData: SignUpDetails) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return async (dispatch: any) => {
    try {
      const user = await authService.register(newUserFormData);
      dispatch(register(user));
    } catch (error) {
      console.log(error);
    }
  };
};

export default authSlice.reducer;
