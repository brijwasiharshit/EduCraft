import React from 'react';

const TextBox = ({ label, placeholder, required,value}) => {
  return (
    <div>
      <div className='flex flex-col relative'>
        <input id='pwd' className='my-4 bg-[#f7f8f9] border-[#8f9296] border-2 p-2 rounded-md ' placeholder={placeholder} value = {value}/>
        <label htmlFor='pwd' className={`absolute top-1 left-2 bg-[#f7f8f9] px-2 text-[#a279fa] font-semibold text-[13px]`}>
          {label} {required === 'true' && <span className='text-red-400'>*</span>}
        </label>
      </div>
    </div>
  );
};

export default TextBox;
