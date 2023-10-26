import React from "react";
import { formatPrice, generateAmountOptions } from "../ultilis";
import { removeItem, editItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { closeSidebar } from "../features/sidebar/sidebarToggle";

const CartSidebarItem = ({
  cartID,
  title,
  price,
  image,
  amount,
  company,
  productColor,
  productID,
}) => {
  const dispatch = useDispatch();

  const removeItemFromTheCart = () => {
    dispatch(removeItem({ cartID }));
  };

  const closeSidebarHandler = () => {
    dispatch(closeSidebar());
  };

  //In Redux and similar state management libraries, "actions" are typically
  //defined as objects with 1. Type property that describes the action to be taken
  //2.An optional payload property that can contain additional data necessary for that action.
  // Hence {} for removeItem({ cartID })

  const handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
    // amount = e.target.value. Input usually is a string, so needs to be
    // parse as an integer before used.
  };

  return (
    <article
      key={cartID}
      className="mb-4 pb-4 grid grid-cols-4 justify-evenly gap-x-8 border-b text-sm  border-gray-300 "
    >
      {/* IMAGE */}
      <Link to={`/products/${productID}`}>
        <img
          src={image}
          alt={title}
          className="h-14 w-14 rounded-lg  object-cover hover:scale-105 duration-300"
          onClick={closeSidebarHandler}
        />
      </Link>

      {/* INFO */}
      <div className="">
        {/* TITLE */}
        <h3 className="capitalize  font-semibold">{title}</h3>
        {/* COMPANY */}
        <h4 className=" capitalize text-xs text-neutral-content">{company}</h4>
        {/* COLOR */}
        <p className="  text-xs capitalize flex items-center gap-x-2">
          color :
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className=" ">
        {/* AMOUNT */}
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text font-semibold">Amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            className="mt-2 select select-bordered select-xs w-16 "
            value={amount}
            onChange={handleAmount}
          >
            {generateAmountOptions(amount + 4)}
          </select>
        </div>
        {/* REMOVE */}
        <button
          className="mt-2 link link-primary link-hover text-xs"
          onClick={removeItemFromTheCart}
        >
          remove
        </button>
      </div>

      {/* PRICE */}
      <p className="font-medium  ">{formatPrice(price * amount)}</p>
    </article>
  );
};

export default CartSidebarItem;
