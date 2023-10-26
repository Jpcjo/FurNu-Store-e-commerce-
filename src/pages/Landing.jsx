import { FeaturedProducts, Hero, LandingHome } from "../components";
import { customFetch } from "../ultilis";
import { useEffect } from "react";

const url = "/products?featured=true";

const featuredProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => customFetch(url),
}; // doesn't have to reload the landing page when nagivate back within the time frame.
// data has already been cached.

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);
  //ensureQueryData is used to ensure that the data for a specific query is
  //available in the cache, and if it's not, it triggers a fetch operation to
  //retrieve the data from the data source (e.g., an API endpoint).
  // console.log(response);
  const products = response.data.data;
  // console.log({ products });
  return { products };
  //return {} and object instead of the original array
};

const Landing = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to the top
  }, []); // Run this effect once when the component mounts
  return (
    <>
      <LandingHome />
      <section className="align-element py-20">
        <Hero />
        <FeaturedProducts />
      </section>
    </>
  );
};
export default Landing;
