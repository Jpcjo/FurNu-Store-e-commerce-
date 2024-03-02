import React from "react";
import { Form, useLoaderData, Link } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

const Filters = () => {
  const { meta, params } = useLoaderData();
  const { search, company, category, shipping, order, price } = params;
  console.log(company);
  return (
    <Form
      className="bg-gray-100 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 
    sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center"
    >
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        // name of any input is extremely important. Its has to match back end.
        // it will automatically send the value to backend.
        size="input-sm"
        defaultValue={search}
      />
      {/* passing down props. 
      name has to = search, that matches the back end set up and what the server looks for*/}
      {/* When you use type="search," some browsers may provide a clearable search
      input field with a "clear" or "x" button that allows the user to quickly
      clear the search query. Additionally, pressing the "Enter" key or
      submitting the form containing this input will typically trigger a search
      action. */}
      {/* Search also shows in querystring. 5174/products?search=lamp */}
      {/* CATEGORIES */}
      <FormSelect
        label="select category"
        name="category"
        list={meta.categories}
        size="select-sm"
        defaultValue={category}
      />
      {/* COMPANIES */}
      <FormSelect
        label="select company"
        name="company"
        list={meta.companies}
        size="select-sm"
        defaultValue={company}
      />
      {/* ORDER */}
      <FormSelect
        label="sort by"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        defaultValue={order}
      />
      {/* PRICE */}
      <FormRange
        name="price"
        label="select price"
        size="range-sm"
        price={price}
      />
      {/* SHIPPING */}
      <FormCheckbox
        name="shipping"
        label="Free Shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />
      {/* BUTTONS */}
      <button
        type="submit"
        className="btn btn-sm bg-white  border-none text-gray-800 hover:scale-105 transition duration-500 hover:text-white hover:bg-gray-600  "
      >
        search
      </button>
      <Link
        to="/products"
        className="btn btn-sm bg-white border-none  text-gray-800 hover:scale-105 transition duration-500 hover:text-white hover:bg-gray-600 "
      >
        reset
      </Link>
    </Form>
  );
};

export default Filters;
