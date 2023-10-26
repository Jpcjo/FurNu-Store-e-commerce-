import axios from "axios";

const productionUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  }).format((price / 100).toFixed(2));
  return dollarsAmount;
};

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    // for example: const number = 5;
    // const newArray = Array.from({ length: number }, (_, index) => index);
    // console.log(newArray); // Output: [0, 1, 2, 3, 4]

    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};
