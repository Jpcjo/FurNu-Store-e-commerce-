import React from "react";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, NavLink, useLocation } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Navbar = () => {
  const currentPort = window.location.port;
  const [isValue, setIsValue] = useState("");
  const getValue = (e) => {
    setIsValue(e.target.value);
  };

  const url = `https://strapi-store-server.onrender.com/api/products?search=${isValue}&category=all&company=all&order=a-z&price=100000`;
  const params = Object.fromEntries([...new URL(url).searchParams.entries()]);
  // console.log(params);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      // console.log(response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log(response);
      const data = await response.json();
      const products = data.data;
      console.log(products);
    } catch (error) {
      console.error(error);
    }
  };

  const location = useLocation();

  useEffect(() => {
    // Reset the isValue state when the route changes
    setIsValue("");
  }, [location.search]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const closeDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const hoverDropdown = () => {
    setIsDropdownOpen(!closeDropdown());
  };

  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  return (
    <nav className="bg-gray-100">
      <div className="navbar align-element">
        <div className="navbar-start">
          {/* <ul className=" hidden menu menu-horizontal rounded-box lg:flex ">
            <NavLinks />
          </ul> */}

          {/* DROPDOWN DaisyUI*/}
          <div
            className="dropdown dropdown-hover hover:transition duration-500 "
            value={isDropdownOpen}
            onMouseEnter={hoverDropdown}
          >
            <label tabIndex={0} className="btn m-1 hover:scale-110 ">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              // className="dropdown-content z-[1] menu p-2 shadow bg-gray-100 rounded-box w-52"
              className={`dropdown-content ${
                isDropdownOpen ? "z-[1]" : "hidden"
              } menu p-2 shadow bg-gray-100 rounded-box w-52 `}
              value={isDropdownOpen}
            >
              <NavLinks closeDropdown={closeDropdown} />
            </ul>
          </div>
        </div>

        <div className="navbar-center">
          {/* LOGO */}
          <NavLink
            to="/"
            className="font-semibold hover:scale-110  hover:text-slate-700 duration-300 text-3xl items-center lg:text-5xl"
          >
            FurNU ::
          </NavLink>
        </div>
        <div className="navbar-end">
          <form
            className=" hover:scale-105 transition duration-300"
            onSubmit={handleSubmit}
          >
            <div className="form-control">
              <div className="input-group">
                <input
                  type="search"
                  label="search product"
                  name="search"
                  value={isValue}
                  onChange={getValue}
                  placeholder="Search product(s)..."
                  className="input input-xs w-24 sm:w-44  bg-white"
                />

                <Link
                  to={`https://furnu-store-fwudesign.netlify.app/products?search=${isValue}&category=all&company=all&order=a-z&price=100000`}
                  type="submit"
                  className="btn btn-xs bg-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </form>

          {/* CART LINK DaisyUI
          <NavLink
            to="cart"
            className="btn btn-ghost btn-circle btn-md ml-4 hover:scale-110 duration-300"
          >
            <div className="indicator hover:scale-110 duration-300">
              <BsCart3 className="h-6 w-6" />
              <span className=" bg-gray-800 text-white badge badge-sm badge-primary indicator-item">
                {numItemsInCart}
              </span>
            </div>
          </NavLink> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
