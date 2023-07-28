import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  name: "",
  src: "",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, actions) => {
      state.isOpen = true;
      state.name = actions.payload.name;
      state.src = actions.payload.video;
    },

    closeModal: (state) => {
      state.isOpen = false;
      state.name = "";
      state.src = "";
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
