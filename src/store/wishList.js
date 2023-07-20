import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const toggleWishAnimation = createAsyncThunk(
  "yourSlice/toggleAnimation",
  async (_, { dispatch }) => {
    dispatch(setAnimation(true));
    await wait(2000);
    dispatch(setAnimation(false));
  }
);

const initialState = {
  data: [],
  isWishAnimation: false,
};

export const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addWish: (state, actions) => {
      state.data.unshift(actions.payload.data);
    },
    setAnimation: (state, action) => {
      state.isWishAnimation = action.payload;
    },
  },
});

export const { addWish, setAnimation } = wishSlice.actions;

export default wishSlice.reducer;
