import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  isZoom: false,
};

export const zoomSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    handleZoom: (state, actions) => {
      state.data = actions.payload.data;
      state.isZoom = actions.payload.isZoom;
    },
  },
});

export const { handleZoom } = zoomSlice.actions;

export default zoomSlice.reducer;
