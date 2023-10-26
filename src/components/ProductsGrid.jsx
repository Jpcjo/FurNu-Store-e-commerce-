import React from "react";
import { Link, useLoaderData } from "react-router-dom";
// useLoaderData can access data from const loader to any nested level
// or be used on any page as long as pass on useLoaderData
// For example: set up loader at Landing.jsx, then we can use "useLoaderData"
// to access { products } from loader
import { formatPrice } from "../ultilis";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { openSidebar } from "../features/sidebar/sidebarToggle";

const ProductsGrid = () => {
  const { products } = useLoaderData();

  const getProduct = (productId) => {
    return products.find((product) => product.id === productId);
  };
  const dispatch = useDispatch();

  const openSidebarHandler = () => {
    dispatch(openSidebar());
  };

  // products.find(
  //     (product) => product.id === getProductId(product)
  //   );
  //   return singleProduct;
  // };

  // console.log(products) = Array(3) [ {…}, {…}, {…} ]
  // 0: Object { id: 19, attributes: {…} } ​
  // 1: Object { id: 6, attributes: {…} }
  // 2: Object { id: 7, attributes: {…} }

  return (
    <div className="pt-12 grid justify-center gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        const productId = product.id;
        const dollarsAmount = formatPrice(price);
        const dispatch = useDispatch();

        const addToCart = () => {
          const productToAdd = getProduct(productId);
          const cartProduct = {
            cartID: productToAdd.id,
            productID: productToAdd.id,
            image: productToAdd.attributes.image,
            title: productToAdd.attributes.title,
            price: productToAdd.attributes.price,
            amount: 1,
            productColor: productToAdd.attributes.colors[0], // You can set the initial color here
            company: productToAdd.attributes.company,
          };
          dispatch(addItem({ product: cartProduct }));
        };
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="card card-compact rounded-xl w-80 mb-6 shadow-lg hover:shadow-xl transition duration-500 "
          >
            <figure>
              <img
                src={image}
                alt={title}
                className="rounded-xl h-64 md:h-48 w-full object-cover hover:scale-110 transition duration-300"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title capitalize tracking-wider">{title}</h2>
              <span className="text-secondary">{dollarsAmount}</span>
              <div className="card-actions justify-center">
                <button
                  className="btn text-sm font-bold  border-gray-500 w-30 h-1.5 shadow-sm hover:scale-[1.08]  hover:border-none hover:bg-gray-100 transition duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart();
                    openSidebarHandler();
                  }}
                >
                  QUICK ADD
                </button>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
