import { useSelector } from "react-redux";
import { CartItemsList, SectionTitle, CartTotals } from "../components";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Cart = () => {
  const { user } = useSelector((state) => state.userState);
  const { numItemsInCart } = useSelector((state) => state.cartState);

  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to the top
  }, []); // Run this effect once when the component mounts

  // console.log(numItemsInCart);
  if (numItemsInCart === 0) {
    return (
      <section>
        <div className="align-element py-20 h-[300px]">
          <SectionTitle text="Your cart is empty" />
        </div>
      </section>
    );
  }
  return (
    <>
      <section className="align-element py-20">
        <SectionTitle text="Shopping Cart" />
        <div className="mt-8 grid gap-8  lg:grid-cols-12 ">
          {/* 12 cols. child 1 contains(span) 8 cols. child 2 contains 4 cols. */}
          <div className="lg:col-span-8">
            <CartItemsList />
          </div>
          <div className="lg:col-span-4 lg:pl-4">
            <CartTotals />
            {user ? (
              <Link to="/checkout" className="btn btn-primary btn-block mt-8">
                Proceed to checkout
              </Link>
            ) : (
              <Link to="/login" className="btn btn-primary btn-block mt-8">
                please login
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default Cart;
