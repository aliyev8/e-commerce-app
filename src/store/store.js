import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from "./hamburger.js";
import wishList from "./wishList.js";
import cartSlice from "./cart.js";
import zoomSlice from "./zoom.js";

export const store = configureStore({
  reducer: {
    hamburgerSlice,
    wishList,
    cartSlice,
    zoomSlice,
  },
});
