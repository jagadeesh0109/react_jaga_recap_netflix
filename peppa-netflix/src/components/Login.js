import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm)
}

  return (
    <div>
      <Header/>
      <div className = "absolute">
         <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fd8ae3c6-340b-490b-9d3c-f8a3df895c45/web/IN-en-20260907-TRIFECTA-perspective_e8f74db6-0559-495d-84fb-a75bca089b27_large.jpg" alt="banner bg" />
      </div>

      <form className="absolute w-3/12 bg-black my-36 mx-auto text-white p-12 right-0 left-0 rounded-lg bg-opacity-80">
      <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign-In" : "Sign-Up"}</h1>
      {!isSignInForm && <input type="text" placeHolder="Enter Full Name" className="p-4 my-4 w-full bg-gray-700"/>}
        <input type="text" placeholder='Email Address' className="p-4 my-4 w-full bg-gray-700"/>
        <input type="password" placeholder='Enter Password' className="p-4 my-4 w-full bg-gray-700" />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign-In" : "Sign-Up"}</button>
        <p className="py-4 cursor-pointer" onClick = {toggleSignInForm}>
          {isSignInForm ? "New to Netflix> Sign Up Now" : "Already registered? Sign-In now"}
        </p>
      </form>
      
    </div>
  )
}

export default Login