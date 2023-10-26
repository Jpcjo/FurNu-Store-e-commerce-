import React from "react";
import { Link } from "react-router-dom";

const LandingHome = () => {
  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1632829882891-5047ccc421bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2664&q=80)",
      }}
    >
      {/* <div className="hero-overlay inset-0 bg-opacity-60 "></div> */}
      <div className="relative  min-h-full min-w-full grid place-items-center">
        <div className="absolute  inset-0 bg-black opacity-20 overflow-hidden"></div>
        <div className="hero-content text-center text-neutral-content relative z-10">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-semibold text-white">
              A life individual : our brands
            </h1>
            <p className="mb-5 ">
              Designer, architect and artist, the work of legendary creative
              Gaetano Pesce is everywhere, all at once.
            </p>
            <div className="mt-10">
              <Link
                to="products"
                className="btn btn-primary hover:scale-110 duration-300 text-white "
              >
                View collections
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHome;
