import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase"

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const email = useRef();  //like viewchild in angular
  const password = useRef()

  const handleButtonClick = () => {
    // validate the form data
    const message = checkValidateData(email.current.value);
    seterrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      //sign up logic

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode+ "-" +errorMessage)
          
        });
    } else {
      // sign in logic
signInWithEmailAndPassword(auth,  email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("sugnin-",user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+ "-" +errorMessage)
  });

    }
  };

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fd8ae3c6-340b-490b-9d3c-f8a3df895c45/web/IN-en-20260907-TRIFECTA-perspective_e8f74db6-0559-495d-84fb-a75bca089b27_large.jpg"
          alt="banner bg"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 bg-black my-36 mx-auto text-white p-12 right-0 left-0 rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign-In" : "Sign-Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeHolder="Enter Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          ref={password}
          placeholder="Enter Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-700 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign-In" : "Sign-Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix> Sign Up Now"
            : "Already registered? Sign-In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
