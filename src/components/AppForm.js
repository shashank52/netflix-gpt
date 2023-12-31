import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";

const AppForm = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value,
      name.current.value,
      isSignInForm
    );

    setErrorMessage(message);
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };
  return (
    <div className="w-4/12 absolute p-16 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
      <h1 className="font-bold text-3xl py-4">
        {isSignInForm ? "Sign In" : "Sign Up"}
      </h1>
      <form onSubmit={(e) => e.preventDefault()}>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
        />
        {errorMessage && (
          <p className="text-red-800 font-bold">*{errorMessage}</p>
        )}
        <button
          className="p-4 my-6 w-full bg-red-700 rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
      </form>
      <p className="cursor-pointer" onClick={toggleSignInForm}>
        {isSignInForm
          ? "New to Netflix? Sign Up Now"
          : "Already a user? Sign in now"}
      </p>
    </div>
  );
};

export default AppForm;
