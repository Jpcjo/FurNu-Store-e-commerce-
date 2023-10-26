import React from "react";
import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";

const carouselImages = [hero1, hero2, hero3, hero4];

const hero = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl ">
          Nile: A balance in contrast
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8">
          With interiors that play off the vibrance of each collection, the
          Space stores feel like theme parks dedicated to the coolest
          contemporary design.
        </p>
        <p className="mt-8 max-w-xl leading-8"> - Vogue Living</p>
        <div className="mt-10 ">
          <Link
            to="about"
            className="btn btn-primary hover:scale-110 duration-300"
          >
            About & More
          </Link>
        </div>
      </div>
      <div className="hidden  h-[28rem] lg:carousel carousel-center   p-4 space-x-4 bg-neutral rounded-box">
        {/* h-[28rem] is customize height */}
        {carouselImages.map((image, index) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80  object-cover"
                // h-full = height of the parent
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default hero;
