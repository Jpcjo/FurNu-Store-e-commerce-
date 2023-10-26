import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
      if (state.isOpen === true) {
        document.body.style.overflow = "hidden";
      }
      if (state.isOpen === false) {
        document.body.style.overflow = "unset";
      }
    },
    closeSidebar: (state) => {
      state.isOpen = false;
      if (state.isOpen === false) {
        document.body.style.overflow = "unset";
      }
    },
    openSidebar: (state) => {
      state.isOpen = true;
      if (state.isOpen === true) {
        document.body.style.overflow = "hidden";
      }
    },
  },
});

export const { toggleSidebar, closeSidebar, openSidebar } =
  sidebarSlice.actions;

export default sidebarSlice.reducer;
