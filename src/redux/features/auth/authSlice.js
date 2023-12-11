import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAndToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userAndToken = action.payload;
    },

    logout: (state) => {
      state.userAndToken = null;
    },

    saveMovie: (state, action) => {
      state.userAndToken?.user?.favorites?.push(action.payload);
    },
  },
});

export const { login, logout, saveMovie } = authSlice.actions;

export default authSlice.reducer;
