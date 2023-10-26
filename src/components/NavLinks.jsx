import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const links = [
  // { id: 1, url: "/", text: "home" },
  { id: 2, url: "about", text: "about us" },
  { id: 3, url: "products", text: "collections" },
  { id: 4, url: "cart", text: "cart" },
  { id: 5, url: "checkout", text: "checkout" },
  { id: 6, url: "orders", text: "orders" },
];

const NavLinks = ({ closeDropdown }) => {
  const { user } = useSelector((state) => state.userState);

  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        if ((url === "checkout" || url === "orders") && !user) return null;
        // If both conditions are met (the url is "checkout" or "orders" and
        // the user is falsy(no user)), the function returns null. That means both
        // checkout and orders won't display

        return (
          <li key={id}>
            <NavLink
              className="capitalize p-2.5  hover:text-slate-700  hover:font-semibold hover:scale-110 hover:bg-base-200 duration-300"
              to={url}
              onClick={closeDropdown}
            >
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
