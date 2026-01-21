import React from 'react'
import Input from './Input'

const ContactUser = () => {
  return (
    <div className=' w-210 h-150 flex justify-center items-center'>
      <div className='h-140 w-200'>
        <p className='text-[40px] font-[500] text-center'>Ready to Scale Your Startup Further?</p>
        <p className='text-[20px] font-[400] text-center'>Drop us a line and we’ll get back to you soon!</p>
        <Input />
      </div>
    </div>
  )
}

export default ContactUser