import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    isDark: false,
  },
  reducers: {
    themeToogling(state) {
      state.isDark = !state.isDark;
    },
  },
});

export default appSlice.reducer;
