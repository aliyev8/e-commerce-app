import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  isOpen: false,
};

export const hamburgerSlice = createSlice({
  name: "hamburger",
  initialState,
  reducers: {
    openMenu: (state, actions) => {
      state.isOpen = state.isOpen ? false : true;
      state.name = actions.payload.name;
    },
  },
});

export const { openMenu } = hamburgerSlice.actions;

export default hamburgerSlice.reducer;
