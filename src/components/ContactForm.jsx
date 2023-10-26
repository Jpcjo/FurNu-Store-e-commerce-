import React from "react";

const ContactForm = () => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      className="align-element mx-0 min-h-max sm:m-24 py-12 bg-gray-800  text-white  place-items-center lg:flex lg:justify-between  shadow-md"
    >
      <div className="max-w-md flex flex-col items-center sm:ml-8 sm:items-start">
        <p className="text-3xl font-bold pb-8 sm:pb-12 sm:text-4xl">
          GET IN TOUCH!
        </p>
        <p className=" text-lg font-medium pb-12 sm:text-2xl">
          Any questions, suggestions, concerns or simply wanting to chat? No
          problem! We aim to get back to our customers within 24 hrs.
        </p>
      </div>

      <div className="grid gap-4 justify-center justify-items-end xl:mr-20">
        <input
          type="text"
          placeholder="First Name*"
          className="input bg-white border-none input-sm  w-80 lg:w-60 max-w-xs"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="input  bg-white border-none input-ghost input-sm  w-80 lg:w-60  max-w-xs"
        />
        <input
          type="text"
          placeholder="Email*"
          className="input  bg-white border-none input-sm  w-80 lg:w-60 max-w-xs"
        />
        <textarea
          className="textarea  bg-white border-none  w-80 lg:w-60 textarea-lg"
          placeholder="Comments*"
        ></textarea>

        <button className="btn mt-4 max-w-fit">Send</button>
      </div>
    </form>
  );
};

export default ContactForm;
