import React from "react";
import { useSelector } from "react-redux";
import CartSidebarItem from "./CartSidebarItem";

const CartSidebarItemsList = () => {
  const { cartItems } = useSelector((state) => state.cartState);
  //   console.log(cartItems);
  return (
    <div>
      {cartItems.map((cartItem) => {
        return <CartSidebarItem key={cartItem.cartID} {...cartItem} />;
      })}
    </div>
  );
};

export default CartSidebarItemsList;
