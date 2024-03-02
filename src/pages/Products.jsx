import Filters from "../components/Filters";
import PaginationContainer from "../components/PaginationContainer";
import ProductsContainer from "../components/ProductsContainer";
import { customFetch } from "../ultilis";
import { useEffect } from "react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

const url = "/products";

export const loader =
  (queryClient) =>
  async ({ request }) => {
    console.log(request);

    // Alternatives below::::
    // const params1 = new URL(request.url).searchParams;
    // console.log(params1);
    // const search = params.get("search");
    // console.log(search);

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    console.log(params);
    // console.log(params); same result with .entries and without
    // Oject.fromEntries creates an object from an iterable of key-value pairs.
    //  converts an object's own enumerable property [key, value] pairs into an iterable array.

    // console.log(params); ChatGPT why new URL.
    // URL Parsing: The new URL() constructor takes a URL string as its argument
    // and parses it to break down the URL into its individual components, such as
    // the protocol, hostname, port, path, query parameters, and more.

    // .searchParams is one of the components

    //Using new URL(request.url) allows you to parse the URL and access its components easily,
    //which is helpful when working with URLs in web development.
    //It's commonly used when you need to extract information from URLs,
    //modify URLs, or construct new URLs for making API requests or navigation
    //within a web application.

    const response = await customFetch(url, { params });
    console.log(response);
    // request filtered API(params) result through Axios
    // Including the params -> response = results after apply all the searching params.
    // Fop example: if search kids(catergory), artifex(company), the result will be
    // after filtering these searches

    // you can add query parameters to an Axios request
    // by using the params configuration option.
    // Axios provides an easy way to include query parameters in your HTTP requests.
    // Axios will automatically serialize the queryParams object into a query
    // string and append it to the URL when making the request.

    //const queryParams = {
    //   search: 'keyword',
    //   category: 'all',
    //   sort: 'ascending',
    // };            Make a GET request with query parameters
    // axios.get(apiUrl, { params: queryParams })
    //result:  apiUrl?search=keyword&category=all&sort=ascending.

    const products = response.data.data;
    console.log(products);
    const meta = response.data.meta;
    // console.log(meta);
    return { products, meta, params };
  };

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="align-element py-20">
        <details
          tabIndex={0}
          className="collapse collapse-arrow shadow-md bg-gray-100 hover:shadow-xl  transition duration-300 "
        >
          <summary className="collapse-title text-xl font-medium">
            <HiOutlineAdjustmentsHorizontal className="inline-block" /> Filter &
            Search
          </summary>
          <div className="collapse-content transition duration-300">
            <Filters />
          </div>
        </details>

        <ProductsContainer />
        <PaginationContainer />
      </section>
    </>
  );
};
export default Products;
