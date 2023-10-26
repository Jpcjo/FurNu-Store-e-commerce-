import React from "react";
import { formatPrice, generateAmountOptions } from "../ultilis";
import { removeItem, editItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const CartItem = ({
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
      className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
    >
      {/* IMAGE */}
      <Link to={`/products/${productID}`}>
        <img
          src={image}
          alt={title}
          className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover hover:scale-110 duration-300"
        />
      </Link>

      {/* INFO */}
      <div className="sm:ml-16 sm:w-48">
        {/* TITLE */}
        <h3 className="capitalize font-medium">{title}</h3>
        {/* COMPANY */}
        <h4 className="mt-2 capitalize text-sm text-neutral-content">
          {company}
        </h4>
        {/* COLOR */}
        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          color :
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-12">
        {/* AMOUNT */}
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            className="mt-2 select select-base select-bordered select-xs"
            value={amount}
            onChange={handleAmount}
          >
            {generateAmountOptions(amount + 5)}
          </select>
        </div>
        {/* REMOVE */}
        <button
          className="mt-2 link link-primary link-hover text-sm"
          onClick={removeItemFromTheCart}
        >
          remove
        </button>
      </div>

      {/* PRICE */}
      <p className="font-medium sm:ml-auto">{formatPrice(price * amount)}</p>
    </article>
  );
};

export default CartItem;
