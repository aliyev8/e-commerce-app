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
      const existingProduct = state.data.find(
        (pr) => pr.id === actions.payload.data.id
      );
      if (existingProduct) {
        state.data = state.data.filter((pr) => pr.id !== existingProduct.id);
      } else {
        state.data.unshift(actions.payload.data);
      }
    },
    setAnimation: (state, action) => {
      state.isWishAnimation = action.payload;
    },
  },
});

export const { addWish, setAnimation } = wishSlice.actions;

export default wishSlice.reducer;
