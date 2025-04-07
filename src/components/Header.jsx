import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {
const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center'>
      <img 
      className='w-40'
      src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' 
      alt='logo'/>
      <div className='flex items-center gap-4'>
        <img alt="user-icon"
        className='w-12 h-12 rounded-full'
        src='https://i.pinimg.com/736x/30/6f/d0/306fd0fb64f67ff40f81d8e37f8bf674.jpg'/>
        <button className='text-white font-bold'
        onClick={handleSignOut}>Sign out</button>

      </div>

    </div>
  )
} 

export default Header