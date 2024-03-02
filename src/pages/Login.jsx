import { FormInput, SubmitBtn } from "../components";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { customFetch } from "../ultilis";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
//redirect is used in action and loader.
//useNavigate is used in functions

export const action =
  (store) =>
  async ({ request }) => {
    // console.log(store); store.dispatch is one of the methods
    // console.log(request);

    const formData = await request.formData();
    console.log(formData);
    const data = Object.fromEntries(formData);
    console.log(data);

    try {
      const response = await customFetch.post("/auth/local", data);
      console.log(response.data);
      // results of response.data =  action.payload   see userSlice.jsx
      store.dispatch(loginUser(response.data));
      // same as useDispatch. But useDispatch can't be used here.
      // here, it's outside of a React component ( this is an export function)
      // where there is no direct access of useDispatch()
      // To use dispatch outside of a component, you need access to the Redux
      // store itself.
      toast.success("logged in successfully");
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "please double check your credentials";

      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      dispatch(loginUser(response.data));
      toast.success("welcome guest user");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("guest user login error.please try later.");
    }
  };

  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8  shadow-lg gap-y-4 bg-gray-200"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="email"
          name="identifier"
          // name has to be identifier. That's what API is expecting
          // due to customers can log in with both email and username
        />
        <FormInput type="password" label="password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <p className="text-center">--- or ---</p>
        <button
          type="button"
          className="btn btn-secondary btn-block hover:scale-105 duration-300  bg-white hover:bg-white border-none"
          onClick={loginAsGuestUser}
        >
          guest user
        </button>
        <p className="text-center">
          Not a member yet?
          <Link
            to="/register"
            className="ml-2 link link-hover hover:scale-105 duration-300 link-primary capitalize text-gray-400"
          >
            register
          </Link>
        </p>
        <p className="text-center link link-hover link-primary capitalize  text-gray-400 hover:scale-105 duration-300 hover:text-gray-600">
          <Link to="/products">maybe later</Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
