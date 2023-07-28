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
      const existingProduct = state.data.find(
        (pr) => pr.id === actions.payload.data.id
      );

      if (existingProduct) {
        state.data = state.data.filter((pr) => pr.id !== existingProduct.id);
      } else {
        state.data.unshift(actions.payload.data);
      }
    },
    increaseQuantity: (state, actions) => {
      const currentProduct = state.data.find((pr) => pr.id === actions.payload);
      currentProduct.quantity++;
    },
    decreaseQuantity: (state, actions) => {
      const currentProduct = state.data.find((pr) => pr.id === actions.payload);
      currentProduct.quantity--;
    },
    setAnimation: (state, action) => {
      state.isCartAnimation = action.payload;
    },
  },
});

export const { addCart, setAnimation, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
