import React from "react";
import { NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { openSidebar, toggleSidebar } from "../features/sidebar/sidebarToggle";

const CartButton = () => {
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  const dispatch = useDispatch();

  const toggleSidebarHandler = () => {
    dispatch(toggleSidebar());
  };
  // const openSidebarHandler = () => {
  //   dispatch(openSidebar());
  // };

  return (
    <div>
      <div
        className="btn btn-circle bg-white bg-opacity-90 border-none btn-lg fixed right-8 bottom-8 drop-shadow-lg animate-bounce hover:scale-110 hover:shadow-2xl transition duration-500 hover:bg-white"
        onClick={toggleSidebarHandler}
      >
        <div className="indicator hover:scale-110 transition duration-500">
          <BsCart3 className="h-8 w-8" />
          <span className=" bg-gray-800 text-white badge badge-md badge-primary indicator-item">
            {numItemsInCart}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartButton;
