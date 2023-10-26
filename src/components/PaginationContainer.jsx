import React from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  // console.log(meta.pagination);
  const { pageCount, page } = meta.pagination;
  // console.log(page);

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  }); // create an array with pageCount from 1-3 instead of 0-2
  // console.log(pages) -> Array(3) [ 1, 2, 3 ]

  const { search, pathname } = useLocation();
  // console.log(useLocation());
  // for example, if the whole url =
  // http://localhost:5174/products?search=&category=all&company=all&order=a-z&price=32000&page=1
  // pathname: "/products", search: "?search=&category=all&company=all&order=a-z&price=32000&page=1"

  const navigate = useNavigate();
  // console.log(navigate);

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    // console.log(search);
    // console.log(searchParams)->this step is to break down search url(string) into:
    // URLSearchParams(5) { search → "", category → "all", company → "all", order → "a-z", price → "50000" }
    searchParams.set("page", pageNumber);
    // this step allows to add page=pageNumber to the end of URLSearchParams(5)
    // URLSearchParams(6) { search → "", category → "all", company → "all", order → "a-z", price → "50000", page -> "pageNumber" }

    // console.log(searchParams.toString());
    //this step us to turn URLSearchParams(6) back to url string ends with page=pageNumber
    navigate(`${pathname}?${searchParams.toString()}`);
    // this step is to "navigate to" the complete assembled
    // URL: /products/?search..................page=pageNumber
    // and redirect to the assembled new route
  };

  if (pageCount < 2) {
    return null;
  }
  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handlePageChange(prevPage);
          }}
        >
          Prev
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              onClick={() => handlePageChange(pageNumber)}
              key={pageNumber}
              className={`btn btn-xs hover:scale-150 transition duration-300 sm:btn-md border-none join-item ${
                pageNumber === page ? "bg-base-300 border-base-300" : ""
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handlePageChange(nextPage);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default PaginationContainer;
