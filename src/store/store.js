import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from "./hamburger.js";
import wishList from "./wishList.js";
import cartSlice from "./cart.js";
import zoomSlice from "./zoom.js";
import notificationSlice from "./notification";
import modalSlice from "./modal";

export const store = configureStore({
  reducer: {
    hamburgerSlice,
    wishList,
    cartSlice,
    zoomSlice,
    notificationSlice,
    modalSlice,
  },
});
