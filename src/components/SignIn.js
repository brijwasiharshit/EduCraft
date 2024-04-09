import React from 'react'
import TextBox from './TextBox';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className='flex flex-col w-9/12 md:w-3/12 mx-auto bg-[#f7f8f9] h-[95vh] p-4 my-4 border-[#e5e7e7] border-2'>
   <div className='w-11/12 my-4'>
    <h1 className='text-2xl font-bold w-9/12 sm:w-7/12 text-[28px]'>Signin to your PopX account</h1>
    <h5 className='text-[#8f9296] mt-3 text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,    </h5>
    </div>
    <div className='flex flex-col'>
        <TextBox label = 'Email Address' placeholder = 'Enter email address' required = 'false'/>
        <TextBox label = 'Password' placeholder = 'Enter password' required = 'false'/>
        
        <Link to = '/accountSettings' className='bg-[#cbcbcb] text-white p-2 rounded-md text-center'><button >Login</button></Link> 
    </div>
    </div>
  )
}

export default SignIn;
