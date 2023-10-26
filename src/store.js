import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import userReducer from "./features/user/userSlice";
import sidebarReducer from "./features/sidebar/sidebarToggle";

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState: userReducer,
    sidebarState: sidebarReducer,
  },
});
