import { createSlice } from "@reduxjs/toolkit";

const prefrenceSlice = createSlice({
  name: "pref",
  initialState: [],
  reducers: {
    setPref(state, action) {
      state = [action.payload];
    },
  },
});

export const { setPref } = chatSlice.actions;
export default prefrenceSlice.reducer;
