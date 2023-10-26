import React from "react";
import { useSelector } from "react-redux";
import { formatPrice } from "../ultilis";

const CartSidebarTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );

  return (
    <div className=" bg-gray-50 pt-4 mx-4">
      <p className="flex justify-between">
        <span className="font-bold">Subtotal</span>
        <span className="font-medium">{formatPrice(orderTotal)}</span>
      </p>
    </div>
  );
};

export default CartSidebarTotals;
