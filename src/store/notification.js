import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const toggleNotification = createAsyncThunk(
  "yourSlice/toggleAnimation",
  async (_, { dispatch }) => {
    await wait(3000);
    dispatch(closeNotification(false));
  }
);

const initialState = {
  isOpen: false,
  data: "",
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    openNotification: (state, actions) => {
      state.isOpen = true;
      state.data = actions.payload;
    },

    closeNotification: (state, action) => {
      state.isOpen = action.payload;
      state.data = "";
    },
  },
});

export const { openNotification, closeNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
