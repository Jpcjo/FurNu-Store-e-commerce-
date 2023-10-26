import { useSelector } from "react-redux";
import { CheckoutForm, SectionTitle, CartTotals } from "../components";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";

// This loader ensures a user MUST login before being able to nagivate
// to the checkout page. Even checkout page is hidden by default,
// user could still see the page by entering http://localhost:5173/checkout
export const loader = (store) => () => {
  const user = store.getState().userState.user;
  // console.log(store.getState());
  // console.log(store); store.getState is one of the methods
  // getState() is to get all states(defaultState values we set up)
  // both from userSlice and cartSlice.
  // user: getUserFromLocalStorage(). (check userSlice.jsx if unclear)
  if (!user) {
    toast.warn("You must be logged in to checkout");
    return redirect("/login");
  }
  return null;
};

const Checkout = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to the top
  }, []); // Run this effect once when the component mounts

  const { cartTotal } = useSelector((state) => state.cartState);
  if (cartTotal === 0)
    return (
      <div className="align-element py-20 h-[300px]">
        <SectionTitle text="Your cart is empty" />
      </div>
    );

  return (
    <>
      <section className="align-element py-8 my-12 bg-gray-100 rounded-2xl">
        <SectionTitle text="Place your order" />
        <div className="mt-8 grid gap-8  md:grid-cols-2 items-start">
          <CheckoutForm />
          <CartTotals />
        </div>
      </section>
    </>
  );
};
export default Checkout;
