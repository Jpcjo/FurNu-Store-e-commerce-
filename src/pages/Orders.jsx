import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../ultilis";
import {
  OrdersList,
  ComplexPaginationContainer,
  SectionTitle,
} from "../components";
import { useEffect } from "react";

export const loader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;

    if (!user) {
      toast.warn("You must log in");
      return redirect("/login");
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]); //For example, if the URL is "https://example.com/?param1=value1&param2=value2"
    // the params object would look like this: { param1: "value1", param2: "value2"}
    // Params is for pagination(pages 1-?)

    try {
      const response = await customFetch.get("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      console.log(response);

      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      console.log(error);

      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error accessing your orders";

      toast.error(errorMessage);

      if (error?.response?.status === 401 || 403) return redirect("/login");

      return null;
    }
  };

const Orders = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to the top
  }, []); // Run this effect once when the component mounts
  const { orders, meta } = useLoaderData();
  if (meta.pagination.total < 1) {
    return (
      <div className="align-element py-20 h-[300px]">
        <SectionTitle text="Please make an order" />
      </div>
    );
  }
  return (
    <>
      <section className="align-element py-20 ">
        <SectionTitle text="Your Orders" orders={orders} />
        <OrdersList />
        <ComplexPaginationContainer />
      </section>
    </>
  );
};
export default Orders;
