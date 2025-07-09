import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: JSON.parse(localStorage.getItem("loggedIn")) || false,
  userInfo: JSON.parse(localStorage.getItem("userInfo")) || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.userInfo = action.payload; // e.g. { name, email }
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.loggedIn = false;
      state.userInfo = null;
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("userInfo");
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
