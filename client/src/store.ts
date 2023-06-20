import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import currentPostReducer from "./reducers/currentPostReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    currentPosts: currentPostReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
