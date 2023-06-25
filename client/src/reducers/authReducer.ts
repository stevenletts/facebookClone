/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import authService from "../services/authService";
import userService from "../services/userService";
import { Credentials, SignUpDetails } from "../types";

const initialState = {
  token: "",
  fullName: "",
  id: "",
  friends: [""],
  description: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(_state, action) {
      return action.payload;
    },
    register(_state, action) {
      return action.payload;
    },
    logout() {
      return initialState;
    },
    addFriend(state, action) {
      state.friends = state.friends.concat(action.payload);
    },
    removeFriend(state, action) {
      state.friends = state.friends.filter(
        (friend) => friend !== action.payload
      );
    },
    updateProfile(_state, action) {
      console.log(action.payload);
    },
  },
});

export const { login, register, logout, addFriend, removeFriend } =
  authSlice.actions;

export const handleLogin = (credentials: Credentials) => {
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
  return async (dispatch: any) => {
    try {
      const user = await authService.register(newUserFormData);
      dispatch(register(user));
    } catch (error) {
      console.log(error);
    }
  };
};

//no accepting friend requests implemented because there are no active users
export const handleAddFriend = (userId: string, friendId: string) => {
  return async (dispatch: any) => {
    try {
      const newFriend = await userService.addFriend(userId, friendId);
      dispatch(addFriend(newFriend));
    } catch (e) {
      console.log(e);
    }
  };
};

export const handleRemoveFriend = (userId: string, friendId: string) => {
  return async (dispatch: any) => {
    try {
      const oldFriend = await userService.removeFriend(userId, friendId);
      dispatch(removeFriend(oldFriend));
    } catch (e) {
      console.log(e);
    }
  };
};

export const handleUpdateProfile = (userId: string) => {
  return userId;
};

export default authSlice.reducer;
