import { createSlice } from "@reduxjs/toolkit";

export type Layout = "masonry" | "infinite";

export interface LayoutState {
  layout: Layout;
}

const initialState: LayoutState = {
  layout: "masonry",
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleLayout: (state) => {
      state.layout = state.layout === "infinite" ? "masonry" : "infinite";
    },
  },
});

export const { toggleLayout } = layoutSlice.actions;
export default layoutSlice.reducer;
