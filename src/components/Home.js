import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex flex-col justify-end w-9/12 md:w-3/12 mx-auto bg-[#f7f8f9] h-[95vh] px-4 my-4 border-[#e5e7e7] border-2'>
    <div className='w-9/12'>
    <h1 className='font-bold text-[28px]'>Welcome to Pop X</h1>
    <h5 className='text-[#8f9296] text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h5>
    </div>
    <div className='flex flex-col my-6'>
    <Link  className='bg-[#6c25ff] text-white text-xl my-2 py-2 rounded-md text-center text-[16px]' to = '/signUp'><button>Create Account</button></Link>
     <Link className='bg-[#cbbbfa] text-black my-2 py-2 font-semibold rounded-md text-center text-[16px]' to = '/signIn'> <button>Already Registered? Login</button></Link> 
    </div>
    </div>
  )
}

export default Home;
