import React from 'react'
import Button from '../Section1/Button'

const Input = () => {
    return (
        <div className='p-10 flex flex-col'>
            <label htmlFor="name" className='font-[200px]'>NAME</label>
            <input type="text" placeholder='Enter your Name' id='name' className='outline-none text-[25px] py-3 pl-3' style={{ border: "none", borderBottom: "4px solid red" }} />
            <label htmlFor="Email" className='font-[200px]'>Email</label>
            <input type="text" placeholder='Enter your Email' id='Email' className='outline-none text-[25px] py-3 pl-3' style={{ border: "none", borderBottom: "4px solid red" }} />
            <label htmlFor="Message" className='font-[200px]'>Message</label>


            <textarea rows={3} placeholder="Enter your Message" style={{ border: "none", borderBottom: "4px solid red", outline: "none", fontSize: "25px", padding: "12px" }}></textarea>
            <div className='pt-5'>
                <Button text="Submit your Request" />
            </div>
        </div>
    )
}

export default Input