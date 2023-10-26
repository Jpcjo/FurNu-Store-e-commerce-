import { FormInput, SubmitBtn } from "../components";
import { Form, redirect, Link } from "react-router-dom";
import { customFetch } from "../ultilis";
import { toast } from "react-toastify";

// In the parameter list of the function, you're expecting an object to be
//passed as an argument to the action function.
// This object is expected to have a property named request.
export const action = async ({ request }) => {
  //  {request} is shorthand of object.request
  // console.log(object);
  // Object { request: Request, params: {}, context: undefined }

  //The .formData() method is a part of the Fetch API in JavaScript, and
  //is used to retrieve the form data from an HTML <form> element or from
  //an HTTP request with a content type of "multipart/form-data"
  //(commonly used when submitting forms).
  //This method is available on a Request or Response object.
  const formData = await request.formData();
  //console.log(formData);  creates a FormData object of form data from HTML
  //FormData(3) { username → "james1 smith", email → "james1@gmail.com", password → "secret" }
  const data = Object.fromEntries(formData);
  //console.log(data); Convert FormData to a JavaScript object
  //Object { username: "james1 smith", email: "james1@gmail.com", password: "secret" }

  try {
    const response = await customFetch.post("/auth/local/register", data);
    // console.log(response);
    toast.success("account created successfully");
    return redirect("/login");
  } catch (error) {
    console.log(error);
    const errorMessage =
      error?.response?.data?.error?.message ||
      "please double check your credentials";

    toast.error(errorMessage);
    return null;
  }
};

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 shadow-lg gap-y-4  bg-gray-200"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput type="text" label="username" name="username" />
        <FormInput type="email" label="email" name="email" />
        <FormInput type="password" label="password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="register" />
        </div>

        <p className="text-center">
          Already a member?
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize  text-gray-400 hover:scale-105 duration-300 hover:text-gray-600"
          >
            login
          </Link>
        </p>
        <p className="text-center link link-hover link-primary capitalize  text-gray-400 hover:scale-105 duration-300 hover:text-gray-600">
          <Link to="/products">maybe later</Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
