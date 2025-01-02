import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const commonSlice = createSlice({
  name: "commonData",
  initialState,
  reducers: {
    setCommonData: (state, { payload }) => {
      state = payload;
    },
  },
});

export const { setCommonData } = commonSlice.actions;
