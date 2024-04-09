import React from 'react';
import TextBox from './TextBox';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='flex flex-col justify-between w-9/12 md:w-3/12 mx-auto bg-[#f7f8f9] h-[95vh] p-4 my-4 border-[#e5e7e7] border-2 text-sm'>
      <div>
        <div className='w-7/12 my-4'>
          <h1 className='text-[28px] font-bold leading-8'>Create your PopX account</h1> 
        </div>
        <TextBox label='Full Name' placeholder='Marry Doe' required='true' value = 'Marry Doe'/>
        <TextBox label='Phone Number' placeholder='Marry Doe' required='true' value = 'Marry Doe' />
        <TextBox label='Email Address' placeholder='Marry Doe' required='true' value = 'Marry Doe'/>
        <TextBox label='Password' placeholder='Marry Doe' required='true' value = 'Marry Doe'/>
        <TextBox label='Company name' placeholder='Marry Doe' required='false' value = 'Marry Doe'/>
        <div className='mb-8'>
          <div>
            <span>Are you an Agency?</span><span className='text-red-400'>*</span>
          </div>
          <div className='flex items-center mt-2'>
            <input className='w-4 h-4' type="radio" id="yes" name="agency" />
            <label className='ml-2 text-sm' htmlFor="yes">Yes</label>
            <input className='w-4 h-4 ml-4' type="radio" id="no" name="agency" />
            <label htmlFor="no" className='ml-2 text-sm'>No</label>
          </div>
        </div>
      </div>
      <Link className='bg-[#6c25ff] text-white my-4 py-2 rounded-md text-center mt-12' to='/accountSettings'>
        <button className='text-base px-4 py-1'>Create Account</button>
      </Link>
    </div>
  );
}

export default SignUp;
