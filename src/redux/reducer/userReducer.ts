import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: null,
  loading: true,
};

export const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    userdata: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    userExist: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    userNotExist: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
  },
});

export const { userdata, userExist, userNotExist } = userReducer.actions;
