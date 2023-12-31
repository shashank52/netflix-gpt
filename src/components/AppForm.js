import React, { useState } from 'react';

const AppForm = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = ()=> {
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div className='w-3/12 absolute p-16 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
          <h1 className='font-bold text-3xl py-4'>{isSignInForm ?  "Sign In" : "Sign Up"}</h1>
        <form>
        { !isSignInForm &&  <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800 rounded-lg'/>}
          <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800 rounded-lg'/>
          <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-800 rounded-lg'/>
          <button className='p-4 my-6 w-full bg-red-700 rounded-lg'>{isSignInForm ?  "Sign In" : "Sign Up"}</button>
        </form>
        <p className='cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already a user? Sign in now'}</p>
        </div>
  )
}

export default AppForm