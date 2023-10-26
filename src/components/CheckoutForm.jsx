import { Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { customFetch, formatPrice } from "../ultilis";
import { toast } from "react-toastify";
import { clearCart } from "../features/cart/cartSlice";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    console.log(request.formData());
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    };
    // info has to match exact the same format as POSTCreate Order (Authenticated)
    // check https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi#eee18e4c-4cda-40e1-a805-3d8dd077f779

    try {
      const response = await customFetch.post(
        "/orders",
        { data: info }, // has to be renamed data. Has to match exact API Doc
        {
          headers: {
            Authorization: `Bearer ${user.token}`, // has to match API doc
          },
        }
      );
      store.dispatch(clearCart());
      toast.success("order placed successfully");
      return redirect("/orders");
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error placing your order";

      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) return redirect("/login");
      return null;
    }
  };
const CheckoutForm = () => {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl">Shipping Information</h4>
      <FormInput label="first name" name="name" type="text" />
      <FormInput label="address" name="address" type="text" />
      <div className="mt-4">
        <SubmitBtn text="Place Your Order" />
      </div>
    </Form>
  );
};
export default CheckoutForm;
