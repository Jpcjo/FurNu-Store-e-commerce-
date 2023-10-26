import React from "react";
import { useSelector } from "react-redux";

const SectionTitle = ({ text, orders }) => {
  const cartItems = useSelector((state) => state.cartState.cartItems);
  // console.log(orders);

  return (
    <div className="border-b border-gray-400 pb-5">
      <h2 className="text-3xl font-bold tracking-wider capitalize">{text}</h2>
    </div>
  );
};

export default SectionTitle;
