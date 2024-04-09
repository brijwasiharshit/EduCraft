import React from 'react'

const AccountSettings = () => {
  return (
    <div className='flex flex-col w-9/12 md:w-3/12 mx-auto bg-[#f7f8f9] h-[95vh] my-4 border-[#e5e7e7] border-2 font-semibold'>
   <div className="bg-white h-14">
    <h4 className='px-4 pt-2 pb-8 text-[18px]'>Account Settings</h4>
   </div>
   
   <div className='border-dashed border-b-2 border-[#c2c3c2] px-2'>
   <div className='flex my-4'>
   <div className='relative'>
    <img src = 'images/marry.png' className='w-16 h-16'/>
    <label className='absolute left-10 top-10'><img className='w-6 h-6' src = 'images/camera.png' /></label>
   </div>
   <div className = 'mx-3'>
   <p className='font-bold text-[15px]'>Marry Doe</p>
   <p className='text-[12px]'>Marry@Gmail.Com</p></div>
   </div>
   
   
    <p className='text-[12px] my-4'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam erat, Sed Diam</p>
   </div>
    </div>
  )
}

export default AccountSettings
