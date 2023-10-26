import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  // In your reducer, you use the 'action' to determine how to update the 'state'.
  reducers: {
    addItem: (state, action) => {
      // state = the "current state" of the "defaultState" that we've already
      // set up ourselves on the above.      console.log(action);

      // action is the happening action where we set up onClick/onchange
      // with useDispatch() -> (check SingleProduct.jsx if unclear)
      // const addToCart = () => {dispatch(addItem({ product: cartProduct }));
      // console.log(action.payload);
      const { product } = action.payload;
      const item = state.cartItems.find(
        (item) => item.cartID === product.cartID
      ); //if(item) = if item exists, we've already had the product in cart
      if (item) {
        //add new item amount to the existing amounts
        item.amount += product.amount;
      } else {
        // if the item doesn't exist
        state.cartItems.push(product);
        //the .push() method is used to add one or more elements to the end of an array.
      }
      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;

      cartSlice.caseReducers.calculateTotals(state);
      // access reducer inside another reducer:
      // To avoid repeating code, use caseReducers to invoke calculateTotals() reusable reducer
      // This line of code essentially is the same as :
      // state.tax = 0.1 * state.cartTotal;
      // state.orderTotal = state.cartTotal + state.shipping + state.tax;
      // localStorage.setItem("cart", JSON.stringify(state));

      toast.success("Item added to cart");
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, action) => {
      // console.log(action);
      const { cartID } = action.payload;
      const product = state.cartItems.find((i) => i.cartID === cartID);
      // product = the current product you find that owes to be removed
      state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);

      state.numItemsInCart -= product.amount;
      state.cartTotal -= product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.error("Item removed from cart");
    },

    editItem: (state, action) => {
      const { cartID, amount } = action.payload;
      // console.log(action.payload);
      // amount:new amount or quantity of a specific item in the cart.
      const item = state.cartItems.find((i) => i.cartID === cartID);
      // item = the current item you find that owes to be edited
      state.numItemsInCart += amount - item.amount;
      // The line of code state.numItemsInCart += amount - item.amount;
      // calculates the change in the total number of items in the cart due
      // to editing an item's quantity. It does this by subtracting the
      // previous quantity (item.amount) from the new quantity (amount) and
      // adding the result to state.numItemsInCart.

      state.cartTotal += item.price * (amount - item.amount);
      item.amount = amount;
      //is responsible for updating the quantity or amount of a specific
      //item in the shopping cart.
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("Cart updated");
    },

    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    // reusable reducer. Is used by addItem, removeItems and editItem
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
