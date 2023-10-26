import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, closeSidebar } from "../features/sidebar/sidebarToggle";
import { Link } from "react-router-dom";
import { CartSidebarItemsList, CartSidebarTotals } from "../components";
import { clearCart } from "../features/cart/cartSlice";
import { BsTrash3 } from "react-icons/bs";

const CartSidebar = () => {
  const { isOpen } = useSelector((state) => state.sidebarState);
  const { user } = useSelector((state) => state.userState);
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  const dispatch = useDispatch();

  const toggleSidebarHandler = () => {
    dispatch(toggleSidebar());
  };

  const closeSidebarHandler = () => {
    dispatch(closeSidebar());
  };

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  const fullUrl = window.location.href;
  // const isProductPage = fullUrl.includes("/products");
  const isProductPage = /^\/products$/.test(fullUrl);
  const isProductSinglePage =
    fullUrl.includes("?page=1") ||
    fullUrl.includes("?page=2") ||
    fullUrl.includes("?page=3");
  // isProductPage contains only "/products" and nothing else,
  // ^ and $ are regex anchors that respectively indicate the start and end of the string. So, /^\/products$/ will only match URLs that are exactly "/products" and nothing else.

  const destinationUrl =
    isProductPage || isProductSinglePage ? fullUrl : "/products";

  return (
    <section>
      <div
        className={`fixed flex flex-col  items-center top-0 right-0   w-96 h-screen bg-white transition duration-500 ease-in-out z-[120] ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <div className="flex flex-shrink-0 w-96 justify-center mt-4">
          <button className="toggle-button" onClick={clearCartHandler}>
            <BsTrash3 className="w-6 h-6 fixed top-5 right-[330px] hover:scale-[1.25] transition duration-500  hover:text-gray-500" />
          </button>
          <div className="border-b border-gray-400 pb-2">
            <p className="block text-2xl font-medium">YOUR CART</p>
          </div>
          <button className="toggle-button" onClick={toggleSidebarHandler}>
            <AiOutlineClose className="w-8 h-8 top-4 right-4 fixed hover:scale-125 transition duration-500 text-gray-600 hover:text-red-700" />
          </button>
        </div>
        {numItemsInCart === 0 ? (
          <div className="mt-12">Your cart is empty</div>
        ) : (
          <div className="w-full p-4">
            <div className="max-h-[405px] flex-grow overflow-y-auto">
              {/* 12 cols. child 1 contains(span) 8 cols. child 2 contains 4 cols. */}
              <div className="flex flex-col">
                <CartSidebarItemsList />
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col mt-auto fixed bottom-1 w-full">
          <CartSidebarTotals />
          <div className="grid place-items-center">
            <Link
              to={destinationUrl}
              className="btn btn-primary w-80  mt-4 hover:scale-105 transition duration-500"
              onClick={closeSidebarHandler}
            >
              CONTINUE SHOPPING
            </Link>
            {user ? (
              <Link
                to="/checkout"
                className="btn w-80 my-4 hover:scale-105 transition duration-500 "
                onClick={closeSidebarHandler}
              >
                CHECKOUT
              </Link>
            ) : (
              <Link
                to="/login"
                className="btn w-80 btn-primary  my-4 hover:scale-105 transition duration-500"
              >
                PLEASE LOGIN
              </Link>
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed top-0 w-screen h-screen grid place-items-center bg-black bg-opacity-50 z-[100] "
          onClick={closeSidebarHandler}
        >
          {/* Clicking the overlay will close the sidebar */}
        </div>
      )}
    </section>
  );
};

export default CartSidebar;
