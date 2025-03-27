import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateForm } from './utils/utils';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './utils/firebase';

const Login = () => {
  const [isSinInForm, setIsSinInForm] = useState(true);
  const [errors, setErrors] = useState([]);

  const formValues = useRef({ email: "", name: "", password: "" })
  const toggleLogin = () => {
    setIsSinInForm(!isSinInForm)
  }

  const handleChange = (e) => {
    formValues.current[e.target.name] = e.target.value;
  };

  const handleButtonClick = (e) => {
    e.preventDefault()
    const failedValidations = validateForm(formValues.current)
    if (failedValidations?.length) {
      setErrors(failedValidations)
      return;
    }
    setErrors([]);

    if (!isSinInForm) {
      //sign up
      createUserWithEmailAndPassword(auth, formValues?.current?.email, formValues?.current?.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("USER Singned UP", user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Error", errorMessage)
        });

    } else {
      //sign in

    }

    //sign in / sign up in local server
    // fetch("http://localhost:5000/")
    //   .then((res) => res.json())
    //   .then((data) => console.log("data fromm server", data));
  }
console.log("REF", formValues)
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web_tall_panel/IN-en-20250317-TRIFECTA-perspective_d3bd14de-3c51-4227-9244-f14c89469189_medium.jpg'
          alt='Background' />
      </div>
      <form onSubmit={(e)=> e.preventDefault()} className='absolute p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white bg-black/70'>
        <h1 className='font-bold text-3xl py-4'>{`Sign ${isSinInForm ? "In" : "Up"}`}</h1>
        {!isSinInForm && 
        <input 
          onChange={handleChange}
          defaultValue={formValues.current.name}
          name={'name'}
          className='p-4 my-4 w-full bg-gray-700' type='text' placeholder='Full Name'
        />}

        <input 
          name={'email'}
          defaultValue={formValues.current.email}
          className={`p-4 my-4 w-full bg-gray-700 ${errors?.includes('Email') ? 'border-solid border border-red-500' : ''}`}
          title={`${errors?.includes('Email') ? 'Invalid Email' : ''}`}
          type='text' placeholder='Email'
          onChange={handleChange}
          />
          <p className='text-red-500 font-bold my-0'>{`${errors?.includes('Email') ? 'Invalid Email' : ''}`}</p>

        <input 
          onChange={handleChange}
          defaultValue={formValues.current.password}
          name='password'
          className={`p-4 my-4 w-full bg-gray-700 ${errors?.includes('Password') ? 'border-solid border border-red-500' : ''}`}
          type='text' placeholder='Password'
        />
        <p className='text-red-500 font-bold my-0'>{`${errors?.includes('Password') ? 'Invalid Email' : ''}`}</p>

        <button type='submit' onClick={handleButtonClick} className='p-4 my-6 bg-red-700 w-full'>{`Sign ${isSinInForm ? "In" : "Up"}`}</button>
        <p className='cursor-pointer' onClick={toggleLogin}>{`${isSinInForm ? "New to Netflix? create account" : "Already a user? Login"}`}</p>
      </form>
    </div>
  )
}

export default Login