import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const toggleAnimation = createAsyncThunk(
  "yourSlice/toggleAnimation",
  async (_, { dispatch }) => {
    dispatch(setAnimation(true));
    await wait(2000);
    dispatch(setAnimation(false));
  }
);

const initialState = {
  data: [],
  isCartAnimation: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, actions) => {
      state.data.unshift(actions.payload.data);
    },
    setAnimation: (state, action) => {
      state.isCartAnimation = action.payload;
    },
  },
});

export const { addCart, setAnimation } = cartSlice.actions;

export default cartSlice.reducer;
