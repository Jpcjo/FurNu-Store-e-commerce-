import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartItemsList = () => {
  const { cartItems } = useSelector((state) => state.cartState);
  //   console.log(cartItems);
  return (
    <div>
      {cartItems.map((cartItem) => {
        return <CartItem key={cartItem.cartID} {...cartItem} />;
      })}
    </div>
  );
};

export default CartItemsList;
